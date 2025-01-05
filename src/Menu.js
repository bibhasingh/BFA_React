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

  const contentHome = () => {
    setContent("Home");
    setMenu("Home");
  };
  const contentSchedule = () => {
    setContent("Schedule");
    setMenu("Schedule");
  };
  const contentGallery = () => {
    setContent("Gallery");
    setMenu("Gallery");
  };
  const contentRegistration = () => {
    setContent("Registration");
    setMenu("Registration");
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
      <div className="menuList">
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
      {console.log(myCurrentLang)}
      {content === "Home" ? <Home lang={myCurrentLang} /> : null}
      {content === "Schedule" ? <Schedule lang={myCurrentLang} /> : null}
      {content === "Gallery" ? <Gallery lang={myCurrentLang} /> : null}
      {content === "Registration" ? (
        <Registration lang={myCurrentLang} />
      ) : null}
    </div>
  );
}
export default Menu;
