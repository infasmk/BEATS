import React, { useEffect, useState, useRef } from 'react';
import { SCREENSHOTS } from '../constants';

const AppPreview: React.FC = () => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollX(containerRef.current.scrollLeft);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    if ((window as any).lucide) (window as any).lucide.createIcons();
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Calculate scaling and glow based on distance from viewport center
  const getCardStyle = (index: number) => {
    if (!containerRef.current) return { transform: 'scale(1)', opacity: 1, glowIntensity: 0 };
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const cardWidth = containerWidth < 768 ? 280 : 420; 
    const gap = containerWidth < 768 ? 24 : 48; 
    
    const cardCenter = (cardWidth / 2) + (index * (cardWidth + gap)) + (containerWidth < 768 ? 16 : 0);
    const viewportCenter = scrollX + (containerWidth / 2);
    
    const distance = Math.abs(viewportCenter - cardCenter);
    // Focus range: how close the card must be to get full "active" state
    const focusRange = containerWidth / 2.5;
    const progress = Math.min(1, distance / focusRange);
    
    // Invert progress for "focus" (1 at center, 0 at edge)
    const focusProgress = 1 - progress;
    
    const scale = 0.92 + (focusProgress * 0.13); // Scales from ~0.92 to 1.05
    const opacity = 0.6 + (focusProgress * 0.4); // Fades from 0.6 to 1.0
    const rotateY = (viewportCenter - cardCenter) * 0.015; // Subtle 3D rotation
    
    // Dynamic glow intensity
    const glowIntensity = Math.pow(focusProgress, 3); // Exponential curve for punchier focus
    
    return {
      style: {
        transform: `scale(${scale}) rotateY(${rotateY}deg)`,
        opacity: opacity,
        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
        perspective: '1000px',
        boxShadow: `0 0 ${glowIntensity * 50}px rgba(30, 215, 96, ${glowIntensity * 0.25})`,
      },
      glowIntensity
    };
  };

  return (
    <section id="preview" className="py-24 md:py-40 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 md:mb-32 gap-12">
          <div className="space-y-6 text-center md:text-left">
            <span className="text-[#1ED760] font-black tracking-[0.5em] uppercase text-[10px] md:text-xs">Product Interface</span>
            <h2 className="text-5xl md:text-8xl font-brand font-black uppercase italic tracking-tighter leading-none">
              Visual <br />
              <span className="text-[#1ED760] neon-glow">Experience</span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center bg-white/[0.03] px-8 py-6 rounded-[2.5rem] border border-white/5 space-y-4 sm:space-y-0 sm:space-x-8 backdrop-blur-md">
             <div className="flex -space-x-5">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-14 h-14 rounded-full border-4 border-[#050505] bg-[#111] flex items-center justify-center overflow-hidden transition-all hover:-translate-y-2 hover:z-20 cursor-default shadow-xl">
                    <div className="w-full h-full bg-gradient-to-br from-[#1ED760] to-[#0d5c2a] flex items-center justify-center" style={{ opacity: 0.3 + (i * 0.15) }}>
                       <span className="text-[10px] text-black font-black uppercase tracking-tighter">AWT</span>
                    </div>
                 </div>
               ))}
             </div>
             <div className="text-center sm:text-left">
               <p className="text-white font-black text-sm uppercase tracking-widest italic">Designed for Immersion</p>
               <p className="text-gray-500 text-[11px] uppercase font-bold tracking-[0.3em] mt-1">Mobile First Optimization</p>
             </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="flex overflow-x-auto py-10 space-x-6 md:space-x-12 scrollbar-hide snap-x snap-mandatory px-4 -mx-4 scroll-smooth"
          style={{ perspective: '1200px' }}
        >
          {SCREENSHOTS.map((screen, index) => {
            const { style, glowIntensity } = getCardStyle(index);
            return (
              <div 
                key={screen.id} 
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[420px] snap-center py-4"
                style={style}
              >
                <div className="relative glass-card rounded-[3.5rem] md:rounded-[5rem] p-3 md:p-6 border-white/5 transition-colors duration-700 overflow-hidden group shadow-2xl">
                  {/* Dynamic border based on focus */}
                  <div 
                    className="absolute inset-0 rounded-[inherit] border border-[#1ED760]/30 transition-opacity duration-300"
                    style={{ opacity: glowIntensity }}
                  ></div>

                  <div className="relative rounded-[2.4rem] md:rounded-[3.8rem] overflow-hidden aspect-[9/19] bg-[#0a0a0a]">
                    <img 
                      src={screen.imageUrl} 
                      alt={screen.title}
                      className="w-full h-full object-cover transition-all duration-[3000ms]"
                      style={{ 
                        filter: `grayscale(${Math.max(0, (1 - glowIntensity) * 60)}%)`,
                        transform: `scale(${1 + glowIntensity * 0.05})`
                      }}
                      loading="lazy"
                    />
                    
                    {/* Dynamic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 flex items-end p-10 md:p-16">
                      <div 
                        className="space-y-2 md:space-y-4 transition-all duration-700 ease-out"
                        style={{ transform: `translateY(${Math.max(0, (1 - glowIntensity) * 20)}px)` }}
                      >
                         <div className="flex items-center space-x-3">
                           <div 
                             className="h-px bg-[#1ED760] transition-all duration-500"
                             style={{ width: `${glowIntensity * 32}px`, opacity: glowIntensity }}
                           ></div>
                           <p className="text-[#1ED760] font-black text-[11px] uppercase tracking-[0.4em] neon-glow">{screen.id}</p>
                         </div>
                         <h4 className="text-white font-brand font-black text-3xl md:text-5xl italic uppercase tracking-tighter leading-none">{screen.title}</h4>
                      </div>
                    </div>

                    {/* Glass Shine Effect - Stronger when focused */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.05] to-white/0 transition-opacity duration-1000 pointer-events-none"
                      style={{ opacity: glowIntensity * 0.5 }}
                    ></div>
                  </div>
                  
                  {/* Focus Glow Background */}
                  <div 
                    className="absolute -inset-10 bg-[#1ED760]/5 blur-[80px] pointer-events-none rounded-full transition-opacity duration-500"
                    style={{ opacity: glowIntensity }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Carousel Navigation Footer */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12">
          <div className="flex items-center space-x-4">
             {SCREENSHOTS.map((_, i) => {
               const containerWidth = containerRef.current ? containerRef.current.offsetWidth : 1;
               const cardWidth = (containerWidth < 768 ? 280 : 420) + (containerWidth < 768 ? 24 : 48);
               const isActive = Math.round(scrollX / cardWidth) === i;
               return (
                 <div 
                   key={i} 
                   className={`h-1.5 rounded-full transition-all duration-500 ${isActive ? 'w-20 bg-[#1ED760] shadow-[0_0_12px_#1ED760]' : 'w-2.5 bg-white/10'}`}
                 ></div>
               );
             })}
          </div>
          <div className="flex items-center space-x-4 text-gray-500/80">
            <div className="p-2 rounded-full border border-white/5 bg-white/5">
              <i data-lucide="mouse-pointer-2" className="w-4 h-4 animate-bounce"></i>
            </div>
            <p className="text-[11px] uppercase font-black tracking-[0.5em] italic">Precision Snap Navigation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;