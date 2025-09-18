import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n'; // Initializes the internationalization (i18n) library

// --- React Router Imports ---
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// --- Page Component Imports ---
import HomePage from './Pages/HomePage.jsx';
import TouristPlacesPage from './Pages/TouristPlacesPage.jsx';
import TouristSpotDetailPage from './Pages/TouristSpotDetailPage.jsx';
import CuisinesPage from './Pages/CuisinesPage.jsx';
import CuisineDetailPage from './Pages/CuisineDetailPage.jsx';
import FestivalsPage from './Pages/FestivalsPage.jsx';
import FestivalDetailPage from './Pages/FestivalDetailPage.jsx';
import ArtsPage from './Pages/ArtsPage.jsx';
import ArtDetailPage from './Pages/ArtDetailPage.jsx';
import TemplesPage from './Pages/TemplesPage.jsx';
import TempleDetailPage from './Pages/TempleDetailPage.jsx';
import ClothesPage from './Pages/ClothesPage.jsx';
import ClothesDetailPage from './Pages/ClothesDetailPage.jsx';
import HistoryPage from './Pages/HistoryPage.jsx';
import HistoryDetailPage from './Pages/HistoryDetailPage.jsx';

// --- Router Configuration ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The App component provides the main layout (Navbar, Footer)
    children: [
      { path: "/", element: <HomePage /> },
      
      { path: "/tourist-places", element: <TouristPlacesPage /> },
      { path: "/tourist-places/:id", element: <TouristSpotDetailPage /> },
      
      { path: "/cuisines", element: <CuisinesPage /> },
      { path: "/cuisines/:id", element: <CuisineDetailPage /> },
      
      { path: "/festivals", element: <FestivalsPage /> },
      { path: "/festivals/:id", element: <FestivalDetailPage /> },
      
      { path: "/arts", element: <ArtsPage /> },
      { path: "/arts/:id", element: <ArtDetailPage /> },
      
      { path: "/temples", element: <TemplesPage /> },
      { path: "/temples/:id", element: <TempleDetailPage /> },
      
      { path: "/clothes", element: <ClothesPage /> },
      { path: "/clothes/:id", element: <ClothesDetailPage /> },
      
      { path: "/history", element: <HistoryPage /> },
      { path: "/history/:id", element: <HistoryDetailPage /> },
    ]
  },
]);

// --- App Rendering ---
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);