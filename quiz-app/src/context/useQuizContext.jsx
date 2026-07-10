import { useContext } from "react";
import QuizContext from "./QuizContext";

export const useQuizContext = () => {
  const context = useContext(QuizContext);

  if (context === null) {
    throw new Error(
      "useQuizContext must be used within <QuizProvider>."
    );
  }

  return context;
};