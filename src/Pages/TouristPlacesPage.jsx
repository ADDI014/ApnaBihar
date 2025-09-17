import React, { useState } from 'react'; // 1. Import useState
import Card from '../Components/Card';
// CORRECT
import { touristSpots } from '../data/HomePageData';
import { Link } from 'react-router-dom';

// Search Icon SVG
const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
  </svg>
);

function TouristPlacesPage() {
  // 2. Add state to hold and update the user's search input
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Filter the tourist spots based on the search term
  const filteredSpots = touristSpots.filter(spot =>
    spot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-stone-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Laila', sans-serif" }}
          >
            Explore the Wonders of Bihar
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            From the sacred grounds where Buddhism was born to ancient empires that shaped a continent, Bihar is a land steeped in history and spirituality. Discover breathtaking natural beauty, magnificent architectural marvels, and sites of profound peace. Your journey into the heart of India's heritage begins here.
          </p>
        </div>

        {/* 4. Add the search input field */}
        <div className="mb-12 max-w-lg mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search for a destination..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* 5. Conditionally render the grid or a "No results" message */}
        {filteredSpots.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSpots.map((item) => (
              <Link to={`/tourist-places/${item.id}`} key={item.id} className="block">
                <Card 
                  name={item.name} 
                  description={item.description} 
                  image={item.image} 
                  location={item.location}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No Destinations Found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or explore our other categories.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TouristPlacesPage;