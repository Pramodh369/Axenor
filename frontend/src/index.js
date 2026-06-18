import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";
import AboutPage from "./landing_page/about/AboutPage";
import FeaturesPage from "./landing_page/features/FeaturesPage";

import DashboardPage from "./dashboard/DashboardPage";
import HoldingsPage from "./dashboard/HoldingsPage";
import WatchlistPage from "./dashboard/WatchlistPage";
import OrdersPage from "./dashboard/OrdersPage";
import FundsPage from "./dashboard/FundsPage";
import SettingsPage from "./dashboard/SettingsPage";

import ProtectedRoute from "./ProtectedRoute";

import SupportPage from "./landing_page/support/SupportPage";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/NotFound";

AOS.init({
  duration: 1000,
  once: true,
});

function Layout() {
  const location = useLocation();

  const dashboardRoutes = [
    "/dashboard",
    "/holdings",
    "/watchlist",
    "/orders",
    "/funds",
    "/settings",
  ];

  const hideLayout =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    dashboardRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/holdings"
          element={
            <ProtectedRoute>
              <HoldingsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/watchlist"
          element={
            <ProtectedRoute>
              <WatchlistPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/funds"
          element={
            <ProtectedRoute>
              <FundsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />

        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);