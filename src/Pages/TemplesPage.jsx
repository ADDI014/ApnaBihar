import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import ShimmerCard from '../Components/ShimmerCard'; // 1. Import the ShimmerCard
import { temples as allTemplesData } from '../data/HomePageData'; // 2. Alias the imported data
import { Link } from 'react-router-dom';

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
);

function TemplesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Add state for loading and the page's data
  const [isLoading, setIsLoading] = useState(true);
  const [temples, setTemples] = useState([]);

  // 4. Use useEffect to simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      setTemples(allTemplesData);
      setIsLoading(false);
    }, 1500); // 1.5 second delay
  }, []);
  
  const filteredTemples = temples.filter(temple =>
    temple.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-stone-50">
      {/* Note: The Hero Section was removed in your provided code, so it is not included here. */}
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Laila', sans-serif" }}
          >
            Sanctuaries of Faith
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The temples of Bihar are not just architectural marvels but are living centers of faith that have drawn pilgrims for centuries. From the sacred grounds of Gaya to the bustling devotion in Patna, each temple has a unique story and a profound spiritual energy.
          </p>
        </div>

        <div className="mb-12 max-w-lg mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search for a temple..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* 5. Conditional Rendering: Shimmer UI or your existing content */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        ) : (
          filteredTemples.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTemples.map((item) => (
                <Link to={`/temples/${item.id}`} key={item.id} className="block">
                  <Card 
                    name={item.name} 
                    description={item.description} 
                    image={item.image} 
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-700">No Temples Found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default TemplesPage;