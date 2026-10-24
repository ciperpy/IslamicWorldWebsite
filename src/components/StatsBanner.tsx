import React from 'react';
import { BookOpen, FileText, BookMarked, Compass, Headphones, ShieldCheck } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
  sublabel: string;
}

const STATS: StatItem[] = [
  {
    icon: BookOpen,
    value: "114",
    label: "Complete Surahs",
    sublabel: "Full Arabic Uthmani text"
  },
  {
    icon: FileText,
    value: "6,236",
    label: "Authentic Ayahs",
    sublabel: "With English translation"
  },
  {
    icon: BookMarked,
    value: "604",
    label: "Mushaf Pages",
    sublabel: "Standard Madinah edition"
  },
  {
    icon: Compass,
    value: "7",
    label: "Calculation Methods",
    sublabel: "Global prayer authorities"
  },
  {
    icon: Headphones,
    value: "4",
    label: "Renowned Reciters",
    sublabel: "Background streaming audio"
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Free & Private",
    sublabel: "Zero tracking, no ads"
  }
];

export const StatsBanner: React.FC = () => {
  return (
    <section className="relative py-12 border-y border-emerald-900/40 bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-emerald-950/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:bg-emerald-900/20 border border-transparent hover:border-emerald-800/40"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-400">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
