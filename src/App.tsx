import React, { useState } from 'react';
import { ReleaseProvider } from './context/ReleaseContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { Features } from './components/Features';
import { ScreenshotsShowcase } from './components/ScreenshotsShowcase';
import { DownloadsSection } from './components/DownloadsSection';
import { VersionHistory } from './components/VersionHistory';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState<boolean>(false);

  return (
    <ReleaseProvider>
      <div className="min-h-screen bg-[#020B08] text-white selection:bg-emerald-500 selection:text-zinc-950 font-sans antialiased overflow-x-hidden">
        {/* Sticky Top Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main>
          {/* Hero Section with Device Frame & CTA */}
          <Hero />

          {/* Statistical Highlights Banner */}
          <StatsBanner />

          {/* Bento Grid Feature Showcase */}
          <Features />

          {/* HD Device Screenshots Showcase & Lightbox */}
          <ScreenshotsShowcase />

          {/* APK Downloads, SHA-256 Checksum & Installation Instructions */}
          <DownloadsSection />

          {/* Version Release Timeline & Changelog */}
          <VersionHistory />

          {/* Mission, Authenticity & Important Prayer Times Advisory */}
          <AboutSection />

          {/* Searchable Frequently Asked Questions Accordion */}
          <FaqSection />
        </main>

        {/* Global Footer */}
        <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

        {/* Privacy Policy Lightbox Modal */}
        <PrivacyModal
          isOpen={isPrivacyOpen}
          onClose={() => setIsPrivacyOpen(false)}
        />
      </div>
    </ReleaseProvider>
  );
};

export default App;
