import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loader from './Components/Loader'; // 1. Import the Loader
import { Outlet } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  // 2. Add state to manage the initial app loading
  const [isAppLoading, setIsAppLoading] = useState(true);

  // 3. Use useEffect to turn off the loader after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000); // 2-second delay

    // Cleanup function
    return () => clearTimeout(timer);
  }, []); // Runs only once on app mount

  return (
    // 4. Use a React Fragment to conditionally render the Loader or the App
    <>
      {isAppLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen bg-stone-50">
          <ScrollToTop />
          <Navbar />
          
          <main className="flex-grow">
            <Outlet />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;