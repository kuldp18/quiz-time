import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import GlobalContextProvider from "./contexts/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  </StrictMode>
);
