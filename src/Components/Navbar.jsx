import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tourist Places', path: '/tourist-places' },
    { name: 'Festivals', path: '#' },
    { name: 'Cuisines', path: '/cuisines' },
    { name: 'History', path: '#' },
  ];

  return (
    <nav className="bg-stone-50 shadow-md sticky top-0 z-50 border-b-2 border-orange-500/50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="text-3xl font-bold text-orange-600 hover:text-orange-700 transition-colors" 
            style={{ fontFamily: "'Laila', sans-serif" }}
          >
            ApnaBihar
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-700 font-medium hover:text-orange-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-stone-50 shadow-lg" style={{ top: '4rem' }}>
          <div className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-lg text-gray-800 font-medium hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
