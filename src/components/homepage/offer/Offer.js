import "./Offer.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import lightbulb from "../../../assets/lightbulb.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Offer() {
  return (
    <div data-aos-delay="500" data-aos="fade-up" className="offer">
      <div className="offer__main-content">
        <div className="image">
          <div className="overlay"></div>
          <img src={lightbulb} alt="" />
        </div>
        <div data-aos="slide-right" data-aos-delay="700" className="text">
          <h1>
            Trebaš
            <br /> veb sajt?
          </h1>
          <div className="line"></div>
          <p>
            Dizajn i izrada reklamnog web sajta koji je prilagođen za sve
            uređaje. Mogućnost izrade sajta na 5 stranih jezika.
          </p>
          <p className="p2">
            Sve usluge radimo u skladu sa zakonskim obavezama date države.
          </p>
          <Link to={"/MarketingStarter"}>
            Saznaj više <FontAwesomeIcon icon={faCheckCircle} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offer;
