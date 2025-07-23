import { createContext, useReducer } from "react";
import { initialState, quizReducer } from "../reducers/quizReducer";
import { useSavedQuiz } from "../hooks/useSavedQuiz";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const savedQuiz = useSavedQuiz();
  let init = {};

  if (savedQuiz?.index >= 0) {
    init = savedQuiz;
  } else {
    init = initialState;
  }
  const [state, dispatch] = useReducer(quizReducer, init);

  const shared = { state, dispatch };

  return (
    <GlobalContext.Provider value={shared}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export { GlobalContext };
