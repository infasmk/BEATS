import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Hero from './components/Hero';
import AppPreview from './components/AppPreview';
import FeaturesComp from './components/Features';
import DownloadComp from './components/Download';
import AboutComp from './components/About';
import FooterComp from './components/Footer';

// --- Global Background Component ---
const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#050505]">
      {/* Dynamic Aurora Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-[#1ED760]/[0.03] rounded-full blur-[120px] animate-aurora"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[90vw] h-[90vw] bg-[#1ED760]/[0.05] rounded-full blur-[150px] animate-aurora" style={{ animationDelay: '-15s' }}></div>
      
      {/* Subtle Grid overlay for texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#1ED760 1px, transparent 1px), linear-gradient(90deg, #1ED760 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      {/* Global Sweeping Beams */}
      <div className="bg-light-sweep absolute top-0 left-0 w-full h-full opacity-[0.05] blur-[180px]" style={{ animationDuration: '45s' }}></div>
      <div className="bg-light-sweep absolute bottom-0 right-0 w-full h-full opacity-[0.03] blur-[160px]" style={{ animationDuration: '60s', animationDelay: '-10s', transform: 'rotate(180deg)' }}></div>
    </div>
  );
};

// --- Main App ---
const App = () => {
  return (
    <div className="min-h-screen text-white selection:bg-[#1ED760] selection:text-black">
      <GlobalBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <AppPreview />
        <FeaturesComp />
        <DownloadComp />
        <AboutComp />
      </main>
      <FooterComp />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}