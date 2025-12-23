import React, { useEffect } from 'react';

const Download: React.FC = () => {
  useEffect(() => {
    if ((window as any).lucide) (window as any).lucide.createIcons();
  }, []);

  return (
    <section id="download" className="py-24 md:py-40 bg-black relative overflow-hidden">
      {/* Background Animated Light Sweeps */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="bg-light-sweep absolute top-0 left-0 w-full h-full opacity-[0.08] blur-[150px]" style={{ animationDuration: '35s' }}></div>
        <div className="bg-light-sweep absolute top-1/2 left-0 w-full h-1/2 opacity-[0.05] blur-[180px]" style={{ animationDuration: '28s', animationDelay: '12s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative group p-[2px] rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-white/5 hover:bg-gradient-to-tr from-[#1ED760] via-transparent to-[#1ED760]/30 transition-all duration-[1500ms] shadow-2xl">
          <div className="bg-[#050505] rounded-[2.9rem] md:rounded-[4.9rem] p-12 md:p-32 text-center relative z-10 overflow-hidden">
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #1ED760 1px, transparent 0)', backgroundSize: '36px 36px'}}></div>

            <div className="relative z-10 space-y-12 md:space-y-16">
              <div className="space-y-6">
                <span className="text-[#1ED760] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">Final Official Build</span>
                <h2 className="text-5xl sm:text-7xl md:text-9xl font-brand font-black uppercase italic tracking-tighter leading-none">GET <span className="text-[#1ED760] neon-glow">BEATS</span></h2>
                <p className="text-gray-500 text-sm md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed italic">
                  Join 50,000+ audiophiles who refuse to settle for less. Minimalist. High-Fidelity. Free.
                </p>
              </div>

              <div className="flex justify-center group/btn">
                <a 
                  href="#" 
                  className="relative flex items-center space-x-6 px-12 py-7 md:px-20 md:py-10 rounded-[2.5rem] overflow-hidden animate-shimmer animate-pulse-glow shadow-[0_20px_60px_rgba(30,215,96,0.3)] hover:shadow-[#1ED760]/50 transition-all active:scale-95 active:duration-150"
                >
                  <div className="relative z-10 flex items-center space-x-6 md:space-x-10 text-black">
                     <i data-lucide="download" className="w-10 h-10 md:w-14 md:h-14 stroke-[3px] group-hover/btn:animate-bounce"></i>
                     <div className="text-left leading-none">
                       <p className="text-[11px] md:text-sm uppercase font-black opacity-70 tracking-widest mb-1">Direct Installation</p>
                       <p className="text-2xl md:text-5xl font-brand font-black italic uppercase tracking-tight">DOWNLOAD APK</p>
                     </div>
                  </div>
                  {/* Glass reflective overlay */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-14 border-t border-white/5 max-w-4xl mx-auto">
                <div className="text-center group">
                  <p className="text-[#1ED760] text-2xl md:text-4xl font-brand font-black group-hover:scale-110 transition-transform">12.8 MB</p>
                  <p className="text-gray-600 text-[9px] md:text-[11px] uppercase font-black tracking-[0.2em] mt-2">File Size</p>
                </div>
                <div className="text-center group">
                  <p className="text-white text-2xl md:text-4xl font-brand font-black group-hover:scale-110 transition-transform">v2.4.1</p>
                  <p className="text-gray-600 text-[9px] md:text-[11px] uppercase font-black tracking-[0.2em] mt-2">Version</p>
                </div>
                <div className="text-center group">
                  <p className="text-white text-2xl md:text-4xl font-brand font-black group-hover:scale-110 transition-transform">50K+</p>
                  <p className="text-gray-600 text-[9px] md:text-[11px] uppercase font-black tracking-[0.2em] mt-2">Installs</p>
                </div>
                <div className="text-center group">
                  <p className="text-[#1ED760] text-2xl md:text-4xl font-brand font-black group-hover:scale-110 transition-transform">98%</p>
                  <p className="text-gray-600 text-[9px] md:text-[11px] uppercase font-black tracking-[0.2em] mt-2">Trust Score</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gray-500 pt-4">
                <div className="flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 bg-[#1ED760] rounded-full shadow-[0_0_8px_#1ED760]"></div>
                   <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Android 8.0+ Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 bg-[#1ED760] rounded-full shadow-[0_0_8px_#1ED760]"></div>
                   <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Ad-Free Native</span>
                </div>
                <div className="flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 bg-[#1ED760] rounded-full shadow-[0_0_8px_#1ED760]"></div>
                   <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Verified Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;