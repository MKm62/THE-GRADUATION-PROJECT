import React from "react";
import "./Footer.css";
import Logo from "../assets/images/logo.png";
import footerBg from "../assets/images/bg_footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="Footer"
      id="footer"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="container">
        <div className="part1">
          <div className="d-flex gap-2">
            <img src={Logo} alt="" width="40" height="35" />
            <h4 className="text-white">HealthConnect</h4>
          </div>
          <p className="text-white mt-4">
            {" "}
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
            Deleniti nam omnis <br /> hic animi! Illo, adipisci.
          </p>
          <div className="plateform mt-4">
            <div>
              <a
                className="face-Icon"
                href="https://www.facebook.com"
                style={{ margin: "7px" }}
              >
                <FontAwesomeIcon icon={faFacebookF} color="white" />
              </a>
              <a
                className="twitter-Icon"
                href="https://www.skype.com"
                style={{ margin: "7px" }}
              >
                <FontAwesomeIcon icon={faSkype} color="white" />
              </a>
              <a
                className="face-Icon"
                href="https://www.twitter.com"
                style={{ margin: "7px" }}
              >
                <FontAwesomeIcon icon={faTwitter} color="white" />
              </a>
            </div>
          </div>
        </div>
        <div className="part2">
          <h4 className="text-white mb-4"> Departments</h4>
          <ul>
            <li className="text-white">Family Medicine</li>
            <li className="text-white">Women’s Health</li>
            <li className="text-white">Optician</li>
            <li className="text-white">Pediatrics</li>
            <li className="text-white">Dermatology</li>
          </ul>
        </div>

        <div className="part3">
          <h4 className="text-white mb-4">Quick Links</h4>
          <ul>
            <li className="text-white">Our Doctors</li>
            <li className="text-white">Appointment</li>
            <li className="text-white">Blog Post</li>
            <li className="text-white">Shop Product</li>
            <li className="text-white">Contact Us</li>
          </ul>
        </div>

        <div className="part4">
          <h4 className="text-white mb-4">Blog Post</h4>

          <p className="date ">22.05.2019</p>
          <p className="text-white">
            Excepteur sint occaecat <br />
            cupidatat non proident, <br />
            sunt in culpa.
          </p>
          <p className="date">22.05.2019</p>
          <p className="text-white">
            Excepteur sint occaecat
            <br />
            cupidatat non proident,
            <br />
            sunt in culpa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
