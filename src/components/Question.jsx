import { useEffect, useRef, useState, useMemo } from "react";
import { useGlobalContext } from "../contexts/useGlobalContext";
import { useNavigate } from "react-router";
import { ACTIONS } from "../reducers/quizReducer";
import Option from "./Option";
import rightTing from "../assets/audio/correct.mp3";
import wrongTing from "../assets/audio/wrong.wav";
import { throttle } from "lodash";

const Question = ({ timeRef, nextRef, volumeOn }) => {
  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(null);

  const timer = useRef(null); // setInterval
  const [time, setTime] = useState(30); // duration for each question
  const [optionsDisabled, setOptionsDisabled] = useState(false); // disable options or not
  const [selectedOption, setSelectedOption] = useState(null); // track selected option index
  const [revealAnswer, setRevealAnswer] = useState(false); // reveal answer after timer expires

  const saveQuiz = useMemo(
    () =>
      throttle(() => {
        dispatch({ type: ACTIONS.SAVE_QUIZ });
      }, 1500),
    [dispatch]
  );

  useEffect(() => {
    // handle timer
    timer.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    // change theme as timer changes...
    if (time === 30) {
      dispatch({ type: ACTIONS.CHANGE_THEME, value: "green" });
    }
    if (time === 15) {
      dispatch({ type: ACTIONS.CHANGE_THEME, value: "slate" });
    }
    if (time === 5) {
      dispatch({ type: ACTIONS.CHANGE_THEME, value: "red" });
    }
    if (time === 0) {
      clearInterval(timer.current);
      setOptionsDisabled(true);
      setRevealAnswer(true);
    }
    //save quiz
    saveQuiz();

    return () => {
      saveQuiz.cancel();
    };
  }, [time, dispatch, saveQuiz]);

  useEffect(() => {
    // on index change
    setCurrentQuestion(state.questions[state.index]);

    //create new timer
    clearInterval(timer.current);

    setTime(30);

    timer.current = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    // reset other state

    setOptionsDisabled(false);
    setSelectedOption(null);
    setRevealAnswer(false);

    return () => clearInterval(timer.current);
  }, [state.index, state.questions]);

  const handleNext = () => {
    if (!optionsDisabled) return;

    if (state.index === state.questions.length - 1) {
      navigate("/result");
    }
    dispatch({ type: ACTIONS.INCREASE_INDEX });
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setOptionsDisabled(true);

    if (time === 0) return;

    const option = state.questions[state.index].answers[index];
    dispatch({ type: ACTIONS.CALCULATE_ANSWER, value: option });
    clearInterval(timer.current);

    if (option.correct && volumeOn) {
      // play correct sound
      const audio = new Audio(rightTing);
      audio.autoplay = true;
      audio.volume = 0.7;
    } else if (!option.correct && volumeOn) {
      // play wrong sound
      const audio = new Audio(wrongTing);
      audio.autoplay = true;
      audio.volume = 0.4;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };
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
              <Option
                key={i}
                time={time}
                reveal={revealAnswer}
                isSelected={i === selectedOption}
                option={option}
                isCorrect={option.correct}
                handleClick={
                  optionsDisabled ? () => {} : () => handleOptionClick(i)
                }
                optionsDisabled={optionsDisabled}
              />
            );
          })}
      </div>

      <div
        ref={nextRef}
        className="next"
        style={{
          cursor: optionsDisabled ? "pointer" : "default",
        }}
      >
        <p id="nextBtn" onClick={handleNext}>
          Next
        </p>
      </div>
    </>
  );
};
export default Question;
