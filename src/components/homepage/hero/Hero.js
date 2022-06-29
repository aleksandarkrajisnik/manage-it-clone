import React from "react";
import "./Hero.scss";
import Logo from "../../../assets/logoWhite.png";

import slider2 from "../../../assets/slider2.png";
import slider3 from "../../../assets/slider3.png";
import slider4 from "../../../assets/slider4.png";
import slider5 from "../../../assets/slider5.png";
import slider6 from "../../../assets/slider6.png";
import slider7 from "../../../assets/slider7.png";

import Tilt from "react-parallax-tilt";

import Slider from "react-slick";
function Hero() {
  const sliderArr = [slider2, slider3, slider4, slider5, slider6, slider7];
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    lazyLoad: true,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="hero">
      <div className="hero__title">
        <img
          data-aos-duration="3000"
          data-aos-delay="500"
          data-Aos="zoom-in"
          src={Logo}
          alt=""
          className="hero__logo"
        />
        <div className="hero__text">
          <h1 data-aos-duration="2000" data-aos-delay="" data-Aos="fade">
            Vizija bez strategije ostaje iluzija!
          </h1>
          <p data-aos-duration="2000" data-aos-delay="" data-Aos="fade">
            Marketinški rezultati se ne događaju slučajno. Kreiranje strategije
            osigurava da ciljate prave ljude s relevantnim sadržajem koji im se
            sviđa.
          </p>
        </div>
      </div>

      <h3 data-aos-duration="2000" data-aos="slide-right">
        Naši partneri
      </h3>

      <Slider {...settings} className="slider">
        {sliderArr.map((item, i) => (
          <div key={i} className="imgHolder">
            <img src={item} alt={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Hero;
