import React, { useState } from "react";
import VideoToggle from "../popup/VideoToggle";
import PopUp from "../popup/Register";
import "./Hero.scss";
import photo from "../../assets/images/Mobiles2 1 (1).png";

const Body = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="hero">
      <div className="main-container ">
        <div className="firstOne container-fluid min-vh-100 h-auto d-flex justify-content-between  align-items-center  ">
          <div className="  container ">
            <div className="row d-flex  justify-content-between  align-items-center ">
              <div className="introduction col-sm-5 ">
                <p>
                  Where the
                  <br /> World Does Markets
                </p>
                <p>
                  Take your trading to new heights with MetaTrader's <br />
                  user-friendly interface, advanced algorithm automation, <br />
                  and personalized trading features, all while taking <br />
                  advantage of AvaTrade's exceptional conditions
                </p>
                <PopUp buttonText="Trade Now" />
              </div>
              <div className="col-sm-5 d-flex justify-content-center  my-5  my-lg-0 ">
                <VideoToggle />
              </div>
            </div>
          </div>
        </div>
        <div className="secondOne ">
          <div className="title  p-3 text-center">
            <p>Endless Trading Opportunities Await </p>
            <p>Try our advanced platforms and never miss a trade!</p>
          </div>
          <div className="container">
            <div className="leftSide row   flex-column-reverse flex-md-row ">
              <div className="col-12  col-md-6 d-flex justify-content-center d-md-block    ">
                <div className="d-none d-sm-block">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className={`block ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      <div
                        className={`vertical-line ${
                          index === activeIndex ? "active" : ""
                        }`}
                      >
                        <div
                          className={`box ${
                            index === activeIndex ? "active" : ""
                          }`}
                        ></div>
                      </div>
                      <div>
                        <h1
                          className={`title ${
                            index === activeIndex ? "active" : ""
                          }`}
                        >
                          AvaTradeGo
                        </h1>
                        <p>
                          Instant and hassle-free access to trading <br />
                          with no download required.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-center justify-content-md-start flex-row flex-nowrap pb-5">
                  <button>App Store</button>
                  <button>Play Store</button>
                </div>
              </div>
              <div className="col-12 col-md-6 m-auto  p-0 ">
                <img src={photo} alt="phoneBackground" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
