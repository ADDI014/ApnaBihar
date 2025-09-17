import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import the necessary functions from React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

  import HomePage from './Pages/Homepage.jsx';
import TouristPlacesPage from './Pages/TouristPlacesPage.jsx';
import TouristSpotDetailPage from './Pages/TouristSpotDetailPage.jsx';


// 2. Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The main App component is the layout
    children: [
      {
        path: "/",
        element: <HomePage />, // The HomePage is the default child
      },

      // We will add other pages like Tourist Places here later
        {
        path: "/tourist-places",
        element: <TouristPlacesPage />,
      },
      {
        path: "/tourist-places/:id",
        element: <TouristSpotDetailPage />,
      },
    ]
  },
]);

// 3. Provide the router to your app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);