import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import AllFeatures from "./Features/AllFeatures";
import AllDownloads from "./Downloads/AllDownloads";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
 
  {
    path: "features",
    element: <AllFeatures/>,
  },

  {
    path: "download",
    element:<AllDownloads/>,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);






















// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
