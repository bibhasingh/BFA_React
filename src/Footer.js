import "./footer.css";
import { useMyLang } from "./Lang";

function Footer() {
  const { myCurrentLang } = useMyLang();

  const footmenu = (firstText, secondText, thirdText) => {
    if (myCurrentLang === "Fr") {
      return firstText;
    } else if (myCurrentLang === "Nl") {
      return secondText;
    } else {
      return thirdText;
    }
  };

  return (
    <div className="footer">
      {console.log(myCurrentLang)}
      <div className="footdiv">
        <h2 className="foothead">{footmenu("Addresse", "adres", "Address")}</h2>
        <p>
          Konkel Street 208, 1200 Brussels
          <br />
          Avenue Salomé 2, 1150 Brussels
        </p>
      </div>
      <div className="footdiv">
        <p className="foothead">{footmenu("Contact", "Contact", "Contact")}</p>
        <p className="email">Phone: 0484 97 71 55</p>
        <p className="email">Email: belgiumfootballacademy2105@gmail.com</p>
      </div>
      <div className="footdiv">
        <p className="foothead">
          {footmenu("Réseaux sociaux", "Sociale media", "Social Media")}
        </p>
        <a href="https://wa.me/32466465302">
          <img src="wa.jpeg" alt="watsAppImage" className="logo" />
        </a>
        <a href="https://wa.me/32466465302">
          <img src="fb.jpeg" alt="watsAppImage" className="logo" />
        </a>
        <a href="https://wa.me/32466465302">
          <img src="mess.jpeg" alt="watsAppImage" className="logo" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
