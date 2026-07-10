import { createContext } from "react";

import useQuiz from "../hooks/useQuiz";

/**
 * ==========================================================
 * Quiz Context
 * ==========================================================
 *
 * Global context for the Quiz Application.
 *
 * This file ONLY exports:
 * - QuizContext
 * - QuizProvider
 *
 * The custom hook is placed in:
 * useQuizContext.js
 *
 * ==========================================================
 */

const QuizContext = createContext(null);

QuizContext.displayName = "QuizContext";

/**
 * ==========================================================
 * Quiz Provider
 * ==========================================================
 */

export function QuizProvider({ children }) {
  const quiz = useQuiz();

  return (
    <QuizContext.Provider value={quiz}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContext;