import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2 className="contact">Contact</h2>
      <p>
        Konkel Street 208, 1200 Brussels
        <br />
        Avenue Salomé 2, 1150 Brussels
      </p>
      <p className="email">Email : belgiumfootballacademy2105@gmail.com</p>
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
  );
}
export default Footer;
