import React from 'react';

// A more streamlined SVG for the loader icon
const ThematicLoaderIcon = () => (
  <div className="relative w-20 h-20">
    {/* Outer rotating part */}
    <svg 
      className="absolute inset-0 w-full h-full animate-spin-slow text-orange-500" 
      fill="none" 
      viewBox="0 0 48 48"
    >
      <circle 
        cx="24" 
        cy="24" 
        r="20" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeDasharray="80" 
        strokeDashoffset="60"
      />
    </svg>
    {/* Inner pulsing part */}
    <svg 
      className="absolute inset-0 w-full h-full animate-pulse-subtle text-orange-400" 
      fill="currentColor" 
      viewBox="0 0 48 48"
    >
      <path d="M24,36c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S30.627,36,24,36z M24,14c-5.523,0-10,4.477-10,10 s4.477,10,10,10s10-4.477,10-10S29.523,14,24,14z" />
    </svg>
  </div>
);

function Loader() {
  return (
    <div className="fixed inset-0 bg-stone-50/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <ThematicLoaderIcon />
      <p className="mt-6 text-lg text-gray-700 font-semibold" style={{ fontFamily: "'Laila', sans-serif" }}>
        Unveiling Bihar...
      </p>
    </div>
  );
}

export default Loader;