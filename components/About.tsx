
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-20 h-20 bg-[#1ED760]/20 rounded-3xl mx-auto flex items-center justify-center mb-10 border border-[#1ED760]/30">
          <span className="text-[#1ED760] font-brand text-4xl font-black italic">B</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-brand font-bold mb-8 uppercase tracking-tighter italic">About the Project</h2>
        
        <div className="glass-card p-10 rounded-[2.5rem] text-left space-y-6 text-gray-400 leading-relaxed border-white/5">
          <p>
            BEATS is a modern music streaming app built for simplicity, speed, and style. Developed by <span className="text-white font-bold">Aadith</span> from <span className="text-[#1ED760] font-bold">Team AWT</span>, BEATS brings together the best listening experience inspired by top music platforms like Spotify, JioSaavn, and YouTube Music.
          </p>
          <p>
            Our mission was to create a player that feels premium and immersive without the unnecessary clutter of traditional streaming apps. With a focus on dark mode optimization and high-fidelity audio, BEATS is the ultimate companion for your daily soundscape.
          </p>
          <div className="pt-6 border-t border-white/5 flex items-center space-x-4">
             <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-xl font-bold text-white">A</div>
             <div>
               <p className="text-white font-bold">Aadith</p>
               <p className="text-xs uppercase tracking-widest font-bold text-[#1ED760]">Lead App Developer (BEATS)• Team AWT</p>
             </div>
          </div> <div className="pt-6 border-t border-white/5 flex items-center space-x-4">
             <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-xl font-bold text-white">I</div>
             <div>
               <p className="text-white font-bold">Infas mk</p>
               <p className="text-xs uppercase tracking-widest font-bold text-[#1ED760]">Web Developer • Team AWT</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
