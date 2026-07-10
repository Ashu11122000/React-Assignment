import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Review from "../pages/Review";
import Leaderboard from "../pages/Leaderboard";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";

/**
 * ==========================================================
 * AppRouter
 * ==========================================================
 *
 * Centralized application routing.
 *
 * Responsibilities:
 * - Configure all routes
 * - Apply Layout
 * - Protect restricted pages
 * - Handle 404 pages
 *
 * ==========================================================
 */

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Home />} />

        <Route path="/" element={<Home />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/about" element={<About />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/result"
            element={<Result />}
          />

          <Route
            path="/review"
            element={<Review />}
          />

          <Route
            path="/leaderboard"
            element={<Leaderboard />}
          />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;