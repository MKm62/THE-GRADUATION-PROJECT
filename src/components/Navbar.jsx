import React from "react";
import "./Navbar.css";
import Logo from "../assets/images/logo.png";
import bgImg from "../assets/images/vav_bg.png";
import HelpLogo from "../assets/images/Help.png";
import locationLogo from "../assets/images/location.png";
import mailLogo from "../assets/images/mail.png";
import phoneLogo from "../assets/images/phone.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="info d-flex mt-1">
        <div className="loaction_sec d-flex gap-2">
          <img src={locationLogo} width="15px" height="15px" alt="" />
          <p> 9470 Riverview, Zion 60099</p>
        </div>
        <div className="mail_sec d-flex gap-2">
          <img src={mailLogo} width="15px" height="15px" alt="" />
          <p>Healthcon@gmail.com</p>
        </div>

        <div className="phone_sec d-flex gap-2">
          <img src={phoneLogo} width="15px" height="15px" alt="" />
          <p>+88 564 867 4687</p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#">
            <img
              src={Logo}
              alt=""
              width="40"
              height="35"
              className="d-inline-block align-text-top"
            />
            <span className="text-white ms-2">HealthConnect</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 ">
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/#about" className="nav-link text-white">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#services">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="/#professionalCareProvider"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/#footer">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="buttonSection"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className=" d-flex gap-4 mx-5">
            <button type="button" className="btn  btn-primary">
              Login
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                navigate("/signup1");
              }}
            >
              Sign up
            </button>
          </div>
          <img width="40" height="25" className="me-3" src={HelpLogo} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
