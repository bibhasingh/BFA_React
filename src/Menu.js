import { useState } from "react";
import Home from "./Home";
import Schedule from "./Schedule";
import Gallery from "./Gallery";
import Registration from "./Registration";
import { useMyLang } from "./Lang";
import "./menu.css";

function Menu() {
  const [content, setContent] = useState("Home");
  const { myCurrentLang } = useMyLang();
  const [menuClick, setMenu] = useState("Home");
  const [mobileClick, setMobileStatus] = useState("hide");

  const contentHome = () => {
    setContent("Home");
    setMenu("Home");
    setMobileStatus("hide");
  };
  const contentSchedule = () => {
    setContent("Schedule");
    setMenu("Schedule");
    setMobileStatus("hide");
  };
  const contentGallery = () => {
    setContent("Gallery");
    setMenu("Gallery");
    setMobileStatus("hide");
  };
  const contentRegistration = () => {
    setContent("Registration");
    setMenu("Registration");
    setMobileStatus("hide");
  };

  const displayMobileMenu = () => {
    if (mobileClick === "show") {
      setMobileStatus("hide");
    } else {
      setMobileStatus("show");
    }
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
  console.log(menuClick);
  return (
    <div className="menu">
      {/* <img src="logo.jpeg" /> */}
      <button className="mobileButton" onClick={displayMobileMenu}>
        ☰
      </button>
      <div
        className={`menuList ${
          mobileClick === "show" ? "active" : "inactive"
        }`}>
        <button
          className={`buttonMenu ${
            menuClick === "Home" ? "active" : "inactive"
          } firstMenu `}
          onClick={contentHome}>
          {buttonText("Accueil", "Welkom", "Welcome")}
        </button>
        <button
          className={`buttonMenu ${
            menuClick === "Schedule" ? "active" : "inactive"
          } firstMenu `}
          onClick={contentSchedule}>
          {buttonText("Horaires", "Plan", "Schedule")}
        </button>
        <button
          className={`buttonMenu ${
            menuClick === "Gallery" ? "active" : "inactive"
          } firstMenu `}
          onClick={contentGallery}>
          {buttonText("Galary", "Galerij", "Gallary")}
        </button>
        <button
          className={`buttonMenu ${
            menuClick === "Registration" ? "active" : "inactive"
          } firstMenu `}
          onClick={contentRegistration}>
          {buttonText("Inscription", "Registratie", "Registration")}
        </button>
      </div>
      {/* {console.log(myCurrentLang)} */}
      <div className="mobileContentMargin">
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
