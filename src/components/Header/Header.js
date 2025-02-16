import React from "react";
import data from "../../data/data.json";
import photo from "../../assets/images/logo.png";
import "./Header.scss";
import Register from "../popup/Register";
import Swiper from "../sliders/Swiper";
import "../../styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../popup/login";

import { useState } from "react";
const Header = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <header>
      <div className="container-fluid  Warning  " onClick={toggleText}>
        <p className={`text text-truncate ${isExpanded ? "expanded" : ""}`}>
          {data.mainTitle.title}
        </p>
      </div>
      <div>
        <div className="container head">
          <img src={photo} alt="Logo" />
          <div className="d-flex gap-2">
            <Register buttonText="Sign Up Today" />
            <Login />
          </div>
        </div>
        <div className="full-width-banner  firstSection">
          <div className="container  text-sm-start text-center   ">
            <div className="introduction row">
              <p className="col-sm-6 ">Elevate your Trading</p>
              <p>With MetaTrader</p>
              <p>
                Take your trading to new heights with MetaTrader's
                <br /> user-friendly interface, advanced algorithm automation,
                <br />
                and personalized trading features, all while taking
                <br /> advantage of AvaTrade's exceptional conditions
              </p>
              <div className="text-sm-start text-center ">
                <Register buttonText="Trade Now" />
              </div>
            </div>
          </div>
          <div className="pt-5  col-12 col-md-10  ">
            <Swiper
              customClass="first-slider"
              cards={data.firstSliderCards}
              className="first-slider-card position-absolute top-50 start-50"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
