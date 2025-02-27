import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footdiv">
        <h2 className="foothead">Address</h2>
        <p>
          Konkel Street 208, 1200 Brussels
          <br />
          Avenue Salomé 2, 1150 Brussels
        </p>
      </div>
      <div className="footdiv">
        <p className="foothead">Contact</p>
        <p className="email">Email: belgiumfootballacademy2105@gmail.com</p>
      </div>
      <div className="footdiv">
        <p className="foothead">Social Media</p>
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
