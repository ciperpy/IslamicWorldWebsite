import React, { useState } from 'react';
import {
  Download,
  Copy,
  Check,
  ShieldCheck,
  FileCheck,
  Terminal,
  AlertCircle,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { useRelease } from '../context/ReleaseContext';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const DownloadsSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'windows' | 'mac' | 'linux'>('windows');
  const { release, isLiveFromGitHub } = useRelease();

  const copyChecksum = () => {
    navigator.clipboard.writeText(release.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const verifyCommands = {
    windows: `certutil -hashfile ${release.fileName} SHA256`,
    mac: `shasum -a 256 ${release.fileName}`,
    linux: `sha256sum ${release.fileName}`
  };

  return (
    <section id="downloads" className="relative py-24 scroll-mt-20">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Download className="w-3.5 h-3.5" />
            Official GitHub Release Distribution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Download Islamic World for Android
          </h2>
          <p className="text-base sm:text-lg text-zinc-300">
            Get the full, standalone Android package directly from GitHub Releases. Pure, ad-free, and digitally signed by the developer.
          </p>
        </div>

        {/* Main APK Download Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-emerald-950/80 via-zinc-900/95 to-zinc-950 border border-emerald-500/40 shadow-2xl shadow-emerald-950/60 overflow-hidden">
            {/* Decorative background star */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Left Column: Metadata & Features */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-zinc-950">
                    Latest Stable
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 font-mono">
                    {release.version}
                  </span>
                  <span className="text-xs text-zinc-400">
                    Released {release.releaseDate}
                  </span>
                  {isLiveFromGitHub ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live from GitHub
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] text-zinc-400 bg-zinc-800/80">
                      Official Release
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Islamic World APK
                </h3>
                <p className="text-sm text-zinc-300 mb-6 max-w-xl">
                  Includes full 114 Surahs, authentic 604-page Mushaf View, offline prayer times, Qibla compass, and over 60 authentic Duas.
                </p>

                {/* Spec Badges Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-zinc-800/80 mb-6">
                  <div>
                    <span className="text-[11px] text-zinc-400 block">File Size</span>
                    <span className="text-sm font-bold text-white font-mono">{release.apkSize}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 block">Min Android</span>
                    <span className="text-sm font-bold text-emerald-400">Android 7.0+</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 block">Target OS</span>
                    <span className="text-sm font-bold text-emerald-400">Android 15</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 block">License</span>
                    <span className="text-sm font-bold text-white">100% Free</span>
                  </div>
                </div>

                {/* Dynamic Release Highlights (Automatically populated from GitHub release body) */}
                <div className="space-y-1.5 text-xs text-zinc-300">
                  {release.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Download Button CTA */}
              <div className="w-full lg:w-auto flex flex-col items-center lg:items-end justify-center shrink-0">
                <a
                  href={release.downloadUrl}
                  download={release.fileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 text-zinc-950 text-base sm:text-lg font-extrabold shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  <Download className="w-6 h-6" />
                  <span>Download APK ({release.apkSize})</span>
                </a>
                
                <span className="text-[11px] text-zinc-400 mt-2 text-center lg:text-right font-mono truncate max-w-[280px]">
                  {release.fileName}
                </span>

                <div className="mt-4 flex flex-col sm:flex-row items-center gap-2">
                  <a
                    href={release.githubReleaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-300 hover:text-white border border-zinc-700 text-xs transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View on GitHub</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-400/90 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/40">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Signed Release</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SHA-256 Integrity Verification Box */}
        <div className="max-w-4xl mx-auto rounded-2xl p-6 sm:p-7 bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <FileCheck className="w-5 h-5 text-emerald-400" />
              <h4 className="text-base font-bold text-white">
                Cryptographic Integrity (SHA-256 Checksum)
              </h4>
            </div>
            <span className="text-xs text-zinc-400">
              Verify your downloaded file against this tamper-proof hash
            </span>
          </div>

          {/* Hash Box */}
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 mb-4 font-mono text-xs">
            <div className="flex-1 break-all text-emerald-300 font-medium select-all">
              {release.sha256}
            </div>
            <button
              onClick={copyChecksum}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 font-sans text-xs font-semibold transition-all cursor-pointer shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy SHA-256</span>
                </>
              )}
            </button>
          </div>

          {/* Verification Command Snippets */}
          <div className="border-t border-zinc-800/80 pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                Terminal Verification Command:
              </span>
              <div className="flex gap-1">
                {(['windows', 'mac', 'linux'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-950 font-mono text-xs text-zinc-300 select-all border border-zinc-800/60">
              <code>{verifyCommands[activeTab]}</code>
            </div>
          </div>
        </div>

        {/* 3-Step Installation Guide */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">
              Simple 3-Step Installation Guide
            </h3>
            <p className="text-sm text-zinc-300">
              Installing an APK directly takes less than 30 seconds on any modern Android device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="rounded-2xl p-6 bg-zinc-900/60 border border-zinc-800 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center font-mono mb-4 border border-emerald-500/20">
                01
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Download the APK
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Tap the "Download APK" button above. Your browser will download the official <code className="text-emerald-300 text-xs font-mono">{release.fileName}</code> package directly from GitHub Releases.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl p-6 bg-zinc-900/60 border border-zinc-800 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center font-mono mb-4 border border-emerald-500/20">
                02
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Allow Installation
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                When opened, Android may ask permission to install apps from your browser. Tap <strong className="text-white">Settings</strong> and toggle <strong className="text-emerald-300">"Allow from this source"</strong>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl p-6 bg-zinc-900/60 border border-zinc-800 relative">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center font-mono mb-4 border border-emerald-500/20">
                03
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Tap Install & Launch
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Return to the prompt and tap <strong className="text-white">Install</strong>. Once complete, tap <strong className="text-emerald-300">Open</strong> to begin your spiritual journey with Islamic World!
              </p>
            </div>
          </div>

          {/* Android Security Advisory Note */}
          <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-200/90">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 block mb-0.5">
                Why does Android show "File might be harmful"?
              </strong>
              This standard security warning appears automatically on Android whenever you download any <code className="text-amber-200">.apk</code> file outside the Google Play Store. It simply indicates a direct sideload. Islamic World is 100% clean, virus-free, and contains no third-party tracking libraries.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
