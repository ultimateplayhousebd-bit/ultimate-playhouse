import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy, Sparkles, HelpCircle } from 'lucide-react';

interface NavbarProps {
  communityName: string;
  registrationFormUrl: string;
  logoImage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ communityName, registrationFormUrl, logoImage, onOpenEditGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'tournament', 'hall-of-fame'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'tournament', label: 'Tournament', href: '#tournament' },
    { id: 'hall-of-fame', label: 'Hall of Fame', href: '#hall-of-fame' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-yellow-600/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-[#050505]/90 border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo with Image and Text on same line */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center space-x-3 group cursor-pointer py-0.5"
            id="nav-logo-link"
          >
            {logoImage ? (
              <img
                src={logoImage}
                alt={communityName}
                className="h-9 w-9 sm:h-10 sm:w-10 object-contain rounded-lg shadow-[0_0_12px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center font-black text-black text-lg shadow-[0_0_15px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-transform duration-300">
                UP
              </div>
            )}
            <div>
              <span className="font-black text-lg sm:text-xl uppercase tracking-tighter text-white flex items-center gap-1.5 leading-none">
                ULTIMATE <span className="text-[#D4AF37]">PLAYHOUSE</span>
              </span>
              <span className="block text-[9px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-1">
                FC Mobile & eFootball Hub
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 bg-[#111111]/80 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  id={`nav-link-${item.id}`}
                  className={`text-xs font-bold uppercase tracking-widest transition-all duration-200 pb-1 ${
                    isActive
                      ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                      : 'text-gray-400 hover:text-white border-b-2 border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Quick Edit Helper & Register CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenEditGuide}
              id="edit-guide-nav-btn"
              title="How to edit website text & form link"
              className="px-3.5 py-2 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] text-gray-400 hover:text-[#D4AF37] border border-white/10 hover:border-yellow-600/30 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
            >
              <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Edit Guide</span>
            </button>

            <a
              href={registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-register-now-btn"
              className="px-4 py-2 rounded-lg bg-[#D4AF37] hover:bg-yellow-400 text-black font-black text-xs uppercase tracking-[0.15em] transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-105 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>REGISTER NOW</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenEditGuide}
              id="mobile-edit-guide-btn"
              className="p-2 rounded-lg bg-[#111111] border border-yellow-600/30 text-[#D4AF37] text-xs"
              title="Edit Guide"
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2.5 rounded-lg bg-[#111111] border border-white/10 text-gray-300 hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 border-b border-yellow-600/20 px-4 pt-4 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  id={`mobile-nav-link-${item.id}`}
                  className={`px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-yellow-600/10 border border-yellow-600/30 text-[#D4AF37]'
                      : 'text-gray-300 hover:bg-[#111111] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{item.label}</span>
                  <Trophy className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-gray-600'}`} />
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-nav-register-cta"
                className="w-full text-center py-3 rounded-xl bg-[#D4AF37] text-black font-black uppercase text-xs tracking-[0.2em] shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>REGISTER NOW</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
