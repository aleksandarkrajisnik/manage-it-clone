import "./Services.scss";
import img1 from "../../../assets/laptop.jpg";
import img2 from "../../../assets/monitors.jpg";
import img3 from "../../../assets/ruka.jpg";
import img4 from "../../../assets/book.jpg";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Aos from "aos";
import Tilt from "react-parallax-tilt";

function Services() {
  const cardsRef = useRef(null);
  useEffect(() => {
    console.log("myRef:", cardsRef.current);
  }, []);

  return (
    <div className="services-holder">
      <div className="title">
        <span>[</span>
        <h4>USLUGE</h4>
        <span>]</span>
      </div>

      <h1>Naše specijalnosti</h1>
      <div className="line1"></div>
      <p>
        Sve svoje usluge vršimo na engleskom, njemačkom, italijanskom, ruskom i
        francuskom jeziku
      </p>

      <div
        data-aos-delay="500"
        data-aos="fade-up"
        className="cards"
        ref={cardsRef}
      >
        <Tilt className="card">
          <img src={img1} alt="" />
          <h3>Web dizajn</h3>
          <div className="line2"></div>
          <p>
            Dizajn, izrada i održavanje svih vrsta web stranica. Zakup domene i
            hosta.
          </p>
          <div className="btnDiv">
            <Link to={"/"}>Saznaj više</Link>
          </div>
        </Tilt>

        <Tilt className="card">
          <img src={img2} alt="" />
          <h3>Grafički dizajn</h3>
          <div className="line2"></div>
          <p>
            Nudimo usluge dizajna kompletnog vizualnog identiteta, kao i svih
            odvojenih stavki.
          </p>

          <div className="btnDiv">
            <Link to={"/"}>Saznaj više</Link>
          </div>
        </Tilt>

        <Tilt className="card">
          <img src={img3} alt="" />
          <h3>Marketing strategija</h3>
          <div className="line2"></div>
          <p>
            Detaljna analiza tržišta i precizno određivanje ciljane publike na
            svim oblicima oglašavanja.
          </p>
          <div className="btnDiv">
            <Link to={"/"}>Saznaj više</Link>
          </div>
        </Tilt>

        <Tilt className="card">
          <img src={img4} alt="" />
          <h3>Prevodilac</h3>
          <div className="line2"></div>
          <p>
            Lektor i prevodilac za engleski, njemački, talijanski, ruski i
            francuski jezik.
          </p>
          <div className="btnDiv">
            <Link to={"/"}>Kontakt</Link>
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Services;
