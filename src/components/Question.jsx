import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../contexts/useGlobalContext";
import { ACTION_TYPES } from "../reducers/quizReducer";

const Question = ({ timeRef, nextRef }) => {
  const { state, dispatch } = useGlobalContext();

  const [currentQuestion, setCurrentQuestion] = useState(null);

  const timer = useRef(null); // setInterval
  const [time, setTime] = useState(30); // duration for each question

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

  useEffect(() => {
    // on index change
    setCurrentQuestion(state.questions[state.index]);

    //create new timer
    clearInterval(timer.current);

    setTime(30);

    timer.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, [state.index, state.questions]);

  const handleNext = () => {
    if (state.index === state.questions.length - 1) return;
    dispatch({ type: ACTION_TYPES.INCREASE_INDEX });
  };

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return (
    <>
      <div className="question">
        <p id="question">{currentQuestion?.question}</p>
      </div>

      <div className="label time-label" ref={timeRef}>
        <p id="timeLeft">{formatTime(time)}</p>
      </div>

      <div className="options">
        {currentQuestion?.answers.length &&
          currentQuestion?.answers.map((option, i) => {
            return (
              <div className="option" key={i}>
                {option.answer}
              </div>
            );
          })}
      </div>

      <div ref={nextRef} className="next">
        <p id="nextBtn" onClick={handleNext}>
          Next
        </p>
      </div>
    </>
  );
};
export default Question;
