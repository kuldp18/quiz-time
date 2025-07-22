import logo from "../assets/images/logo.svg";
import linkedIn from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import Footer from "../components/Footer";
import { Link } from "react-router";
import "./result.css";

const ResultPage = () => {
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
          <div className="bar-green"></div>
          <div className="bar-red"></div>
          <div className="green-square">
            <div className="green-circle"></div>
          </div>

          <div className="red-square">
            <div className="red-circle"></div>
          </div>
        </div>

        <p className="score"></p>
        <p className="green-percentage"></p>
        <p className="red-percentage"></p>
      </section>

      <section className="quote">
        <p className="quote-text"></p>
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
