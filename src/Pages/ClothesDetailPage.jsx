// src/Pages/ClothesDetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { clothes } from '../data/HomePageData';

// Reusable Icon components
const InfoIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const MaterialsIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1V2.5M3 14l2-1m-2 1l2 1m-2-1v-2.5M10 4l2 1m-2-1l2-1m-2 1V2.5M3 10l2 1m-2-1l2-1m-2 1v-2.5M10 14l2-1m-2 1l2 1m-2-1v-2.5M17 14l2-1m-2 1l2 1m-2-1v-2.5"></path></svg>;

function ClothesDetailPage() {
  const { id } = useParams();
  const item = clothes.find(c => c.id == id);

  if (!item) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold">Attire Not Found</h1>
        <Link to="/clothes" className="text-orange-600 mt-4 inline-block hover:underline">
          &larr; Back to all traditional attire
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/clothes" className="text-orange-600 hover:underline mb-4 inline-block">
            &larr; Back to all traditional attire
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Laila', sans-serif" }}>
            {item.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Main Image */}
          <div className="md:col-span-3">
            <img 
              src={item.image} 
              alt={item.name}
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">About the Attire</h2>
                  <p className="text-gray-700 leading-relaxed">{item.details || item.description}</p>
                </div>
              </div>

              {/* Materials Section */}
              {item.materials && (
                <div className="flex">
                  <MaterialsIcon />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Key Materials</h2>
                    <p className="text-gray-700">{item.materials}</p>
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

export default ClothesDetailPage;