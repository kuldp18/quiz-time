import { Link, useNavigate } from "react-router";
import logo from "./assets/images/logo.svg";
import Footer from "./components/Footer";
import { useGlobalContext } from "./contexts/useGlobalContext";
import { useEffect, useState } from "react";
import { ACTIONS } from "./reducers/quizReducer";
import "./app.css";
import { useSavedQuiz } from "./hooks/useSavedQuiz";

const App = () => {
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const savedQuiz = useSavedQuiz();

  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    if (savedQuiz === null) {
      dispatch({ type: ACTIONS.RESET_STATE });
      return;
    }

    const highscore = localStorage.getItem("quiz_highscore") || 0;
    setHighscore(highscore);

    if (savedQuiz.index < savedQuiz.questions.length) {
      dispatch({ type: ACTIONS.LOAD_SAVED_QUIZ, value: savedQuiz });
      navigate("/quiz");
    }
  }, [dispatch, savedQuiz, navigate]);

  return (
    <main className="container home-container">
      <section className="logo">
        <img src={logo} alt="Quiz Time" />
      </section>

      <section className="start">
        <Link className="green-button" to="/quiz">
          <div className="layer">
            <p>Start Now</p>
          </div>
        </Link>
      </section>

      <section
        className="high-score"
        style={{
          display: highscore ? "block" : "none",
        }}
      >
        Highscore: {highscore}
      </section>

      <Footer />
    </main>
  );
};

export default App;
