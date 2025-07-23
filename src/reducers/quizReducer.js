import questionData from "../data/questions";
import { shuffle } from "lodash";

export const initialState = {
  questions: prepareQuiz(questionData),
  index: 0,
  theme: "green", //green,red,slate
  highscore: null,
  score: 0,
};

export const ACTIONS = {
  CHANGE_THEME: "CHANGE_THEME",
  INCREASE_INDEX: "INCREASE_INDEX",
  CALCULATE_ANSWER: "CALCULATE_ANSWER",
  RESET_STATE: "RESET_STATE",
  CHECK_HIGHSCORE: "CHECK_HIGHSCORE",
  SAVE_QUIZ: "SAVE_QUIZ",
  LOAD_SAVED_QUIZ: "LOAD_SAVED_QUIZ",
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_THEME: {
      if (!action.value) throw new Error("Empty theme color");
      return { ...state, theme: action.value };
    }
    case ACTIONS.INCREASE_INDEX: {
      return { ...state, index: state.index + 1 };
    }
    case ACTIONS.CALCULATE_ANSWER: {
      const option = action.value;
      if (option.correct) {
        //Correct answer
        return { ...state, score: state.score + 1 };
      } else {
        // Wrong answer
        return { ...state };
      }
    }

    case ACTIONS.CHECK_HIGHSCORE: {
      const highscore =
        state.score > state.highscore ? state.score : state.highscore;
      return { ...state, highscore };
    }

    case ACTIONS.SAVE_QUIZ: {
      localStorage.setItem("quiz", JSON.stringify(state));
      localStorage.setItem("quiz_highscore", JSON.stringify(state.highscore));
      return { ...state };
    }

    case ACTIONS.LOAD_SAVED_QUIZ: {
      const savedState = action.value;
      return { ...savedState };
    }

    case ACTIONS.RESET_STATE: {
      return { ...initialState };
    }
    default:
      throw new Error("Invalid action type in dispatch");
  }
};

function prepareQuiz(questions) {
  let shuffledQuestions = shuffle(questions);

  return shuffledQuestions.map((question) => {
    question.answers = shuffle(question.answers);
    return question;
  });
}
