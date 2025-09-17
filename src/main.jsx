import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Corrected import paths with lowercase 'pages'
import TouristPlacesPage from './Pages/TouristPlacesPage.jsx';
import TouristSpotDetailPage from './Pages/TouristSpotDetailPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import CuisinesPage from './Pages/CuisinesPage.jsx';
import CuisineDetailPage from './Pages/CuisineDetailPage.jsx';
import FestivalsPage from './Pages/FestivalsPage.jsx';
import FestivalDetailPage from './pages/FestivalDetailPage.jsx';
// Corrected folder and file case

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tourist-places",
        element: <TouristPlacesPage />,
      },
      {
        path: "/tourist-places/:id",
        element: <TouristSpotDetailPage />,
      },
       {
        path: "/cuisines",
        element: <CuisinesPage />,
      },
      {
        path: "/cuisines/:id",
        element: <CuisineDetailPage />,
      },
      {
        path: "/festivals",
        element: <FestivalsPage />,
      },
      {
        path: "/festivals/:id",
        element: <FestivalDetailPage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);