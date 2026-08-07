import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { TournamentSection } from './components/TournamentSection';
import { HallOfFameSection } from './components/HallOfFameSection';
import { Footer } from './components/Footer';
import { communityData } from './data/communityData';

export default function App() {
  const [isEditGuideOpen, setIsEditGuideOpen] = useState(false);

  const handleScrollToTournament = () => {
    const el = document.getElementById('tournament');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500 selection:text-zinc-950 font-sans antialiased">
      {/* Fixed Header Navigation with 3 Sections */}
      <Navbar
        communityName={communityData.communityName}
        logoImage={communityData.logoImage}
        registrationFormUrl={communityData.currentTournament.registrationFormUrl}
        onOpenEditGuide={() => setIsEditGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. HOME SECTION */}
        <HomeSection
          data={communityData}
          onViewTournamentClick={handleScrollToTournament}
        />

        {/* 2. TOURNAMENT SECTION */}
        <TournamentSection
          tournament={communityData.currentTournament}
        />

        {/* 3. HALL OF FAME SECTION */}
        <HallOfFameSection
          seasons={communityData.hallOfFame}
        />
      </main>

      {/* Footer */}
      <Footer
        data={communityData}
      />
    </div>
  );
}
