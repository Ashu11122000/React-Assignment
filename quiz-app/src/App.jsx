import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Loader from "./components/common/Loader";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Quiz = lazy(() => import("./pages/Quiz"));
const Result = lazy(() => import("./pages/Result"));
const Review = lazy(() => import("./pages/Review"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/quiz"
            element={<Quiz />}
          />

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

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;