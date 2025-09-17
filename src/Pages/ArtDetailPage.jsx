// src/Pages/ArtDetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { arts } from '../data/HomePageData';

// Reusable Icon components
const InfoIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const OriginIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;

function ArtDetailPage() {
  const { id } = useParams();
  const art = arts.find(a => a.id == id);

  if (!art) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold">Art Form Not Found</h1>
        <Link to="/arts" className="text-orange-600 mt-4 inline-block hover:underline">
          &larr; Back to all art & craft
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/arts" className="text-orange-600 hover:underline mb-4 inline-block">
            &larr; Back to all art & craft
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Laila', sans-serif" }}>
            {art.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Main Image */}
          <div className="md:col-span-3">
            <img 
              src={art.image} 
              alt={art.name}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="md:col-span-2">
            <div className="space-y-8 sticky top-24">
              
              {/* Details Section */}
              <div className="flex">
                <InfoIcon />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">About the Art</h2>
                  <p className="text-gray-700 leading-relaxed">{art.details || art.description}</p>
                </div>
              </div>

              {/* Origin Section */}
              {art.origin && (
                <div className="flex">
                  <OriginIcon />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Region of Origin</h2>
                    <p className="text-gray-700">{art.origin}</p>
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

export default ArtDetailPage;