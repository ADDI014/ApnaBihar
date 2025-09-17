// src/pages/FestivalDetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { festivals } from '../data/HomePageData';

// Reusable Icon components
const InfoIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const CalendarIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;

function FestivalDetailPage() {
  const { id } = useParams();
  const festival = festivals.find(f => f.id == id);

  if (!festival) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold">Festival Not Found</h1>
        <Link to="/festivals" className="text-orange-600 mt-4 inline-block hover:underline">
          &larr; Back to all festivals
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/festivals" className="text-orange-600 hover:underline mb-4 inline-block">
            &larr; Back to all festivals
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Laila', sans-serif" }}>
            {festival.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Main Image */}
          <div className="md:col-span-3">
            <img 
              src={festival.image} 
              alt={festival.name}
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
                  <p className="text-gray-700 leading-relaxed">{festival.significance || festival.description}</p>
                </div>
              </div>

              {/* Time of Year Section */}
              {festival.time_of_year && (
                <div className="flex">
                  <CalendarIcon />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Time of Year</h2>
                    <p className="text-gray-700">{festival.time_of_year}</p>
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

export default FestivalDetailPage;