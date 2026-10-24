import { APP_METADATA, GITHUB_CONFIG, type AppRelease } from '../data/appData';

interface GitHubAsset {
  name: string;
  size: number;
  browser_download_url: string;
  content_type: string;
}

interface GitHubReleaseResponse {
  tag_name: string;
  name: string;
  published_at: string;
  html_url: string;
  body: string;
  assets: GitHubAsset[];
}

export interface DynamicReleaseData extends AppRelease {
  source: 'github' | 'fallback';
  githubReleaseUrl: string;
  isDynamic: boolean;
}

const CACHE_KEY = 'islamic_world_latest_release';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache

function formatFileSize(bytes: number): string {
  if (bytes <= 0) return APP_METADATA.apkSize;
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(2)} MB`;
}

function formatDate(isoString: string): string {
  try {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return APP_METADATA.releaseDate;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return APP_METADATA.releaseDate;
  }
}

function parseHighlightsFromBody(body: string | undefined): string[] {
  if (!body) return APP_METADATA.highlights;

  const lines = body
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0 && !l.startsWith('#'));

  const parsedHighlights: string[] = [];

  for (const line of lines) {
    // Look for bullet points (- ... or * ... or 1. ...)
    const cleaned = line.replace(/^[-*•]\s+/, '').replace(/^\d+\.\s+/, '').trim();
    // Exclude SHA / Checksum lines from highlights
    if (cleaned && !cleaned.toLowerCase().includes('sha256') && !cleaned.toLowerCase().includes('sha-256') && cleaned.length > 5) {
      parsedHighlights.push(cleaned);
    }
  }

  return parsedHighlights.length > 0 ? parsedHighlights.slice(0, 8) : APP_METADATA.highlights;
}

function extractSha256(body: string | undefined): string {
  if (!body) return APP_METADATA.sha256;
  const match = body.match(/\b([a-fA-F0-9]{64})\b/);
  return match ? match[1].toUpperCase() : APP_METADATA.sha256;
}

export async function fetchLatestRelease(): Promise<DynamicReleaseData> {
  // 1. Check Session Cache first to avoid hitting GitHub API rate limits
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TTL_MS) {
        return data as DynamicReleaseData;
      }
    }
  } catch {
    // Ignore cache read failures
  }

  // 2. Fetch from GitHub API
  try {
    const response = await fetch(GITHUB_CONFIG.latestReleaseApiUrl, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      // 404 or rate-limited: Return reliable fallback metadata pointing to GitHub releases
      return getFallbackData();
    }

    const data: GitHubReleaseResponse = await response.json();

    // 3. Find APK asset
    const apkAsset = data.assets?.find(a => a.name.toLowerCase().endsWith('.apk'));

    const version = data.tag_name || APP_METADATA.version;
    const downloadUrl = apkAsset?.browser_download_url ||
      `${GITHUB_CONFIG.releasesUrl}/download/${version}/Islamic-World-${version}.apk`;
    const apkSize = apkAsset ? formatFileSize(apkAsset.size) : APP_METADATA.apkSize;
    const apkSizeBytes = apkAsset?.size || APP_METADATA.apkSizeBytes;
    const fileName = apkAsset?.name || `Islamic-World-${version}.apk`;
    const releaseDate = data.published_at ? formatDate(data.published_at) : APP_METADATA.releaseDate;
    const highlights = parseHighlightsFromBody(data.body);
    const sha256 = extractSha256(data.body);

    const dynamicData: DynamicReleaseData = {
      version,
      versionCode: APP_METADATA.versionCode,
      releaseDate,
      apkSize,
      apkSizeBytes,
      minAndroid: APP_METADATA.minAndroid,
      targetAndroid: APP_METADATA.targetAndroid,
      sha256,
      downloadUrl,
      fileName,
      packageName: APP_METADATA.packageName,
      highlights,
      githubReleaseUrl: data.html_url || `${GITHUB_CONFIG.releasesUrl}/tag/${version}`,
      source: 'github',
      isDynamic: true
    };

    // Save to cache
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({
        timestamp: Date.now(),
        data: dynamicData
      }));
    } catch {
      // Ignore sessionStorage errors
    }

    return dynamicData;
  } catch {
    return getFallbackData();
  }
}

export function getFallbackData(): DynamicReleaseData {
  return {
    ...APP_METADATA,
    downloadUrl: `${GITHUB_CONFIG.releasesUrl}/download/${APP_METADATA.version}/${APP_METADATA.fileName}`,
    githubReleaseUrl: `${GITHUB_CONFIG.releasesUrl}/tag/${APP_METADATA.version}`,
    source: 'fallback',
    isDynamic: false
  };
}
