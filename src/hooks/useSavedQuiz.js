import { useState, useEffect } from "react";

export const useSavedQuiz = () => {
  const [savedQuiz, setSavedQuiz] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("quiz");
    if (saved) {
      try {
        setSavedQuiz(JSON.parse(saved));
      } catch (error) {
        console.log(error);
        setSavedQuiz(null);
      }
    }
  }, []);

  return savedQuiz;
};
