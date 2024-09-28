import { useState } from "react";
import "./App.css";
import chillingPic from "./images/chilling.svg";
import { useExcuse } from "./useExcuse";

function App() {
  const [excuseType, setExcuseType] = useState("");
  const { excuse, increaseCounter } = useExcuse(excuseType);

  function handleExcuse(type) {
    setExcuseType((e) => (e = type.toLowerCase()));
    increaseCounter();
  }

  return (
    <>
      <div className="main-container">
        <div className="left-section">
          <header>
            <h1 className="header">Generate a Silly Excuse!</h1>
          </header>
          <article>{excuse}</article>
          <img
            src={chillingPic}
            alt="illustration of two people chilling on a couch"
          />
        </div>

        <section>
          <div className="right-section">
            <Excuse type="Family" handleClick={handleExcuse} />
            <Excuse type="Office" handleClick={handleExcuse} />
            <Excuse type="Children" handleClick={handleExcuse} />
            <Excuse type="College" handleClick={handleExcuse} />
            <Excuse type="Party" handleClick={handleExcuse} />
            <Excuse type="Funny" handleClick={handleExcuse} />
            <Excuse type="Unbelievable" handleClick={handleExcuse} />
            <Excuse type="Developers" handleClick={handleExcuse} />
            <Excuse type="Gaming" handleClick={handleExcuse} />
          </div>
        </section>
      </div>
      <footer className="footer">&#169; 2024 zeeneecodes</footer>
    </>
  );
}

function Excuse({ type, handleClick }) {
  return (
    <div className="excuse-type">
      <h3>{type}</h3>
      <div className="excuse-type__button-container">
        <button onClick={() => handleClick(type)}>Generate</button>
      </div>
    </div>
  );
}
export default App;
