import React from "react";
import Swiper, { SecondSlider } from "../../components/sliders/Swiper";
import "./Footer.scss";
import data from "../../data/data.json";
import PopUp from "../../components/popup/PopUp";
import { Grid } from "swiper";

const Footer = () => {
  return (
    <footer>
      <div className="mainContainer">
        <div className="poo">
          <p>We are Only as Good </p>
          <p>as Our Customers Say We are</p>
          <p>
            AvaTrade is regulated across 9 jurisdictions, with a wide global
            corporate presence.
          </p>
        </div>
        <SecondSlider cards={data.secondSliderCards} />
      </div>
      <div
        className="LastContainer"
        style={{
          background: "linear-gradient(to right, #4C61FF,rgb(37, 54, 71))",
          display:"grid", 
          placeItems:"center",
          
        }}
      >
        <p
          style={{
            paddingBottom: "50px",
            paddingTop: "40px",
            textAlign: "center",
            fontSize: "40px",
            color: "#ffffff",
          }}
        >
          More Than Just a Broker
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 305px 307px",
            rowGap: "30px",
            columnGap: "50px",
            color: "#ffffff",
            paddingBottom:"50px"
          }}
        >
          <div>
            <p>Quick Start</p>
            <p>
              Start trading powerful assets like S&P
              <br /> 500, BTC, Gold, and more in under 30
              <br /> minutes with speedy onboarding.
            </p>
          </div>
          <div>
            <p>Quick Start</p>
            <p>
              Start trading powerful assets like S&P
              <br /> 500, BTC, Gold, and more in under 30
              <br /> minutes with speedy onboarding.
            </p>
          </div>
          <div>
            <p>Quick Start</p>
            <p>
              Start trading powerful assets like S&P
              <br /> 500, BTC, Gold, and more in under 30
              <br /> minutes with speedy onboarding.
            </p>
          </div>
          <div>
            <p>Quick Start</p>
            <p>
              Start trading powerful assets like S&P
              <br /> 500, BTC, Gold, and more in under 30
              <br /> minutes with speedy onboarding.
            </p>
          </div>
          <div>
            <p>Quick Start</p>
            <p>
              Start trading powerful assets like S&P
              <br /> 500, BTC, Gold, and more in under 30
              <br /> minutes with speedy onboarding.
            </p>
          </div>
          <div>
            <p>Quick Start</p>
            <p>
              Start trading powerful assets like S&P
              <br /> 500, BTC, Gold, and more in under 30
              <br /> minutes with speedy onboarding.
            </p>
          </div>
        </div>
        <PopUp buttonText="Trade Futures Now"/>
      </div>
    </footer>
  );
};

export default Footer;
