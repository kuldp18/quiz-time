import questionData from "../data/questions";

export const initialState = {
  questions: questionData,
  index: 0,
  theme: "green", //green,red,slate
  highscore: null,
  score: 0,
};

export const quizReducer = (state, action) => {};
