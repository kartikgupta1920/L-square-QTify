import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
// import HomePage from "./pages/AlbumPage/AlbumPage";
// import AlbumPage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    Children: [
      {
      path: "/",
      // element: <HomePage />,
      },
      {
        path: "/album/:albumId",
        // element: <AlbumPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


