// src/routes/Routes.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../Core/ProtectedRoute";

import HomePage from "../Pages/Home/Home";
import LoginPage from "../Components/LoginPage";
import SignupPage from "../Components/SignupPage";
import AboutUsPage from "../Pages/About";
import ServicesPage from "../Pages/Services/Services";
import GroupHouses from "../Pages/Services/GroupHouses";
import IndependentHouses from "../Pages/Services/IndependentHouses";
import HouseLevel from "../Pages/Services/HouseLevel";
import Villas from "../Pages/Services/Villas";
import Apartments from "../Pages/Services/Apartments";
import GatedCommunities from "../Pages/Services/GatedCommunities";
import Contactus from "../Pages/Contactus";
import ServicesMainPage from "../Pages/Services/ServicesMainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/about",
    element: (
      <ProtectedRoute>
        <AboutUsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/services",
    element: (
      <ProtectedRoute>
        <ServicesPage />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <ServicesMainPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "main",
        element: <ServicesPage />,
      },
      {
        path: "group-houses",
        element: <GroupHouses />,
      },
      {
        path: "independent-houses/:level",
        element: <IndependentHouses />,
        children: [
          {
            path: ":level",
            element: <HouseLevel />,
          },
        ],
      },
      {
        path: "villas",
        element: <Villas />,
      },
      {
        path: "apartments",
        element: <Apartments />,
      },
      {
        path: "gated-communities",
        element: <GatedCommunities />,
      },
    ],
  },
  {
    path: "/Contact",
    element: (
      <ProtectedRoute>
        <Contactus />
      </ProtectedRoute>
    ),
  },
]);

export default router;
