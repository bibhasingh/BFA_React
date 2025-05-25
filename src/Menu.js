import { useState } from "react";
import Home from "./Home";
import Schedule from "./Schedule";
import Gallery from "./Gallery";
import Registration from "./Registration";
import { useMyLang } from "./Lang";
import { useContent } from "./Content";
import "./menu.css";

function Menu() {
  const { myCurrentLang } = useMyLang();
  const { content, updateContent } = useContent();
  const [mobileClick, setMobileStatus] = useState("hide");
  console.log("Current content:", content);

  const contentHome = () => {
    updateContent("Home");
    setMobileStatus("hide");
  };
  const contentSchedule = () => {
    updateContent("Schedule");
    setMobileStatus("hide");
  };
  const contentGallery = () => {
    updateContent("Gallery");
    setMobileStatus("hide");
  };
  const contentRegistration = () => {
    updateContent("Registration");
    setMobileStatus("hide");
  };

  const displayMobileMenu = () => {
    setMobileStatus(mobileClick === "show" ? "hide" : "show");
  };

  const buttonText = (firstText, secondText, thirdText) => {
    if (myCurrentLang === "Fr") {
      return firstText;
    } else if (myCurrentLang === "Nl") {
      return secondText;
    } else {
      return thirdText;
    }
  };

  return (
    <div className="menu">
      <button className="mobileButton" onClick={displayMobileMenu}>
        ☰
      </button>
      <div
        className={`menuList ${
          mobileClick === "show" ? "active" : "inactive"
        }`}>
        <div className="fixButton">
          <button
            className={`buttonMenu ${
              content === "Home" ? "active" : "inactive"
            }`}
            onClick={contentHome}>
            {buttonText("Accueil", "Home", "Home")}
          </button>
          <button
            className={`buttonMenu ${
              content === "Schedule" ? "active" : "inactive"
            }`}
            onClick={contentSchedule}>
            {buttonText("Horaires", "Rooster", "Schedule")}
          </button>
          <button
            className={`buttonMenu ${
              content === "Gallery" ? "active" : "inactive"
            }`}
            onClick={contentGallery}>
            {buttonText("Galary", "Galerij", "Gallary")}
          </button>
          <button
            className={`buttonMenu ${
              content === "Registration" ? "active" : "inactive"
            }`}
            onClick={contentRegistration}>
            {buttonText("Inscription", "Registratie", "Registration")}
          </button>
        </div>
      </div>
      <div
        className={`contentBody mobileContentMargin ${
          mobileClick === "show" ? "active" : "inactive"
        }`}>
        {content === "Home" ? <Home lang={myCurrentLang} /> : null}
        {content === "Schedule" ? <Schedule lang={myCurrentLang} /> : null}
        {content === "Gallery" ? <Gallery lang={myCurrentLang} /> : null}
        {content === "Registration" ? (
          <Registration lang={myCurrentLang} />
        ) : null}
      </div>
    </div>
  );
}

export default Menu;
