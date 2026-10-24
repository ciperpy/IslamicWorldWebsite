import React from 'react';
import { History, Calendar, CheckCircle2, GitBranch, ExternalLink } from 'lucide-react';
import { RELEASE_HISTORY } from '../data/appData';
import { useRelease } from '../context/ReleaseContext';

export const VersionHistory: React.FC = () => {
  const { release, isLiveFromGitHub } = useRelease();

  // Filter previous releases so we don't duplicate the latest one if it matches
  const previousReleases = RELEASE_HISTORY.filter(
    r => r.version.toLowerCase() !== release.version.toLowerCase()
  );

  return (
    <section id="versions" className="relative py-20 bg-zinc-950/40 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <History className="w-3.5 h-3.5" />
            Release Log & Changelog
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Version History
          </h2>
          <p className="text-sm sm:text-base text-zinc-300">
            A transparent timeline of updates, enhancements, and feature milestones in Islamic World.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-emerald-900/40 ml-4 sm:ml-32 pl-6 sm:pl-8 space-y-10">
          
          {/* 1. Dynamic Latest Release (Reflects live GitHub release) */}
          <div className="relative group">
            {/* Node marker on the line */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-emerald-400 border-zinc-950 ring-4 ring-emerald-500/30 transition-all" />

            {/* Left Date Label for Desktop */}
            <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
              <span className="text-xs font-semibold text-zinc-400 font-mono block">
                {release.releaseDate}
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">
                {release.version}
              </span>
            </div>

            {/* Release Card */}
            <div className="p-6 rounded-2xl border bg-gradient-to-br from-emerald-950/60 via-zinc-900/90 to-zinc-950 border-emerald-500/40 shadow-xl shadow-emerald-950/30 transition-all duration-300">
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-extrabold text-white font-mono flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-emerald-400" />
                    {release.version}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-zinc-950">
                    {isLiveFromGitHub ? "Live on GitHub" : "Latest Release"}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{release.releaseDate}</span>
                  </div>

                  <a
                    href={release.githubReleaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 hover:underline"
                  >
                    <span>Release Notes</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 text-sm text-zinc-300">
                {release.highlights.map((note, nIdx) => (
                  <li key={nIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Historical Previous Releases */}
          {previousReleases.map((rel) => (
            <div key={rel.version} className="relative group">
              {/* Node marker on the line */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-zinc-800 border-zinc-600 group-hover:border-emerald-400 transition-all" />

              {/* Left Date Label for Desktop */}
              <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                <span className="text-xs font-semibold text-zinc-400 font-mono block">
                  {rel.date}
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  {rel.version}
                </span>
              </div>

              {/* Release Card */}
              <div className="p-6 rounded-2xl border bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                {/* Card Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-extrabold text-white font-mono flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-emerald-400" />
                      {rel.version}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {rel.tag}
                    </span>
                  </div>

                  <div className="sm:hidden flex items-center gap-1.5 text-xs text-zinc-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{rel.date}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 text-sm text-zinc-300">
                  {rel.notes.map((note, nIdx) => (
                    <li key={nIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
