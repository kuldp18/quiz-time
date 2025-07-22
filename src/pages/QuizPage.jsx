import Footer from "../components/Footer";
import logo from "../assets/images/logo.svg";
import volume from "../assets/images/volume.svg";
import { Link } from "react-router";
import { useGlobalContext } from "../contexts/useGlobalContext";
import "./quiz.css";
import { useEffect, useRef } from "react";

const QuizPage = () => {
  const { state } = useGlobalContext();
  const nextRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    // change theme
    document.body.classList.add(`quiz-${state.theme}`);
    nextRef.current.classList.add(`next-${state.theme}`);
    timeRef.current.classList.add(`time-label-${state.theme}`);
  }, [state.theme]);

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
          <p id="timeLeft"></p>
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
