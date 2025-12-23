import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Basic active link detection based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveLink(`#${sectionId}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div 
        className={`
          mt-0 md:mt-4 px-6 py-4 flex justify-between items-center transition-all duration-700 pointer-events-auto
          ${isScrolled 
            ? 'w-[95%] md:w-fit md:min-w-[800px] bg-black/60 backdrop-blur-2xl rounded-2xl md:rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(30,215,96,0.05)]' 
            : 'w-full bg-transparent border-b border-transparent'
          }
        `}
      >
        {/* Logo Section */}
        <a href="#home" className="flex items-center space-x-3 group shrink-0">
          <div className="relative">
            <div className={`
              w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center border transition-all duration-500
              ${isScrolled ? 'bg-[#1ED760]/20 border-[#1ED760]/40' : 'bg-[#1ED760]/10 border-[#1ED760]/30'}
              group-hover:scale-110 group-hover:rotate-3
            `}>
               <svg viewBox="0 0 100 100" className="w-6 h-6 text-[#1ED760] icon-glow" fill="none" stroke="currentColor" strokeWidth="6">
                 <path d="M15 50 H30 L35 30 L45 70 L50 50 H60" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M60 25 V75 C60 75 85 75 85 50 C85 25 60 25 60 25 Z" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
            {/* Pulsing notification dot when active */}
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#1ED760] rounded-full border-2 border-black animate-pulse"></span>
          </div>
          <span className="text-xl md:text-2xl font-brand tracking-tighter neon-glow font-black italic uppercase">BEATS</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300
                ${activeLink === link.href ? 'text-[#1ED760]' : 'text-gray-400 hover:text-white'}
              `}
            >
              {link.label}
              {/* Active/Hover Underline Indicator */}
              <span className={`
                absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#1ED760] transition-all duration-300 rounded-full shadow-[0_0_8px_#1ED760]
                ${activeLink === link.href ? 'w-4 opacity-100' : 'w-0 opacity-0'}
              `}></span>
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a 
            href="#download" 
            className={`
              px-7 py-2.5 rounded-full font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-500 transform active:scale-95
              ${isScrolled 
                ? 'bg-transparent border border-[#1ED760]/40 text-[#1ED760] hover:bg-[#1ED760] hover:text-black hover:shadow-[0_0_20px_rgba(30,215,96,0.4)]' 
                : 'bg-[#1ED760] text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(30,215,96,0.6)]'
              }
            `}
          >
            Get App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative w-6 h-6">
             <span className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
             <span className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 top-3 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
             <span className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        md:hidden fixed inset-0 bg-black/98 backdrop-blur-3xl transition-all duration-500 pointer-events-auto
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      `}>
        <div className="p-8 flex justify-between items-center border-b border-white/5">
           <span className="text-2xl font-brand font-black italic uppercase text-[#1ED760]">BEATS</span>
           <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
              <i data-lucide="x" className="w-8 h-8"></i>
           </button>
        </div>
        <nav className="flex flex-col p-12 space-y-8 items-start">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-baseline space-x-4 transition-transform hover:translate-x-4 duration-300"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="text-[#1ED760] font-brand text-sm font-black opacity-30 group-hover:opacity-100">0{idx + 1}</span>
              <span className="text-5xl font-brand font-black text-white hover:text-[#1ED760] uppercase tracking-tighter italic">
                {link.label}
              </span>
            </a>
          ))}
          <div className="w-full pt-8">
            <a 
              href="#download" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-[#1ED760] text-black py-6 rounded-2xl text-center font-black text-xl uppercase tracking-widest shadow-[0_10px_40px_rgba(30,215,96,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Install BEATS
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;