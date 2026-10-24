import React, { useState } from 'react';
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Smartphone,
  Eye,
  Layers
} from 'lucide-react';
import { APP_SCREENSHOTS, type AppScreenshot } from '../data/appData';

type ScreenshotCategory = 'All' | 'Home' | 'Quran' | 'Worship' | 'Trackers' | 'Tools';

export const ScreenshotsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ScreenshotCategory>('All');
  const [selectedScreenshot, setSelectedScreenshot] = useState<AppScreenshot | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const tabs: ScreenshotCategory[] = ['All', 'Home', 'Quran', 'Worship', 'Trackers', 'Tools'];

  const filteredScreenshots = activeTab === 'All'
    ? APP_SCREENSHOTS
    : APP_SCREENSHOTS.filter(s => s.category === activeTab);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? filteredScreenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === filteredScreenshots.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (screenshot: AppScreenshot) => {
    setSelectedScreenshot(screenshot);
    const idx = filteredScreenshots.findIndex(s => s.id === screenshot.id);
    if (idx !== -1) setCurrentIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedScreenshot(null);
  };

  return (
    <section id="screenshots" className="relative py-24 bg-zinc-950/60 border-t border-zinc-900 scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            Direct Device Captures
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience the interface
          </h2>
          <p className="text-base sm:text-lg text-zinc-300">
            High-definition screenshots taken directly from Android devices running Islamic World v1.2.1.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/25 font-semibold'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Showcase Carousel on Tablet / Desktop */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredScreenshots.slice(0, 4).map((shot) => (
              <div
                key={shot.id}
                onClick={() => openLightbox(shot)}
                className="group relative cursor-pointer flex flex-col items-center"
              >
                {/* Phone mockup container */}
                <div className="relative w-full aspect-[9/18] max-w-[270px] rounded-[38px] p-2 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-2xl border border-zinc-700/60 group-hover:border-emerald-500/60 group-hover:scale-[1.02] transition-all duration-300">
                  {/* Speaker pill notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-zinc-900 rounded-full z-20 flex items-center justify-center border border-zinc-700/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 mr-1" />
                    <div className="w-8 h-1 rounded-full bg-zinc-700/50" />
                  </div>

                  {/* Screen Frame */}
                  <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-zinc-950">
                    <img
                      src={shot.image}
                      alt={shot.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 mb-1">
                        <Eye className="w-3.5 h-3.5" />
                        Click to enlarge
                      </div>
                      <p className="text-xs text-zinc-300 line-clamp-2">
                        {shot.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Screenshot Label */}
                <div className="mt-4 text-center">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-0.5">
                    {shot.category}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {shot.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extended Grid of All Screenshots */}
        <div className="border-t border-zinc-800/80 pt-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              All App Views ({filteredScreenshots.length})
            </h3>
            <span className="text-xs text-zinc-400">
              Tap any image to inspect full high-resolution interface
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredScreenshots.map((shot) => (
              <div
                key={shot.id}
                onClick={() => openLightbox(shot)}
                className="group relative cursor-pointer rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/60 hover:border-emerald-500/50 transition-all duration-200"
              >
                <div className="aspect-[9/16] overflow-hidden bg-zinc-950 relative">
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block mb-0.5">
                    {shot.category}
                  </span>
                  <div className="text-xs font-bold text-white truncate group-hover:text-emerald-200">
                    {shot.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900/80 border border-zinc-700 cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="hidden sm:flex absolute -left-14 top-1/2 -translate-y-1/2 p-3 text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-700 rounded-full hover:bg-emerald-600 transition-colors cursor-pointer"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="hidden sm:flex absolute -right-14 top-1/2 -translate-y-1/2 p-3 text-zinc-300 hover:text-white bg-zinc-900/80 border border-zinc-700 rounded-full hover:bg-emerald-600 transition-colors cursor-pointer"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Modal Image Container */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 sm:p-4 shadow-2xl flex flex-col items-center max-h-[78vh] overflow-hidden">
              <img
                src={filteredScreenshots[currentIndex]?.image || selectedScreenshot.image}
                alt={filteredScreenshots[currentIndex]?.title || selectedScreenshot.title}
                className="max-h-[66vh] w-auto rounded-xl object-contain shadow-inner"
              />
              <div className="mt-3 text-center px-4">
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider mb-1">
                  {filteredScreenshots[currentIndex]?.category || selectedScreenshot.category}
                </div>
                <h4 className="text-lg font-bold text-white">
                  {filteredScreenshots[currentIndex]?.title || selectedScreenshot.title}
                </h4>
                <p className="text-xs text-zinc-300 max-w-lg mt-0.5">
                  {filteredScreenshots[currentIndex]?.subtitle || selectedScreenshot.subtitle}
                </p>
              </div>
            </div>

            {/* Mobile Navigation controls */}
            <div className="flex sm:hidden items-center gap-4 mt-4">
              <button
                onClick={handlePrev}
                className="px-4 py-1.5 rounded-full bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1 border border-zinc-700"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <span className="text-xs text-zinc-400 font-mono">
                {currentIndex + 1} / {filteredScreenshots.length}
              </span>
              <button
                onClick={handleNext}
                className="px-4 py-1.5 rounded-full bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1 border border-zinc-700"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
