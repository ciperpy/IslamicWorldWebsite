import React from "react";
import { Download, Sparkles, ChevronRight, BookOpen, Compass } from "lucide-react";
import { useRelease } from "../context/ReleaseContext";

export const Hero: React.FC = () => {
  const { release, isLiveFromGitHub } = useRelease();

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center bg-islamic-pattern overflow-hidden">
      {/* Ambient Radial Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[500px] h-[400px] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>
                {release.version} Available {isLiveFromGitHub ? "• GitHub Release" : "• Direct Download"}
              </span>
            </div>

            {/* Main Headings */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Islamic <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-amber-300 bg-clip-text text-transparent">World</span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-emerald-300/90 mb-6">
              Your Faith. Your Daily Companion.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300/90 max-w-2xl leading-relaxed mb-8">
              Explore the Holy Quran, listen to recitations, discover authentic duas and Hadith, check prayer times, find the Qibla direction, and strengthen your daily connection with Islam — all in one thoughtfully designed application.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={release.downloadUrl}
                download={release.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/30 border border-emerald-400/40 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <Download className="w-5 h-5 text-amber-200 group-hover:translate-y-0.5 transition-transform" />
                <span>Download for Android</span>
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-100 border border-emerald-400/30">
                  {release.apkSize}
                </span>
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-gray-200 bg-[#091F1A]/80 hover:bg-[#0E2C25] hover:text-white border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
              >
                <span>Explore Features</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            {/* Verified Tech Info Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-6 border-t border-emerald-950/80">
              <div className="flex flex-col p-3 rounded-xl bg-[#061814]/70 border border-emerald-500/15">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Version</span>
                <span className="text-sm font-bold text-white mt-0.5 font-mono">{release.version}</span>
              </div>
              <div className="flex flex-col p-3 rounded-xl bg-[#061814]/70 border border-emerald-500/15">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">APK Size</span>
                <span className="text-sm font-bold text-white mt-0.5">{release.apkSize}</span>
              </div>
              <div className="flex flex-col p-3 rounded-xl bg-[#061814]/70 border border-emerald-500/15">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Android</span>
                <span className="text-sm font-bold text-white mt-0.5">7.0+ (API 24+)</span>
              </div>
              <div className="flex flex-col p-3 rounded-xl bg-[#061814]/70 border border-emerald-500/15">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">License</span>
                <span className="text-sm font-bold text-emerald-300 mt-0.5">100% Free &amp; Offline</span>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            {/* Ambient Background Glow behind device */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-amber-500/10 rounded-full blur-3xl transform scale-90 pointer-events-none" />

            {/* Realistic Smartphone Frame Mockup */}
            <div className="relative w-full max-w-[310px] aspect-[9/18.5] rounded-[48px] p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 shadow-2xl shadow-emerald-950/80 border-2 border-emerald-500/30">
              
              {/* Top Speaker / Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-950 rounded-full z-30 flex items-center justify-center border border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-800 mr-2 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-950" />
                </div>
                <div className="w-10 h-1 rounded-full bg-zinc-800" />
              </div>

              {/* High-Resolution Screen Content */}
              <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-zinc-950 border border-zinc-800/80">
                <img
                  src="/screenshots/home.jpg"
                  alt="Islamic World Home Dashboard Interface"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />

                {/* Subtle Glass Glare Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

                {/* Live Floating Feature Pill on Mockup */}
                <div className="absolute bottom-4 left-3 right-3 p-3 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-emerald-500/30 flex items-center gap-3 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="text-xs font-bold text-white truncate">Madinah Mushaf View</span>
                    <span className="text-[10px] text-emerald-300">604 Authentic Pages</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Floating Mini Card (Qibla & Prayer indicator) */}
            <div className="hidden sm:flex absolute -bottom-6 -left-8 p-3 rounded-2xl bg-[#061814]/90 backdrop-blur-md border border-emerald-500/30 shadow-xl items-center gap-3 animate-bounce-slow">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-white">Live Prayer Times</span>
                <span className="text-[11px] text-gray-300">Next Prayer Countdown</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
