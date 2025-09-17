import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom'; // 1. Import Outlet

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* 2. Replace HomePage with Outlet */}
        {/* The Outlet component will render the correct page based on the URL */}
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;