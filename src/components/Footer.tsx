import React from 'react';
import { Download } from 'lucide-react';
import { GITHUB_CONFIG } from '../data/appData';
import { useRelease } from '../context/ReleaseContext';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const { release } = useRelease();

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 overflow-hidden">
      {/* Background Islamic geometric accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 group mb-4">
              <img
                src="/assets/logo.svg"
                alt="Islamic World"
                className="w-10 h-10 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  Islamic World
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                    {release.version}
                  </span>
                </span>
                <span className="text-[11px] text-zinc-400 font-medium">
                  Official Android Application
                </span>
              </div>
            </a>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              A modern, ad-free Islamic companion featuring authentic 604-page Mushaf Page View, smart prayer calculations, Qibla compass, and complete Hadith collections.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Independent, privacy-first software development</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-emerald-400 transition-colors">Screenshots</a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-emerald-400 transition-colors">Download APK</a>
              </li>
              <li>
                <a href="#versions" className="hover:text-emerald-400 transition-colors">Changelog</a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Verification & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Trust & Source
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <a
                  href={GITHUB_CONFIG.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-emerald-400 transition-colors">
                  SHA-256 Verification
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  APK Safety Advisory
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  Authentic Sourcing
                </a>
              </li>
            </ul>
          </div>

          {/* Download Quick Card */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Release Info
            </h4>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs space-y-2 mb-3">
              <div className="flex justify-between">
                <span className="text-zinc-400">Version</span>
                <span className="text-white font-mono font-bold">{release.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Size</span>
                <span className="text-emerald-400 font-mono font-bold">{release.apkSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Target</span>
                <span className="text-white">Android 15</span>
              </div>
            </div>

            <a
              href={release.downloadUrl}
              download={release.fileName}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download APK
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} Islamic World. Developed with dedication by <strong className="text-zinc-200">Ubaid Bilal</strong>.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span>•</span>
            <a
              href={GITHUB_CONFIG.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a href="#downloads" className="text-zinc-400 hover:text-emerald-400 transition-colors">
              Verify APK
            </a>
            <span>•</span>
            <span className="text-emerald-400">100% Free & Open</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
