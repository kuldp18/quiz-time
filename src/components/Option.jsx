import rightSvg from "../assets/images/right.svg";
import wrongSvg from "../assets/images/wrong.svg";

const Option = ({
  option,
  handleClick,
  optionsDisabled,
  isCorrect,
  isSelected,
  reveal,
}) => {
  // Right answer selected

  if (isSelected && isCorrect) {
    return (
      <div
        className="option option-chosen-correct"
        onClick={handleClick}
        style={{
          cursor: optionsDisabled ? "default" : "pointer",
        }}
      >
        <p>{option.answer}</p>
        <span>
          <img src={rightSvg} alt="Right" />
        </span>
      </div>
    );
  }

  //   Wrong answer selected

  if (isSelected && !isCorrect) {
    return (
      <div
        className="option option-chosen-wrong"
        onClick={handleClick}
        style={{
          cursor: optionsDisabled ? "default" : "pointer",
        }}
      >
        <p>{option.answer}</p>
        <p>
          You chose
          <span>
            <img src={wrongSvg} alt="Wrong" />
          </span>
        </p>
      </div>
    );
  }

  //  Reveal right answer after selection

  if (!isSelected && isCorrect && optionsDisabled) {
    return (
      <div
        className="option option-chosen-correct"
        onClick={handleClick}
        style={{
          cursor: optionsDisabled ? "default" : "pointer",
        }}
      >
        <p>{option.answer}</p>
        <span>
          <img src={rightSvg} alt="Right" />
        </span>
      </div>
    );
  }

  //  Reveal right answer after timer expires

  if (reveal && isCorrect && optionsDisabled) {
    return (
      <div
        className="option option-chosen-correct"
        onClick={handleClick}
        style={{
          cursor: optionsDisabled ? "default" : "pointer",
        }}
      >
        <p>{option.answer}</p>
        <span>
          <img src={rightSvg} alt="Right" />
        </span>
      </div>
    );
  }

  //   Default state
  return (
    <div
      className="option"
      onClick={handleClick}
      style={{
        cursor: optionsDisabled ? "default" : "pointer",
      }}
    >
      {option.answer}
    </div>
  );
};

export default Option;
