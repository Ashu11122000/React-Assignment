import { Navigate, Outlet } from "react-router-dom";

import { useQuizContext } from "../context/useQuizContext";
import Loader from "../components/common/Loader";

/**
 * ==========================================================
 * GuestRoute
 * ==========================================================
 *
 * Restricts guest/public routes based on quiz state.
 *
 * Current Behavior:
 * - Allows access if no quiz is active.
 * - Redirects users with an active quiz to /quiz.
 * - Redirects users who completed a quiz to /result.
 *
 * Intended Usage:
 * - Home
 * - Landing pages
 * - Start Quiz pages
 *
 * ==========================================================
 */

const GuestRoute = () => {
  const { loading, quiz } = useQuizContext();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  const hasStartedQuiz =
    quiz?.questions?.length > 0 && !quiz?.completed;

  const hasCompletedQuiz = Boolean(
    quiz?.completed
  );

  if (hasCompletedQuiz) {
    return (
      <Navigate
        to="/result"
        replace
      />
    );
  }

  if (hasStartedQuiz) {
    return (
      <Navigate
        to="/quiz"
        replace
      />
    );
  }

  return <Outlet />;
};

export default GuestRoute;