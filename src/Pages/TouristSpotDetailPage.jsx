import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { touristSpots } from '../data/HomePageData';

// Reusable Icon components for better structure
const InfoIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const CalendarIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;
const MapPinIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;

function TouristSpotDetailPage() {
  const { id } = useParams();
  const spot = touristSpots.find(s => s.id == id);

  if (!spot) {
    // ... Not Found JSX ...
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/tourist-places" className="text-orange-600 hover:underline mb-4 inline-block">&larr; Back to all destinations</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Laila', sans-serif" }}>{spot.name}</h1>
          {spot.location && <p className="text-lg text-gray-500 mt-2">{spot.location}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div className="md:col-span-3 space-y-4">
            {spot.images?.map((img, index) => (
              <img key={index} src={img} alt={`${spot.name} view ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg object-cover" />
            ))}
          </div>

          {/* Details Section (now with better structure) */}
          <div className="md:col-span-2">
            <div className="space-y-8 sticky top-24">
              
              {/* About Section */}
              <div className="flex">
                <InfoIcon />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">About</h2>
                  <p className="text-gray-700 leading-relaxed">{spot.long_description || spot.description}</p>
                </div>
              </div>

              {/* Best Time to Visit Section */}
              {spot.best_time_to_visit && (
                <div className="flex">
                  <CalendarIcon />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Best Time to Visit</h2>
                    <p className="text-gray-700">{spot.best_time_to_visit}</p>
                  </div>
                </div>
              )}

              {/* How to Reach Section */}
              {spot.how_to_reach && (
                <div className="flex">
                  <MapPinIcon />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">How to Reach</h2>
                    <p className="text-gray-700 leading-relaxed">{spot.how_to_reach}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Google Map Section will be added here next */}
        
      </div>
    </div>
  );
}

export default TouristSpotDetailPage;