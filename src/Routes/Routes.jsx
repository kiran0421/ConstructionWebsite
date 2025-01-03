import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../Core/ProtectedRoute";
import Loader from "../Components/Loader";
import ErrorBoundary from "../Components/ErrorBoundary";

const HomePage = lazy(() => import("../Pages/Home/Home"));
const LoginPage = lazy(() => import("../Components/LoginPage"));
const SignupPage = lazy(() => import("../Components/SignupPage"));
const AboutUsPage = lazy(() => import("../Pages/About"));
const ServicesPage = lazy(() => import("../Pages/Services/Services"));
const GroupHouses = lazy(() => import("../Pages/Services/GroupHouses"));
const IndependentHouses = lazy(() =>
  import("../Pages/Services/IndependentHouses")
);
const HouseLevel = lazy(() => import("../Pages/Services/HouseLevel"));
const Villas = lazy(() => import("../Pages/Services/Villas"));
const Apartments = lazy(() => import("../Pages/Services/Apartments"));
const GatedCommunities = lazy(() =>
  import("../Pages/Services/GatedCommunities")
);
const Contactus = lazy(() => import("../Pages/Contactus"));
const ServicesMainPage = lazy(() =>
  import("../Pages/Services/ServicesMainPage")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: "/login",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <LoginPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: "/signup",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <SignupPage />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: "/about",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <ProtectedRoute>
            <AboutUsPage />
          </ProtectedRoute>
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: "/services",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <ProtectedRoute>
            <ServicesPage />
          </ProtectedRoute>
        </Suspense>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <ServicesMainPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "main",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <ServicesPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "group-houses",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <GroupHouses />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "independent-houses/:level",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <IndependentHouses />
            </Suspense>
          </ErrorBoundary>
        ),
        children: [
          {
            path: ":level",
            element: (
              <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                  <HouseLevel />
                </Suspense>
              </ErrorBoundary>
            ),
          },
        ],
      },
      {
        path: "villas",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Villas />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "apartments",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Apartments />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "gated-communities",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <GatedCommunities />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "/Contact",
    element: (
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <ProtectedRoute>
            <Contactus />
          </ProtectedRoute>
        </Suspense>
      </ErrorBoundary>
    ),
  },
]);

export default router;
