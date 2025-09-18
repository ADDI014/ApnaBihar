// src/Pages/TempleDetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { temples } from '../data/HomePageData';

// Reusable Icon components
const InfoIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const DeityIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.25278C12 6.25278 10.8333 4 8 4C4.16667 4 2 6.16667 2 9.5C2 14 6.25 18 12 22C17.75 18 22 14 22 9.5C22 6.16667 19.8333 4 17 4C14.1667 4 13 6.25278 13 6.25278" /></svg>;

function TempleDetailPage() {
  const { id } = useParams();
  const temple = temples.find(t => t.id == id);

  if (!temple) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold">Temple Not Found</h1>
        <Link to="/temples" className="text-orange-600 mt-4 inline-block hover:underline">
          &larr; Back to all temples
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/temples" className="text-orange-600 hover:underline mb-4 inline-block">
            &larr; Back to all temples
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Laila', sans-serif" }}>
            {temple.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Main Image */}
          <div className="md:col-span-3">
            <img 
              src={temple.image} 
              alt={temple.name}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="md:col-span-2">
            <div className="space-y-8 sticky top-24">
              
              {/* Significance Section */}
              <div className="flex">
                <InfoIcon />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Significance</h2>
                  <p className="text-gray-700 leading-relaxed">{temple.significance || temple.description}</p>
                </div>
              </div>

              {/* Deity Section */}
              {temple.deity && (
                <div className="flex">
                  <DeityIcon />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Primary Deity</h2>
                    <p className="text-gray-700">{temple.deity}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempleDetailPage;