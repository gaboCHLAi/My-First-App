import React from "react";
import Swiper, { SecondSlider } from "../../components/sliders/Swiper";
import "./Footer.scss";
import data from "../../data/data.json";
import PopUp from "../../components/popup/PopUp";
import { Grid } from "swiper";
import cup from "../../assets/images/Awards_Icon.png";
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
        }}
      >
        <div className=" container d-block d-md-none d-flex flex-column align-items-center">
          <p
            style={{
              paddingBottom: "20px",
              paddingTop: "40px",
              textAlign: "center",
              fontSize: "40px",
              color: "#ffffff",
            }}
          >
            Trade With A Dedicated Account Manager
          </p>
          <p
            style={{
              paddingBottom: "50px",
              paddingTop: "10px",
              textAlign: "center",
              fontSize: "18px",
              color: "#ffffff",
            }}
          >
            We offer 1-on-1 training sessions* with an account manager who
            guides you every step of the way and equips you with:
          </p>
          <div className="d-flex  gap-2 ">
            <img src={cup} alt="" />
            <p
              style={{
                paddingBottom: "50px",
                paddingTop: "10px",
                textAlign: "center",
                fontSize: "18px",
                color: "#ffffff",
                
              }}
            >
              Multiple Award - Winning Broker
            </p>
          </div>
          <p
            style={{
              paddingBottom: "50px",
              paddingTop: "10px",
              textAlign: "center",
              fontSize: "18px",
              color: "#ffffff",
            }}
          >
            Whether on a business trip, at the office or on a holiday, our.
          </p>
        </div>
        <div className="container  d-none d-md-block">
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
            className="row  "
            style={{
              color: "#ffffff",
              paddingBottom: "50px",
            }}
          >
            <div className="  col-4 d-flex flex-column  align-items-center ">
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
            <div className="col-4 d-flex flex-column align-items-center">
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
            <div className=" col-4 d-flex flex-column  align-items-center">
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
          </div>
        </div>
          <div className="text-center  ">
            <PopUp buttonText="Trade Futures Now" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;
