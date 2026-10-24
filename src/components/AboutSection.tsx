import React from 'react';
import { HeartHandshake, BookOpen, Compass, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 scroll-mt-20">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Mission & Origin */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              About Islamic World
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              A distraction-free sanctuary for daily devotion.
            </h2>

            <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
              <p>
                <strong>Islamic World</strong> was conceived with a clear principle: modern Muslims deserve a beautifully designed, lightning-fast digital companion that respects the sacredness of the Quran and prayer.
              </p>
              <p>
                Many contemporary religious apps have become overloaded with intrusive banner ads, aggressive subscription prompts, and unnecessary background trackers. Islamic World was created by <strong>Ubaid Bilal</strong> as an independent endeavor to return to what matters most — pure, reliable, and aesthetically dignified access to the Holy Quran, authentic supplications, and precise prayer times.
              </p>
              <p>
                Every verse, prayer calculation, and supplication is stored locally on your device for immediate offline reliability. When you open this app in the mosque, while traveling, or during Tahajjud in the stillness of the night, there are no loading wheels, no popups, and no distractions between you and your worship.
              </p>
            </div>

            {/* Core Values / Sourcing highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-800">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Authentic Quran Text</h4>
                  <p className="text-xs text-zinc-400">
                    Standard 604-page Madinah Uthmani calligraphy aligned with King Fahd Complex editions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Astronomical Precision</h4>
                  <p className="text-xs text-zinc-400">
                    Trusted algorithms with 7 global calculation authorities and Hanafi / Shafi'i Asr options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Islamic Advisory & Integrity Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-8 bg-gradient-to-br from-emerald-950/70 via-zinc-900/90 to-zinc-950 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Important Prayer Times Advisory
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                While Islamic World utilizes verified astronomical mathematics for solar elevation and twilight angles, differences in local terrain, horizon elevation, and municipal conventions may cause minor variations.
              </p>

              <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs text-zinc-400 leading-relaxed space-y-2 mb-6">
                <p>
                  <strong className="text-emerald-300">Local Jama'ah Priority:</strong> Always follow the Adhan and Iqamah times announced by your local mosque and recognized scholars in your area for congregational prayers.
                </p>
                <p>
                  <strong className="text-emerald-300">Continuous Auditing:</strong> All Hadith references and Duas have been sourced from canonical collections including Sahih Al-Bukhari, Sahih Muslim, and Hisn al-Muslim.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span>Independent Development</span>
                <span className="font-semibold text-emerald-400">Ubaid Bilal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
