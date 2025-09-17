// src/Components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // 1. Get the current page's path (e.g., '/', '/tourist-places/1')
  const { pathname } = useLocation();

  // 2. Use the useEffect hook to run a function whenever the path changes
  useEffect(() => {
    // 3. Scroll the window to the top left corner
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname, so it runs on each navigation

  // 4. This component doesn't render any visible JSX
  return null;
}

export default ScrollToTop;