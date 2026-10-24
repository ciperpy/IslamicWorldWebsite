import React from 'react';
import { X, ShieldCheck, Lock, Smartphone, Database, MapPin, EyeOff } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full my-8 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Privacy Policy
            </h3>
            <span className="text-xs text-zinc-400 font-mono">
              Last updated: October 2026 • Islamic World
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-5 text-sm text-zinc-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs">
            <strong>Summary:</strong> Islamic World is built with privacy by design. We do not track you, sell your information, or inject advertisements. Your worship data belongs entirely to you.
          </div>

          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-emerald-400" />
              1. Local-Only Storage
            </h4>
            <p>
              All personal worship data — including Ayah bookmarks, daily reading streaks, prayer records, Zakat calculations, and custom preferences — is stored strictly on your device inside an offline SQLite database (Room). It is never sent to external servers or cloud repositories.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              2. Location Data
            </h4>
            <p>
              When granted, device location is used locally on your device to calculate accurate astronomical prayer times and to calculate the magnetic bearing towards the Holy Kaaba in Makkah. Your GPS coordinates are never transmitted, stored on remote servers, or logged.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
              <EyeOff className="w-4 h-4 text-emerald-400" />
              3. Zero Trackers & Ad Networks
            </h4>
            <p>
              The Islamic World APK does not contain Google Firebase Analytics, Facebook SDK, commercial advertising networks, or user behavioral profiling libraries.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-emerald-400" />
              4. No Mandatory Accounts
            </h4>
            <p>
              You are never required to create an account, log in with an email address, or provide personal identity information to access 100% of Islamic World’s features.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              5. Contact Developer
            </h4>
            <p>
              If you have any questions or concerns regarding our privacy practices, you may contact the developer directly (<strong>Ubaid Bilal</strong>) via the contact information provided in the application.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
