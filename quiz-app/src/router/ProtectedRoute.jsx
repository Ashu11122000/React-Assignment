import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useQuizContext } from "../context/useQuizContext";

import Loader from "../components/common/Loader";

/**
 * ==========================================================
 * ProtectedRoute
 * ==========================================================
 *
 * Protects routes that require a completed quiz.
 *
 * Protected Pages:
 * - /result
 * - /review
 * - /leaderboard
 *
 * If the quiz has not been completed,
 * users are redirected to the Home page.
 *
 * ==========================================================
 */

const ProtectedRoute = () => {
  const { loading, quiz } = useQuizContext();

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  const hasCompletedQuiz = Boolean(
    quiz?.completed
  );

  if (!hasCompletedQuiz) {
    return (
      <Navigate
        to="/"
        replace
        state={{
          from: location.pathname,
        }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;