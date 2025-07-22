import { Link } from "react-router";
import logo from "./assets/images/logo.svg";

import "./app.css";
import Footer from "./components/Footer";

const App = () => {
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

      <section className="high-score"></section>

      <Footer />
    </main>
  );
};

export default App;
