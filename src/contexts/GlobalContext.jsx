import { createContext, useReducer } from "react";
import { initialState, quizReducer } from "../reducers/quizReducer";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const shared = { state, dispatch };

  return (
    <GlobalContext.Provider value={shared}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
export { GlobalContext };
