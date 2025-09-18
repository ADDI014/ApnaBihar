// src/Components/ShimmerCard.jsx

import React from 'react';

function ShimmerCard() {
  return (
    <div className="border border-stone-200 shadow-md rounded-lg overflow-hidden">
      {/* The animate-pulse class from Tailwind CSS creates the shimmer effect */}
      <div className="w-full h-48 bg-gray-300 animate-pulse"></div>
      <div className="p-4">
        <div className="w-3/4 h-6 mb-2 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-1/2 h-4 mb-4 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-full h-4 mb-1 bg-gray-300 rounded animate-pulse"></div>
        <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

export default ShimmerCard;