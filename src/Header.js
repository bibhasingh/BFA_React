import { useState } from "react";

import { useMyLang } from "./Lang";
import "./header.css";

function Header() {
  const { updateLangState } = useMyLang();
  const [buttonClick, setClick] = useState("Fr");

  const setButtonClick = (value) => {
    // console.log(value);
    setClick(value);
    updateLangState(value);
  };

  return (
    <div className="header">
      <img src="logo.jpeg" alt="Best football academy in Belgium" className="image" />
      <div className="headerText">
        <div className="blackdiv"> </div>
      <h1 className="headerText2">Belgium Football Academy</h1>
      </div>
      <video className="background-video" autoPlay loop muted>
      <source src="intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      <div className="languages">
        <button
          className={`buttonLang ${
            buttonClick === "Fr" ? "active" : "inactive"
          }`}
          onClick={() => setButtonClick("Fr")}>
          FR
        </button>
        <button
          className={`buttonLang ${
            buttonClick === "Nl" ? "active" : "inactive"
          }`}
          onClick={() => setButtonClick("Nl")}>
          NL
        </button>
        <button
          className={`buttonLang ${
            buttonClick === "En" ? "active" : "inactive"
          }`}
          onClick={() => setButtonClick("En")}>
          EN
        </button>
      </div>
    </div>
  );
}
export default Header;

// style={{ backgroundImage: 'url("/team.jpeg")' }}
