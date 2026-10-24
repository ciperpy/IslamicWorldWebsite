import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { useRelease } from "../context/ReleaseContext";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { release } = useRelease();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Downloads", href: "#downloads" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#04100D]/90 backdrop-blur-md border-b border-emerald-500/15 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1">
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 border border-amber-500/30 shadow-md group-hover:border-amber-400 transition-all">
              <img
                src="/assets/logo.svg"
                alt="Islamic World Logo"
                className="w-7 h-7 drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wide text-white flex items-center gap-1.5">
                Islamic World
                <span className="text-[10px] font-semibold uppercase tracking-widest px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-400 border border-emerald-500/20">
                  Android
                </span>
              </span>
              <span className="text-xs text-amber-300/80 tracking-wider">
                Your Faith Companion
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#071915]/70 border border-emerald-500/15 rounded-full px-5 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-emerald-500/10 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#downloads"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-900/40 hover:shadow-emerald-600/30 transition-all duration-200 border border-emerald-400/30 active:scale-95"
            >
              <Download className="w-4 h-4 text-amber-200 group-hover:translate-y-0.5 transition-transform" />
              <span>Download APK</span>
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-900/80 text-emerald-200 border border-emerald-400/30">
                {release.version}
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-emerald-900/30 border border-emerald-500/20 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-3 pb-6 bg-[#04100D]/98 border-b border-emerald-500/20 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-200 hover:text-amber-300 hover:bg-emerald-900/30 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-emerald-950/60">
              <a
                href={release.downloadUrl}
                download={release.fileName}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-950/60 border border-emerald-400/40"
              >
                <Download className="w-4 h-4 text-amber-200" />
                <span>Download APK ({release.version} · {release.apkSize})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
