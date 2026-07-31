import React from 'react';
import { Trophy, ArrowUp, MessageSquare, Facebook, Youtube, Share2, HelpCircle } from 'lucide-react';
import { CommunityData } from '../types';

interface FooterProps {
  data: CommunityData;
  onOpenEditGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ data, onOpenEditGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'WhatsApp':
        return <MessageSquare className="w-4 h-4 text-emerald-400" />;
      case 'Discord':
        return <Share2 className="w-4 h-4 text-indigo-400" />;
      case 'Facebook':
        return <Facebook className="w-4 h-4 text-blue-400" />;
      case 'YouTube':
        return <Youtube className="w-4 h-4 text-red-500" />;
      default:
        return <Share2 className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <footer className="bg-[#030303] text-gray-400 border-t border-white/5 pt-12 pb-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-700 p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <div className="w-full h-full bg-[#030303] rounded-[6px] flex items-center justify-center font-black text-black">
                  <Trophy className="w-4 h-4 text-[#D4AF37]" />
                </div>
              </div>
              <span className="font-black text-lg text-white uppercase tracking-tighter">
                ULTIMATE <span className="text-[#D4AF37]">PLAYHOUSE</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs max-w-sm leading-relaxed">
              {data.tagline}. The premier competitive arena for FC Mobile & eFootball gamers.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenEditGuide}
                id="footer-edit-guide-btn"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a0a0a] border border-white/10 hover:border-yellow-600/30 text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest transition-all"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Beginner's Edit Guide</span>
              </button>
            </div>
          </div>

          {/* Nav Sections Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">
                  1. Home
                </a>
              </li>
              <li>
                <a href="#tournament" className="hover:text-[#D4AF37] transition-colors">
                  2. Tournament
                </a>
              </li>
              <li>
                <a href="#hall-of-fame" className="hover:text-[#D4AF37] transition-colors">
                  3. Hall of Fame
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Join Our Community
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {data.socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`social-link-${link.platform.toLowerCase()}`}
                  className="p-2.5 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-yellow-600/30 text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all group"
                >
                  {getSocialIcon(link.platform)}
                  <span className="truncate group-hover:text-[#D4AF37] transition-colors">{link.label}</span>
                </a>
              ))}
            </div>
            <div className="text-[10px] text-gray-500 pt-1">
              Contact: <span className="text-gray-300 font-mono">{data.contactEmail}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Required Copyright Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <div>
            © Ultimate Playhouse | FC Mobile & eFootball Community
          </div>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="p-2 rounded-lg bg-[#0a0a0a] border border-white/10 hover:border-yellow-600/30 text-gray-400 hover:text-[#D4AF37] transition-all flex items-center gap-1.5 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};
