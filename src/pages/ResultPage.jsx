import logo from "../assets/images/logo.svg";
import linkedIn from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/useGlobalContext";
import "./result.css";

const ResultPage = () => {
  const { state } = useGlobalContext();
  const [greenPercentage, setGreenPercentage] = useState(0);
  const [redPercentage, setRedPercentage] = useState(0);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const rightQuestions = state.score;
    const totalQuestions = state.questions.length;

    const green = (rightQuestions / totalQuestions) * 100;
    const red = 100 - green;

    setGreenPercentage(green.toFixed(1));
    setRedPercentage(red.toFixed(1));

    switch (true) {
      case green >= 90:
        setQuote("🎉 Outstanding! You're a quiz master!");
        break;
      case green >= 80:
        setQuote("🔥 Great job! You really know your stuff.");
        break;
      case green >= 70:
        setQuote("👍 Good effort! Just a little more practice.");
        break;
      case green >= 60:
        setQuote("🙂 Not bad, but there's room to grow.");
        break;
      case green >= 50:
        setQuote("😅 Close call! Review a few things and try again.");
        break;
      case green >= 30:
        setQuote("🤔 Hmm… looks like you need a refresher.");
        break;
      default:
        setQuote("💀 That was rough… but hey, at least you tried!");
    }
  }, [state.score, state.questions]);

  return (
    <main className="result-container">
      <header className="result-header">
        <div className="logo">
          <img src={logo} alt="Quiz Time" />
        </div>
        <h1>Result</h1>
      </header>

      <section className="result">
        <div className="bar">
          <div
            className="bar-green"
            style={{
              width: `${greenPercentage}%`,
            }}
          ></div>
          <div
            className="bar-red"
            style={{
              width: `${redPercentage}%`,
            }}
          ></div>
          <div className="green-square">
            <div className="green-circle"></div>
          </div>

          <div className="red-square">
            <div className="red-circle"></div>
          </div>
        </div>

        <p className="score">Score: {state.score}</p>
        <p className="green-percentage">{greenPercentage}%</p>
        <p className="red-percentage">{redPercentage}%</p>
      </section>

      <section className="quote">
        <p className="quote-text">{quote}</p>
        <Link className="green-button result-btn" to="/">
          <div className="layer">
            <p>Retry</p>
          </div>
        </Link>
      </section>

      <section className="share">
        <p>Share your score:</p>
        <div>
          <img src={linkedIn} alt="LinkedIn" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
        </div>
      </section>

      <Footer />
    </main>
  );
};
export default ResultPage;
