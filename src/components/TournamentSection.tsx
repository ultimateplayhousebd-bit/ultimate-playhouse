import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Trophy, 
  AlertCircle, 
  ExternalLink, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Gamepad2,
  FileText
} from 'lucide-react';
import { Tournament } from '../types';

interface TournamentSectionProps {
  tournament: Tournament;
}

export const TournamentSection: React.FC<TournamentSectionProps> = ({ tournament }) => {
  const [copied, setCopied] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);

  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const deadline = new Date(tournament.registrationDeadlineIso).getTime();
      const now = new Date().getTime();
      const difference = deadline - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [tournament.registrationDeadlineIso]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(tournament.registrationFormUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="tournament" className="py-24 bg-[#050505] text-white relative border-t border-white/5">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gold-radial pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-600/10 border border-yellow-600/30 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Active Tournament</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4">
            TOURNAMENT <span className="text-[#D4AF37]">ARENA</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Register for our active season tournament, view schedule, entry requirements, and claim your share of the prize pool.
          </p>
        </div>

        {/* Tournament Card Container matching Immersive UI */}
        <div className="bg-[#111111] border border-yellow-600/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* LEFT COLUMN: Large Tournament Poster Placeholder */}
            <div className="lg:col-span-5 relative bg-[#0a0a0a] flex items-center justify-center min-h-[350px] lg:min-h-[550px] p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/5">
              
              <div className="relative w-full h-full rounded-xl overflow-hidden group shadow-2xl border border-white/10 flex items-center justify-center bg-[#050505]">
                <img
                  src={tournament.posterUrl}
                  alt={tournament.title}
                  className="w-full h-auto max-h-[650px] object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-xl"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/esports-poster/800/1000";
                  }}
                />

                {/* Subtle Gradient Overlay at the top for badge readability */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-widest border border-green-500/30 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                    {tournament.status}
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Title, Details, Fees, Rules & Register CTA */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              
              <div>
                {/* Game Title Tag */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#D4AF37] tracking-widest mb-2">
                  <Gamepad2 className="w-4 h-4" />
                  <span>{tournament.game}</span>
                </div>

                {/* Tournament Title */}
                <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
                  {tournament.title}
                </h3>

                {/* Subtitle */}
                <div className="text-sm sm:text-base font-bold text-[#D4AF37] mb-4 uppercase tracking-wider">
                  {tournament.subtitle}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  {tournament.description}
                </p>

                {/* Key Details Cards Grid matching Immersive UI */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  
                  {/* Date Card */}
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Date & Time</span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-1">{tournament.date} • {tournament.time}</p>
                  </div>

                  {/* Prize Pool Card */}
                  <div className="bg-white/5 p-3 rounded-lg border border-yellow-600/20">
                    <p className="text-[10px] uppercase text-[#D4AF37] font-bold tracking-wider flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>Prize Pool</span>
                    </p>
                    <p className="text-xs sm:text-sm font-extrabold text-[#D4AF37] mt-1">{tournament.prizePool}</p>
                  </div>

                  {/* Entry Fee Card */}
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Entry Fee</span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-1">{tournament.entryFee}</p>
                  </div>

                  {/* Deadline Card */}
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Registration Deadline</span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-1">{tournament.registrationDeadlineText}</p>
                  </div>

                </div>

                {/* Countdown Timer Block */}
                <div className="p-4 rounded-xl bg-[#0a0a0a] border border-yellow-600/20 mb-8">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-[#D4AF37] font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4" />
                        <span>Registration Countdown</span>
                      </div>
                    </div>

                    {!timeLeft.isExpired ? (
                      <div className="flex items-center gap-2">
                        <div className="text-center px-2.5 py-1 bg-[#111111] rounded border border-white/5 min-w-[45px]">
                          <div className="text-base font-black text-[#D4AF37]">{timeLeft.days}</div>
                          <div className="text-[9px] text-gray-500 uppercase">Days</div>
                        </div>
                        <span className="text-[#D4AF37] font-bold">:</span>
                        <div className="text-center px-2.5 py-1 bg-[#111111] rounded border border-white/5 min-w-[45px]">
                          <div className="text-base font-black text-[#D4AF37]">{timeLeft.hours}</div>
                          <div className="text-[9px] text-gray-500 uppercase">Hours</div>
                        </div>
                        <span className="text-[#D4AF37] font-bold">:</span>
                        <div className="text-center px-2.5 py-1 bg-[#111111] rounded border border-white/5 min-w-[45px]">
                          <div className="text-base font-black text-[#D4AF37]">{timeLeft.minutes}</div>
                          <div className="text-[9px] text-gray-500 uppercase">Mins</div>
                        </div>
                        <span className="text-[#D4AF37] font-bold">:</span>
                        <div className="text-center px-2.5 py-1 bg-[#111111] rounded border border-white/5 min-w-[45px]">
                          <div className="text-base font-black text-[#D4AF37]">{timeLeft.seconds}</div>
                          <div className="text-[9px] text-gray-500 uppercase">Secs</div>
                        </div>
                      </div>
                    ) : (
                      <div className="px-3 py-1 bg-red-950/80 border border-red-500/30 rounded-lg text-red-400 text-xs font-bold uppercase">
                        Closed
                      </div>
                    )}
                  </div>
                </div>

                {/* Prize Breakdown List */}
                <div className="mb-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                    <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Prize Distribution</span>
                  </h4>
                  <div className="space-y-2">
                    {tournament.prizeBreakdown.map((tier, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-3 rounded-lg text-xs font-medium transition-colors ${
                          tier.highlight
                            ? 'bg-yellow-600/10 border border-yellow-600/30 text-amber-200'
                            : 'bg-white/5 border border-white/5 text-gray-300'
                        }`}
                      >
                        <span className="font-bold flex items-center gap-2">
                          {tier.badge && <span className="text-base">{tier.badge}</span>}
                          <span>{tier.position}</span>
                        </span>
                        <span className="font-extrabold text-[#D4AF37]">{tier.prize}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tournament Rules Accordion Toggle */}
                <div className="mb-8">
                  <button
                    onClick={() => setRulesOpen(!rulesOpen)}
                    id="toggle-tournament-rules-btn"
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a] border border-white/10 text-xs font-bold text-gray-300 hover:text-[#D4AF37] transition-colors uppercase tracking-wider"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#D4AF37]" />
                      <span>Tournament Rules & Match Guidelines</span>
                    </span>
                    {rulesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {rulesOpen && (
                    <div className="mt-2 p-4 rounded-lg bg-[#0a0a0a] border border-white/5 text-xs text-gray-300 space-y-2 animate-in fade-in duration-200">
                      {tournament.rules.map((rule, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#D4AF37] font-bold shrink-0">{idx + 1}.</span>
                          <span>{rule}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* ACTION AREA: LARGE GLOWING REGISTER BUTTON MATCHING IMMERSIVE UI */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                
                <a
                  href={tournament.registrationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="register-now-btn"
                  className="w-full sm:flex-1 py-4 px-6 bg-[#D4AF37] text-black font-black uppercase tracking-[0.3em] rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                >
                  <span>Register Now</span>
                  <ExternalLink className="w-5 h-5 stroke-[2.5]" />
                </a>

                {/* Copy Form Link Button */}
                <button
                  onClick={handleCopyLink}
                  id="copy-registration-link-btn"
                  className="w-full sm:w-auto p-4 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-yellow-600/30 text-gray-300 hover:text-[#D4AF37] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0"
                  title="Copy Google Form registration link"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#D4AF37]" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
