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
      <img src="logo.jpeg" alt="logo" className="image" />
      <h1 className="headerText">Belgium Football Academy</h1>
      <div className="languages">
        <button
          className={`buttonLang ${
            buttonClick === "Fr" ? "active" : "inactive"
          }`}
          onClick={() => setButtonClick("Fr")}>
          Fr
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
