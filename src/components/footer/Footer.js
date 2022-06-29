import "./Footer.scss";
import footerLogo from "../../assets/footerLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import Aos from "aos";
function Footer() {
  return (
    <div data-Aos="fade-up" className="footer">
      <div className="footer__content">
        <div className="text">
          <img src={footerLogo} alt="" />
          <p>
            Prote Matije Nenadovica 21, Brod <br />
            +387 65 323477 <br />
            Manageitinfo@gmail.com
          </p>
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
