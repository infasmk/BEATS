import React, { useEffect, useState, useRef } from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if ((window as any).lucide) (window as any).lucide.createIcons();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 relative overflow-hidden bg-black">
      {/* Background Atmosphere - Animated Light Sweeps */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="bg-light-sweep absolute top-0 left-0 w-full h-full opacity-[0.06] blur-[160px]" style={{ animationDuration: '38s' }}></div>
        <div className="bg-light-sweep absolute bottom-0 left-0 w-full h-1/2 opacity-[0.04] blur-[140px]" style={{ animationDuration: '30s', animationDelay: '5s', transform: 'rotate(5deg)' }}></div>
      </div>

      {/* Parallax Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 z-1">
         <div 
           className="absolute top-20 right-10 w-64 h-64 border border-[#1ED760]/20 rounded-full blur-sm"
           style={{ transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0001})` }}
         ></div>
         <div 
           className="absolute bottom-20 left-10 w-96 h-96 border border-[#1ED760]/10 rounded-full blur-md"
           style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
         ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <span className="text-[#1ED760] font-black tracking-[0.3em] uppercase text-xs">Premium Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-brand font-black uppercase italic tracking-tighter">
            Engineered for <br /><span className="text-[#1ED760] neon-glow">Perfection</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.id} 
              className="group glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-[#1ED760]/40 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center text-[#1ED760] mb-8 group-hover:bg-[#1ED760]/10 transition-colors">
                <i data-lucide={feature.icon} className="w-8 h-8 icon-glow"></i>
              </div>
              <h3 className="text-xl font-black mb-4 group-hover:text-[#1ED760] transition-colors uppercase italic">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-white/[0.02] to-transparent border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 group">
           <div className="space-y-3">
             <div className="flex items-center space-x-3">
                <div className="px-3 py-1 bg-[#1ED760]/10 border border-[#1ED760]/30 rounded-full text-[10px] text-[#1ED760] font-black uppercase">Alpha Access</div>
                <h3 className="text-2xl font-black italic">AI Smart Playlist Sync</h3>
             </div>
             <p className="text-gray-400 max-w-xl">Coming in v2.5: Automatically sync your liked songs between Spotify and YouTube Music without manual intervention.</p>
           </div>
           <button className="px-8 py-4 bg-white/5 rounded-2xl border border-white/10 font-black text-sm uppercase tracking-widest transition-all hover:bg-[#1ED760] hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(30,215,96,0.4)] animate-shimmer-hover active:scale-95">
             Join Beta Waitlist
           </button>
        </div>
      </div>
    </section>
  );
};

export default Features;