
import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8 text-center md:text-left">
            <a href="#home" className="flex items-center justify-center md:justify-start space-x-4 group">
              <div className="w-10 h-10 bg-[#1ED760] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(30,215,96,0.3)]">
                 <svg viewBox="0 0 100 100" className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="8">
                   <path d="M15 50 H30 L35 30 L45 70 L50 50 H60" strokeLinecap="round" strokeLinejoin="round" />
                   <path d="M60 25 V75 C60 75 85 75 85 50 C85 25 60 25 60 25 Z" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
              </div>
              <span className="text-3xl font-brand tracking-tighter font-black uppercase italic">BEATS</span>
            </a>
            <p className="text-gray-500 max-w-sm text-sm font-medium leading-relaxed mx-auto md:mx-0">
              The revolutionary open-source music streaming platform designed for true audiophiles. Experience the rhythm of life without limits.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {['twitter', 'instagram', 'facebook', 'github'].map(social => (
                <a key={social} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#1ED760] transition-all group">
                   <i data-lucide={social} className="w-5 h-5 text-gray-400 group-hover:text-black"></i>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-500 hover:text-[#1ED760] transition-colors text-xs font-black uppercase tracking-widest">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8">Resources</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Use', 'DMCA Notice', 'GitHub Repo'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-[#1ED760] transition-colors text-xs font-black uppercase tracking-widest">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] space-y-6 md:space-y-0 uppercase font-black tracking-widest">
          <p>© 2026 BEATS  · DEVELOPED BY <span className="text-white">INFAS</span> · TEAM <span className="text-[#1ED760]">AWT</span></p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#1ED760] rounded-full animate-pulse"></span>
              <span>All Systems Operational</span>
            </span>
            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
            <span>SECURED BY OPEN-SOURCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
