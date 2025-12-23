import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    if ((window as any).lucide) (window as any).lucide.createIcons();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center pt-32 pb-16 overflow-hidden bg-transparent text-center">
      {/* Localized Atmosphere - Animated Light Sweeps */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Specific Hero Sweep - Moves across the header area */}
        <div className="bg-light-sweep absolute top-0 left-0 w-full h-full opacity-[0.08] blur-[120px]" style={{ animationDuration: '22s', transform: 'skewX(-35deg)' }}></div>
        
        {/* Section-specific aurora accents */}
        <div 
          className="absolute top-1/4 -left-20 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[#1ED760]/5 rounded-full blur-[100px] animate-aurora"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        ></div>
        
        {/* Secondary subtle sweep for multi-layered depth */}
        <div className="bg-light-sweep absolute -bottom-1/2 left-0 w-full h-full opacity-[0.04] blur-[150px]" style={{ animationDuration: '30s', animationDelay: '-10s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="space-y-8 md:space-y-10">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-[#1ED760]/10 border border-[#1ED760]/20 text-[#1ED760] text-[10px] md:text-xs font-black tracking-widest uppercase">
            <span className="w-2 h-2 bg-[#1ED760] rounded-full animate-ping"></span>
            <span>STABLE v2.4 BUILD</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-brand font-black tracking-tighter leading-[0.9] italic">
            STREAM. DOWNLOAD. <br />
            <span className="text-[#1ED760] neon-glow">REPEAT.</span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Revolutionary open-source music streaming. No Ads. No limits. Just high-fidelity audio built for true enthusiasts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href="#download" 
              className="w-full sm:w-auto px-10 py-5 bg-[#1ED760] text-black font-black rounded-2xl hover:scale-105 hover:shadow-[0_0_25px_rgba(30,215,96,0.6)] animate-shimmer-hover transition-all flex items-center justify-center space-x-4 group active:scale-95"
            >
              <i data-lucide="download" className="w-5 h-5 group-hover:animate-bounce"></i>
              <span className="uppercase tracking-widest text-sm">Download APK</span>
            </a>
            <a 
              href="#preview" 
              className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 hover:border-[#1ED760]/40 transition-all text-center uppercase tracking-widest text-sm"
            >
              Explore UI
            </a>
          </div>

          <div className="flex items-center justify-center space-x-10 pt-10">
             <div className="flex flex-col items-center group">
               <span className="text-2xl md:text-3xl font-brand font-black text-white group-hover:text-[#1ED760] transition-colors">50K+</span>
               <span className="text-[9px] uppercase text-gray-500 font-bold tracking-[0.2em]">Active Users</span>
             </div>
             <div className="w-px h-10 bg-white/10"></div>
             <div className="flex flex-col items-center group">
               <span className="text-2xl md:text-3xl font-brand font-black text-[#1ED760] neon-glow">4.9</span>
               <span className="text-[9px] uppercase text-gray-500 font-bold tracking-[0.2em]">Global Rating</span>
             </div>
          </div>
        </div>

        <div 
          className="relative flex justify-center items-center mt-20 md:mt-24 py-16 md:py-24 group"
          style={{ transform: `translateY(${-scrollY * 0.04}px)` }}
        >
          {/* Subtle Back Glow */}
          <div className="absolute inset-0 bg-[#1ED760]/10 blur-[140px] rounded-full animate-float opacity-40 scale-125 z-0"></div>
          
          {/* Device Mockup */}
          <div className="relative w-64 h-[550px] md:w-80 md:h-[650px] bg-[#0d0d0d] rounded-[3.5rem] border-[10px] md:border-[14px] border-[#151515] shadow-[0_0_60px_-15px_rgba(30,215,96,0.3)] overflow-hidden neon-border animate-float z-10">
            <img 
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800&h=1600" 
              alt="BEATS Player Screen" 
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dynamic glass sweep inside screen */}
            <div className="absolute top-0 left-0 w-full h-full bg-light-sweep opacity-10 pointer-events-none" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Floating Badges */}
          <div 
            className="absolute top-[8%] -right-8 md:-right-20 glass-card px-5 py-4 rounded-[1.5rem] md:rounded-[2rem] animate-float flex items-center space-x-4 border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500 z-20" 
            style={{ 
              animationDelay: '1s',
              transform: `translateY(${-scrollY * 0.08}px)`
            }}
          >
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#1ED760]/20 flex items-center justify-center text-[#1ED760]">
                <i data-lucide="music-2" className="w-5 h-5 md:w-6 md:h-6 icon-glow"></i>
             </div>
             <div className="text-left leading-tight">
               <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Quality</p>
               <p className="text-sm md:text-base font-black text-white">Hi-Fi Audio</p>
             </div>
          </div>

          <div 
            className="absolute bottom-[18%] -left-8 md:-left-20 glass-card px-5 py-4 rounded-[1.5rem] md:rounded-[2rem] animate-float flex items-center space-x-4 border border-white/10 shadow-2xl group-hover:scale-110 transition-transform duration-500 z-20" 
            style={{ 
              animationDelay: '2.5s',
              transform: `translateY(${-scrollY * 0.06}px)`
            }}
          >
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#1ED760]/20 flex items-center justify-center text-[#1ED760]">
                <i data-lucide="shield-check" className="w-5 h-5 md:w-6 md:h-6 icon-glow"></i>
             </div>
             <div className="text-left leading-tight">
               <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Privacy</p>
               <p className="text-sm md:text-base font-black text-white">Secure</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;