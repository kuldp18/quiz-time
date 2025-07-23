import Footer from "../components/Footer";
import logo from "../assets/images/logo.svg";
import volume from "../assets/images/volume.svg";
import { Link } from "react-router";
import { useGlobalContext } from "../contexts/useGlobalContext";
import "./quiz.css";
import { useEffect, useRef, useState } from "react";
import Question from "../components/Question";
import bgMusic from "../assets/audio/bg_music.mp3";

const QuizPage = () => {
  const { state } = useGlobalContext();
  const nextRef = useRef(null); // next dom element ref
  const timeRef = useRef(null); // timer dom element ref

  const [volumeOn, setVolumeOn] = useState(true); // global volume knob
  const [music, setMusic] = useState(null); // audio object

  const [progress, setProgress] = useState(
    `${state.index + 1 < 10 ? `0${state.index + 1}` : state.index + 1}/${
      state.questions.length
    }`
  );

  useEffect(() => {
    // handle bg music
    if (!music) {
      setMusic(new Audio(bgMusic));
    }

    if (volumeOn && music) {
      music.loop = true;
      music.autoplay = true;
      music.volume = 0.5;
      music.play();
    } else {
      music?.pause();
    }
  }, [volumeOn, music]);

  useEffect(() => {
    // update progress
    setProgress(
      `${state.index + 1 < 10 ? `0${state.index + 1}` : state.index + 1}/${
        state.questions.length
      }`
    );
  }, [state.index, state.questions.length]);

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

  return (
    <main className="quiz-container">
      <header className="quiz-header">
        <section>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Quiz Time" />
            </Link>
          </div>
          <div
            className={volumeOn ? "volume" : "volume volume-off"}
            onClick={() => setVolumeOn(!volumeOn)}
          >
            <img src={volume} alt="Volume" />
          </div>
        </section>

        <div className="label progress-label">
          <p id="progress">{progress}</p>
        </div>
      </header>

      <section className="quiz">
        <Question timeRef={timeRef} nextRef={nextRef} volumeOn={volumeOn} />
      </section>

      <Footer />
    </main>
  );
};
export default QuizPage;
