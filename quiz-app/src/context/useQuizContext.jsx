import { useContext } from "react";

import QuizContext from "./QuizContext";

/**
 * ==========================================================
 * useQuizContext
 * ==========================================================
 *
 * Custom hook for consuming QuizContext.
 *
 * Usage:
 *
 * const {
 *   quiz,
 *   currentQuestion,
 *   loading,
 *   progress,
 *   timer,
 *   score,
 *   nextQuestion,
 *   previousQuestion,
 *   answerQuestion,
 *   finishQuiz,
 * } = useQuizContext();
 *
 * ==========================================================
 */

const useQuizContext = () => {
  const context = useContext(QuizContext);

  if (context === null) {
    throw new Error(
      "useQuizContext must be used within <QuizProvider>."
    );
  }

  return context;
};

export default useQuizContext;