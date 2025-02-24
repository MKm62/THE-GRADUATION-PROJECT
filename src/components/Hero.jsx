import React from "react";
import "./Hero.css";
import HeroImg from "../assets/images/hero.png";
import arrowImg from "../assets/images/arrow.png";

const Hero = () => {
  return (
    <div className="card bg-dark text-white">
      <img
        src={HeroImg}
        height="620px"
        width="100%"
        className="card-img"
        alt="..."
      />
      <div className="card-img-overlay">
        <h6 className="card-title">Medical And Health</h6>
        <h1 className="card-text">
          A professional <br />
          and friendly care <br />
          provider.
        </h1>
        <p className="card-subtext">
          Your trusted partner in health and well-being
        </p>
        <div className="section_btn d-flex">
          <div className="dr_btn">All Doctors</div>
          <img src={arrowImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
