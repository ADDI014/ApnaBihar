import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// An icon for the dropdown trigger
const GlobeIcon = () => (
  <svg className="w-6 h-6 text-gray-600 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.586-.586a2 2 0 012.828 0l2 2a2 2 0 010 2.828l-2 2a2 2 0 01-2.828 0l-.586-.586M12 22a10 10 0 110-20 10 10 0 010 20z"></path>
  </svg>
);


function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); // State for the language dropdown

  const navLinks = [
    { key: 'nav_home', path: '/' },
    { key: 'nav_tourist_places', path: '/tourist-places' },
    { key: 'nav_festivals', path: '/festivals' },
    { key: 'nav_cuisines', path: '/cuisines' },
    { key: 'nav_arts', path: '/arts' },
    // { key: 'nav_temples', path: '/temples' },
    // { key: 'nav_clothes', path: '/clothes' },
    { key: 'nav_history', path: '/history' },
  ];
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'bho', name: 'भोजपुरी' },
    { code: 'mai', name: 'मैथिली' },
    { code: 'mag', name: 'मगही' },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false); // Close dropdown on selection
  };

  return (
    <nav className="bg-stone-50 shadow-md sticky top-0 z-50 border-b-2 border-orange-500/50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-3xl font-bold text-orange-600 hover:text-orange-700 transition-colors" style={{ fontFamily: "'Laila', sans-serif" }}>
            ApnaBihar
          </Link>

          {/* Desktop Menu & Language Dropdown */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.key} to={link.path} className="text-gray-700 font-medium hover:text-orange-600 transition-colors duration-300">
                {t(link.key)}
              </Link>
            ))}
            {/* Language Dropdown */}
            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="group flex items-center">
                <GlobeIcon />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 ${i18n.language.startsWith(lang.code) ? 'font-bold text-orange-600' : ''}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" aria-label="Toggle menu" className="flex flex-col justify-center items-center w-8 h-8">
              <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-stone-50 shadow-lg" style={{ top: '4rem' }}>
          <div className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <Link key={link.key} to={link.path} className="text-lg text-gray-800 font-medium hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
                {t(link.key)}
              </Link>
            ))}
            {/* Language options integrated into mobile menu */}
            <div className="pt-4 border-t border-stone-200 w-full mt-4 flex flex-col items-center space-y-2">
               <h3 className="text-gray-500 text-sm font-semibold">Languages</h3>
               {languages.map((lang) => (
                 <button
                   key={lang.code}
                   onClick={() => changeLanguage(lang.code)}
                   className={`text-lg font-medium hover:text-orange-600 ${i18n.language.startsWith(lang.code) ? 'text-orange-600' : 'text-gray-800'}`}
                 >
                   {lang.name}
                 </button>
               ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;