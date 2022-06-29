import "./MarketingStarter.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import coach from "../../../assets/coach.jpg";
import Aos from "aos";
import { useEffect } from "react";
function MarketingStarter() {
  return (
    <div data-Aos="zoom-in" className="marketing-starter">
      <div className="marketing-starter__main-content">
        <div data-aos-delay="700" data-aos="slide-left" className="text">
          <h1>Marketing starter</h1>
          <div className="line"></div>
          <p>
            Marketing starter je paket koji je <br />
            namijenjen onima koji žele napraviti <br />
            kvalitetan start.
          </p>
          <span>-40%</span>
          <Link to={"/MarketingStarter"}>
            Saznaj više <FontAwesomeIcon icon={faCheckCircle} />
          </Link>
        </div>
        <div className="image">
          <div className="overlay"></div>
          <img src={coach} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MarketingStarter;
