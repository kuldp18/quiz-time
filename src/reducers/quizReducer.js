import questionData from "../data/questions";

export const initialState = {
  questions: questionData,
  index: 0,
  theme: "green", //green,red,slate
  highscore: null,
  score: 0,
};

export const ACTIONS = {
  CHANGE_THEME: "CHANGE_THEME",
  INCREASE_INDEX: "INCREASE_INDEX",
  CALCULATE_ANSWER: "CALCULATE_ANSWER",
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
    default:
      throw new Error("Invalid action type in dispatch");
  }
};
