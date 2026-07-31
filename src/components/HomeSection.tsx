import React from 'react';
import { Trophy, ChevronDown, Gamepad2, Award, Zap, ShieldCheck } from 'lucide-react';
import { CommunityData } from '../types';

interface HomeSectionProps {
  data: CommunityData;
  onViewTournamentClick: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ data, onViewTournamentClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 bg-[#050505] text-white overflow-hidden">
      
      {/* Hero Background with Immersive Radial Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {data.heroImage && (
          <img
            src={data.heroImage}
            alt="Ultimate Playhouse Hero"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105"
            referrerPolicy="no-referrer"
          />
        )}
        
        {/* Dark Radial & Linear Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.12)_0%,_transparent_70%)]" />
        
        {/* Subtle Accent Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto pt-4 pb-8">
        
        {/* Badge / Sub-heading Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-600/10 border border-yellow-600/30 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
          <Trophy className="w-4 h-4 text-[#D4AF37] animate-pulse" />
          <span>Welcome Community • Official Arena</span>
        </div>

        {/* Title: Ultimate Playhouse */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white mb-6 drop-shadow-2xl leading-none">
          ULTIMATE <span className="text-[#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">PLAYHOUSE</span>
        </h1>

        {/* Subtitle: The Home of FC Mobile & eFootball Tournaments */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-200 mb-6 tracking-wide max-w-3xl mx-auto uppercase">
          {data.tagline}
        </h2>

        {/* Welcome Message */}
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
          {data.welcomeMessage}
        </p>

        {/* Game Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="px-4 py-2 rounded-xl bg-[#111111] border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <Gamepad2 className="w-4 h-4 text-[#D4AF37]" />
            <span>FC Mobile 2026</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#111111] border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <Zap className="w-4 h-4 text-[#D4AF37]" />
            <span>eFootball Mobile</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#111111] border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>1v1 Head to Head</span>
          </div>
        </div>

        {/* Immersive UI Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onViewTournamentClick}
            id="hero-view-tournament-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-yellow-400 text-black font-black text-xs sm:text-sm uppercase tracking-[0.25em] transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>View Tournament ↓</span>
            <Trophy className="w-4 h-4" />
          </button>

          <a
            href="#hall-of-fame"
            id="hero-hall-of-fame-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-yellow-600/30 bg-yellow-600/5 hover:bg-yellow-600/10 text-gray-200 hover:text-[#D4AF37] font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>Hall of Fame</span>
          </a>
        </div>

      </div>

      {/* Community Statistics Bar matching Immersive UI */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
          
          <div className="text-center p-3 border-b sm:border-b-0 sm:border-r border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37] mb-1">
              {data.stats.tournamentsHosted}
            </div>
            <div className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-widest">
              Tournaments Hosted
            </div>
          </div>

          <div className="text-center p-3 border-b sm:border-b-0 sm:border-r border-white/5">
            <div className="text-2xl sm:text-4xl font-extrabold text-white mb-1">
              {data.stats.activeGamers}
            </div>
            <div className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-widest">
              Gamers
            </div>
          </div>

          <div className="text-center p-3">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37] mb-1">
              {data.stats.totalPrizeDistributed}
            </div>
            <div className="text-[10px] sm:text-xs uppercase text-gray-500 font-bold tracking-widest">
              Prize Awarded
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onViewTournamentClick}
            className="text-gray-500 hover:text-[#D4AF37] transition-colors p-2 animate-bounce"
            aria-label="Scroll to tournament section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>

    </section>
  );
};
