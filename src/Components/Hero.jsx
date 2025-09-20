import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from "react-scroll"; // 1. Import ScrollLink

function Hero() {
  const { t } = useTranslation();

  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <video 
        src="/images/bihar_english.mp4"
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Centered Text Content */}
      <div className="relative z-20 text-center px-4">
        <h1 
          className="text-4xl md:text-6xl font-extrabold mb-4" 
          style={{ fontFamily: "'Laila', sans-serif" }}
        >
          {t('hero_title')}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {t('hero_subtitle')}
        </p>
        
        {/* 2. Add the Start Exploring button here */}
        <ScrollLink
          to="explore" // This scrolls to the element with id="explore" on your HomePage
          smooth={true}
          duration={800}
          offset={-70} // Adjusts for your fixed navbar height
          className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 transform hover:scale-105"
        >
          {t('start_exploring')}
        </ScrollLink>
      </div>
    </header>
  );
}

export default Hero;