// src/Pages/HistoryDetailPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { history } from '../data/HomePageData';

// Reusable Icon components
const InfoIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const CalendarIcon = () => <svg className="w-6 h-6 mr-3 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;

function HistoryDetailPage() {
  const { id } = useParams();
  const topic = history.find(h => h.id == id);

  if (!topic) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold">Topic Not Found</h1>
        <Link to="/history" className="text-orange-600 mt-4 inline-block hover:underline">
          &larr; Back to all history topics
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/history" className="text-orange-600 hover:underline mb-4 inline-block">
            &larr; Back to all history topics
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: "'Laila', sans-serif" }}>
            {topic.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          {/* Main Image */}
          <div className="md:col-span-3">
            <img 
              src={topic.image} 
              alt={topic.name}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="md:col-span-2">
            <div className="space-y-8 sticky top-24">
              
              {/* Detailed Account Section */}
              <div className="flex">
                <InfoIcon />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Detailed Account</h2>
                  <p className="text-gray-700 leading-relaxed">{topic.detailed_account || topic.description}</p>
                </div>
              </div>

              {/* Time Period Section */}
              {topic.time_period && (
                <div className="flex">
                  <CalendarIcon />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Time Period</h2>
                    <p className="text-gray-700">{topic.time_period}</p>
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

export default HistoryDetailPage;