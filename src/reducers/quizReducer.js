import questionData from "../data/questions";

export const initialState = {
  questions: questionData,
  index: 0,
  theme: "green", //green,red,slate
  highscore: null,
  score: 0,
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      if (!action.value) throw new Error("Empty theme color");
      return { ...state, theme: action.value };
    }
    default:
      throw new Error("Invalid action type in dispatch");
  }
};

export const ACTION_TYPES = {
  CHANGE_THEME: "CHANGE_THEME",
};
