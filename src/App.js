import { useState, useRef } from "react";
import "./App.css";
import chillingPic from "./images/chilling.svg";

/* 
  const [excuseType, setExcuseType] = useState("")
  const excuse = useExcuse(excuseType);

  const familyRef = useRef(null);
  const officeRef = useRef(null);
  const childrenRef = useRef(null);
  const collegeRef = useRef(null);
  const partyRef = useRef(null);
  const funnyRef = useRef(null);
  const unbelievableRef = useRef(null);
  const developersRef = useRef(null);
  const gamingRef = useRef(null);

  function handleExcuse(type) {
    setExcuseType(e => type.toLowerCase());
    console.log(excuseType)
  }
*/

function App() {
  const [excuseType, setExcuseType] = useState("");

  const familyRef = useRef(null);
  const officeRef = useRef(null);
  const childrenRef = useRef(null);
  const collegeRef = useRef(null);
  const partyRef = useRef(null);
  const funnyRef = useRef(null);
  const unbelievableRef = useRef(null);
  const developersRef = useRef(null);
  const gamingRef = useRef(null);

  function handleExcuse(type) {
    setExcuseType((e) => (e = type.toLowerCase()));
  }

  return (
    <>
      <div className="main-container">
        <div className="left-section">
          <header>
            <h1 className="header">Generate a Silly Excuse!</h1>
          </header>
          <article>sample</article>
          <img
            src={chillingPic}
            alt="illustration of two people chilling on a couch"
          />
        </div>

        <section>
          <div className="right-section">
            <Excuse type="Family" handleClick={handleExcuse} eRef={familyRef} />
            <Excuse type="Office" handleClick={handleExcuse} eRef={officeRef} />
            <Excuse
              type="Children"
              handleClick={handleExcuse}
              eRef={childrenRef}
            />
            <Excuse
              type="College"
              handleClick={handleExcuse}
              eRef={collegeRef}
            />
            <Excuse type="Party" handleClick={handleExcuse} eRef={partyRef} />
            <Excuse type="Funny" handleClick={handleExcuse} eRef={funnyRef} />
            <Excuse
              type="Unbelievable"
              handleClick={handleExcuse}
              eRef={unbelievableRef}
            />
            <Excuse
              type="Developers"
              handleClick={handleExcuse}
              eRef={developersRef}
            />
            <Excuse type="Gaming" handleClick={handleExcuse} eRef={gamingRef} />
          </div>
        </section>
      </div>
      <footer className="footer">&#169; 2024 zeeneecodes</footer>
    </>
  );
}

function Excuse({ type, handleClick, eRef }) {
  return (
    <div className="excuse-type">
      <h3>{type}</h3>
      <div className="excuse-type__button-container">
        <button onClick={() => handleClick(type)} ref={eRef}>
          Generate
        </button>
      </div>
    </div>
  );
}
export default App;
