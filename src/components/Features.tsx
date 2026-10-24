import React, { useState } from 'react';
import {
  BookOpen,
  BookMarked,
  Headphones,
  Clock,
  Compass,
  CalendarDays,
  Heart,
  Scroll,
  Layers,
  Moon,
  Calculator,
  Search,
  TrendingUp,
  Bookmark,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { APP_FEATURES, type AppFeature } from '../data/appData';

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpen,
  BookMarked,
  Headphones,
  Clock,
  Compass,
  CalendarDays,
  Heart,
  Scroll,
  Layers,
  Moon,
  Calculator,
  Search,
  TrendingUp,
  Bookmark
};

type CategoryFilter = 'All' | 'Quran' | 'Worship' | 'Knowledge' | 'Tools';

export const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = ['All', 'Quran', 'Worship', 'Knowledge', 'Tools'];

  const filteredFeatures = activeCategory === 'All'
    ? APP_FEATURES
    : APP_FEATURES.filter(f => f.category === activeCategory);

  return (
    <section id="features" className="relative py-24 scroll-mt-20">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Comprehensive Islamic Companion
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered for devotion. Crafted for clarity.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Every feature in Islamic World is built with attention to Islamic scholarship, astronomical precision, and distraction-free mobile design.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/25 font-semibold'
                      : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${APP_FEATURES.length})` : ''}
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature: AppFeature, idx: number) => {
            const Icon = ICON_MAP[feature.iconName] || BookOpen;
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={feature.id}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  isFeatured && activeCategory === 'All'
                    ? 'bg-gradient-to-br from-emerald-950/70 via-zinc-900/90 to-zinc-950 border border-emerald-500/40 shadow-xl shadow-emerald-950/50 hover:border-emerald-400'
                    : 'bg-zinc-900/70 backdrop-blur-sm border border-zinc-800/80 hover:border-emerald-600/50 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-emerald-950/30'
                }`}
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    {feature.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 tracking-wide">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Category */}
                  <div className="text-[11px] font-semibold text-emerald-500 uppercase tracking-wider mb-1">
                    {feature.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-emerald-200 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                {/* Card Footer Indicator */}
                <div className="pt-4 mt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Built-in & Offline-Ready
                  </span>
                  <span className="text-zinc-400 group-hover:text-emerald-400 transition-colors font-mono">
                    #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
