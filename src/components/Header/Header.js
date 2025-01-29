import React from "react";
import data from "../../data/data.json";
import photo from "../../assets/images/logo.png";
import "./Header.scss";
import PopUp from "../popup/PopUp";
import Swiper from "../sliders/Swiper";
import "../../styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import photoOne from "../../assets/images/Icon.png";
import photoTwo from "../../assets/images/Group 3983.png";
import photoThree from "../../assets/images/Clip path group.png";
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
          <PopUp buttonText="Sign Up Today" />
        </div>
        <div className="full-width-banner  firstSection">
          <div className="container  text-sm-start text-center   ">
            <div className="introduction row">
              <p className="col-sm-6 ">
                Elevate your Trading
              </p>
              <p  >
              With MetaTrader
              </p>
              <p >
                Take your trading to new heights with MetaTrader's
                <br /> user-friendly interface, advanced algorithm automation,
                <br />
                and personalized trading features, all while taking
                <br /> advantage of AvaTrade's exceptional conditions
              </p>
              <div className="text-sm-start text-center ">
                <PopUp buttonText="Trade Now" />
              </div>
            </div>
          </div>
          <div className="pt-5    ">
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
