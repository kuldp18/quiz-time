import Footer from "../components/Footer";
import logo from "../assets/images/logo.svg";
import volume from "../assets/images/volume.svg";
import { Link } from "react-router";
import { useGlobalContext } from "../contexts/useGlobalContext";
import "./quiz.css";
import { useEffect, useRef, useState } from "react";
import { ACTION_TYPES } from "../reducers/quizReducer";

const QuizPage = () => {
  const { state, dispatch } = useGlobalContext();
  const nextRef = useRef(null); // next dom element ref
  const timeRef = useRef(null); // timer dom element ref

  const [time, setTime] = useState(30); // duration for each question
  const timer = useRef(null); // setInterval

  useEffect(() => {
    // Change theme by removing old classes
    const themes = ["green", "slate", "red"];

    const body = document.body;
    const next = nextRef.current;
    const time = timeRef.current;

    themes.forEach((theme) => {
      body.classList.remove(`quiz-${theme}`);
      next.classList.remove(`next-${theme}`);
      time.classList.remove(`time-label-${theme}`);
    });

    body.classList.add(`quiz-${state.theme}`);
    next.classList.add(`next-${state.theme}`);
    time.classList.add(`time-label-${state.theme}`);
  }, [state.theme]);

  useEffect(() => {
    // handle timer
    timer.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    // change theme as timer changes...
    if (time === 15) {
      dispatch({ type: ACTION_TYPES.CHANGE_THEME, value: "slate" });
    }
    if (time === 5) {
      console.log("red");

      dispatch({ type: ACTION_TYPES.CHANGE_THEME, value: "red" });
    }
    if (time === 0) {
      clearInterval(timer.current);
    }
  }, [time, dispatch]);

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  return (
    <main className="quiz-container">
      <header className="quiz-header">
        <section>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Quiz Time" />
            </Link>
          </div>
          <div className="volume">
            <img src={volume} alt="Volume" />
          </div>
        </section>

        <div className="label progress-label">
          <p id="progress"></p>
        </div>
      </header>

      <section className="quiz">
        <div className="question">
          <p id="question">dasdaasd</p>
        </div>

        <div className="label time-label" ref={timeRef}>
          <p id="timeLeft">{formatTime(time)}</p>
        </div>

        <div className="options">
          <div className="option">dasda</div>
          <div className="option">dasda</div>
          <div className="option">dasda</div>
          <div className="option">dasda</div>
        </div>

        <div ref={nextRef} className="next">
          <p id="nextBtn">Next</p>
        </div>
      </section>

      <Footer />
    </main>
  );
};
export default QuizPage;
