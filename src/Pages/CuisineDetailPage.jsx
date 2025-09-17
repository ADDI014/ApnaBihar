// src/pages/CuisineDetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cuisines } from '../data/homePageData';

// Reusable Icon components
const InfoIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const IngredientsIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>;

function CuisineDetailPage() {
  const { id } = useParams();
  const cuisine = cuisines.find(c => c.id == id);

  if (!cuisine) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold">Dish Not Found</h1>
        <Link to="/cuisines" className="text-orange-600 mt-4 inline-block hover:underline">
          &larr; Back to all cuisines
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/cuisines" className="text-orange-600 hover:underline mb-4 inline-block">
            &larr; Back to all cuisines
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Laila', sans-serif" }}>
            {cuisine.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Main Image */}
          <div className="md:col-span-3">
            <img 
              src={cuisine.image} 
              alt={cuisine.name}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="md:col-span-2">
            <div className="space-y-8 sticky top-24">
              
              {/* About Section */}
              <div className="flex">
                <InfoIcon />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">About the Dish</h2>
                  <p className="text-gray-700 leading-relaxed">{cuisine.long_description || cuisine.description}</p>
                </div>
              </div>

              {/* Ingredients Section */}
              {cuisine.ingredients && (
                <div className="flex">
                  <IngredientsIcon />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">Key Ingredients</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {cuisine.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
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

export default CuisineDetailPage;