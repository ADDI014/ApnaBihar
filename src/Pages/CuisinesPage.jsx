import React, { useState } from 'react';
import Card from '../Components/Card';
import { cuisines } from '../data/HomePageData';
import { Link } from 'react-router-dom';

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
);

function CuisinesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCuisines = cuisines.filter(cuisine =>
    cuisine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      {/* <header 
        className="relative h-96 bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/Background/cuisine-panorama.jpg')" }} // Add a food-related image here
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 
            className="text-4xl md:text-6xl font-extrabold"
            style={{ fontFamily: "'Laila', sans-serif" }}
          >
            Flavors of Bihar
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mt-4">
            Discover the rustic and authentic tastes of Bihari cuisine, a delightful blend of simple ingredients and rich flavors.
          </p>
        </div>
      </header> */}
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Introductory Text Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Laila', sans-serif" }}
          >
            A Taste of Tradition
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bihari cuisine is known for its earthy flavors and reliance on seasonal ingredients. From the world-famous Litti Chokha to delectable sweets like Thekua and Khaja, every dish tells a story of the land and its rich cultural heritage. Explore the unique culinary delights that make Bihar a food lover's paradise.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-lg mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search for a dish..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Conditional Grid of Cards */}
        {filteredCuisines.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCuisines.map((item) => (
              <Link to={`/cuisines/${item.id}`} key={item.id} className="block">
                <Card 
                  name={item.name} 
                  description={item.description} 
                  image={item.image} 
                  // Location prop is not needed for cuisines
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No Dishes Found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CuisinesPage;