import React, { useState } from 'react';
import { Trophy, Crown, Medal, Flame, Star, Shield } from 'lucide-react';
import { HallOfFameSeason, PlayerAward } from '../types';

interface HallOfFameSectionProps {
  seasons: HallOfFameSeason[];
}

export const HallOfFameSection: React.FC<HallOfFameSectionProps> = ({ seasons }) => {
  const [selectedSeasonId, setSelectedSeasonId] = useState<string>(
    seasons[0]?.seasonId || 'season-3'
  );

  const activeSeason = seasons.find((s) => s.seasonId === selectedSeasonId) || seasons[0];

  const getRoleBadge = (role: PlayerAward['role']) => {
    switch (role) {
      case 'Champion':
        return {
          icon: <Crown className="w-4 h-4 text-black" />,
          title: 'CHAMPION',
          gradient: 'from-[#1a1a1a] to-[#0a0a0a]',
          border: 'border-yellow-600/40',
          badgeBg: 'bg-[#D4AF37] text-black',
          glow: 'shadow-[0_0_20px_rgba(212,175,55,0.2)]'
        };
      case 'Runner-up':
        return {
          icon: <Medal className="w-4 h-4 text-white" />,
          title: 'RUNNER-UP',
          gradient: 'from-[#151515] to-[#0a0a0a]',
          border: 'border-white/10',
          badgeBg: 'bg-zinc-800 text-zinc-100',
          glow: ''
        };
      case 'Golden Boot':
        return {
          icon: <Flame className="w-4 h-4 text-black" />,
          title: 'GOLDEN BOOT',
          gradient: 'from-[#1a1a1a] to-[#0a0a0a]',
          border: 'border-orange-500/30',
          badgeBg: 'bg-orange-500 text-black',
          glow: ''
        };
      case 'MVP':
        return {
          icon: <Star className="w-4 h-4 text-black" />,
          title: 'Third Place',
          gradient: 'from-[#1a1a1a] to-[#0a0a0a]',
          border: 'border-yellow-600/30',
          badgeBg: 'bg-amber-400 text-black',
          glow: ''
        };
      default:
        return {
          icon: <Star className="w-4 h-4 text-black" />,
          title: String(role).toUpperCase(),
          gradient: 'from-[#1a1a1a] to-[#0a0a0a]',
          border: 'border-yellow-600/30',
          badgeBg: 'bg-amber-400 text-black',
          glow: ''
        };
    }
  };

  const renderPlayerCard = (player?: PlayerAward, isHighlight = false) => {
    if (!player) return null;
    const roleStyle = getRoleBadge(player.role);

    return (
      <div
        key={player.role}
        className={`relative rounded-2xl bg-gradient-to-b ${roleStyle.gradient} border ${roleStyle.border} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${roleStyle.glow}`}
      >
        <div>
          {/* Role Header Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 ${roleStyle.badgeBg}`}>
              {roleStyle.icon}
              <span>{roleStyle.title}</span>
            </span>
            {isHighlight && (
              <span className="text-[#D4AF37] font-extrabold text-[10px] uppercase tracking-widest flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 fill-[#D4AF37]" />
                <span>1st Place</span>
              </span>
            )}
          </div>

          {/* Player Image & Avatar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 bg-gray-900 shrink-0 shadow-lg group">
              <img
                src={player.avatar}
                alt={player.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    player.name
                  )}&background=0a0a0a&color=D4AF37&size=200`;
                }}
              />
            </div>

            <div className="min-w-0">
              <h4 className="text-lg font-black text-white truncate uppercase tracking-tight">
                {player.name}
              </h4>
              {player.gamerTag && (
                <div className="text-xs text-[#D4AF37] font-mono font-bold truncate">
                  @{player.gamerTag}
                </div>
              )}
              {player.team && (
                <div className="text-[11px] text-gray-400 font-medium flex items-center gap-1 mt-1 truncate">
                  <Shield className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                  <span>{player.team}</span>
                </div>
              )}
            </div>
          </div>

          {/* Performance Stat / Achievement */}
          {player.stat && (
            <div className="p-3 rounded-lg bg-black/50 border border-white/5 text-xs text-gray-300 mb-2 font-semibold flex items-center justify-between">
              <span className="text-gray-500 uppercase text-[9px] tracking-widest">Record</span>
              <span className="text-[#D4AF37] font-extrabold">{player.stat}</span>
            </div>
          )}
        </div>

        {/* Footer info */}
        {player.favoriteClub && (
          <div className="pt-3 border-t border-white/5 text-[10px] text-gray-500 font-bold uppercase tracking-wider flex items-center justify-between mt-2">
            <span>Club: {player.favoriteClub}</span>
            <span className="text-[#D4AF37]">Verified Champion</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="hall-of-fame" className="py-24 bg-[#050505] text-white relative border-t border-white/5">
      
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-gold-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-600/10 border border-yellow-600/30 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Trophy className="w-4 h-4 text-[#D4AF37]" />
            <span>Past Winners • Wall of Fame</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            HALL OF <span className="text-[#D4AF37]">FAME</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Honoring the elite champions, runners-up, top scorers, and tournament MVPs from our previous seasons.
          </p>
        </div>

        {/* Season Selector Tabs matching Immersive UI */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {seasons.map((season) => {
            const isSelected = season.seasonId === selectedSeasonId;
            return (
              <button
                key={season.seasonId}
                onClick={() => setSelectedSeasonId(season.seasonId)}
                id={`hof-season-tab-${season.seasonId}`}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-105'
                    : 'bg-[#0a0a0a] border border-white/10 text-gray-400 hover:text-white hover:border-yellow-600/30'
                }`}
              >
                <Trophy className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-[#D4AF37]'}`} />
                <span>{season.seasonName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Season Sub-Header */}
        {activeSeason && (
          <div className="bg-[#111111] border border-white/10 rounded-xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white uppercase tracking-tight flex items-center justify-center sm:justify-start gap-2">
                <Crown className="w-5 h-5 text-[#D4AF37]" />
                <span>{activeSeason.seasonName}</span>
              </h3>
              <div className="text-xs text-gray-400 mt-0.5">
                {activeSeason.game} • Completed {activeSeason.dateCompleted}
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-yellow-600/10 border border-yellow-600/30 text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest">
              Verified Records
            </div>
          </div>
        )}

        {/* 4 Player Award Cards Grid */}
        {activeSeason && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Champion */}
            {renderPlayerCard(activeSeason.champion, true)}

            {/* Runner-up */}
            {renderPlayerCard(activeSeason.runnerUp)}

            {/* 3rd Place */}
            {renderPlayerCard(activeSeason.mvp || (activeSeason as any).thirdplace || (activeSeason as any).thirdPlace)}

            {/* Golden Boot */}
            {renderPlayerCard(activeSeason.goldenBoot)}

          </div>
        )}

      </div>

    </section>
  );
};
