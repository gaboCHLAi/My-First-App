import React, { useState } from "react";
import VideoToggle from "../popup/VideoToggle";
import PopUp from "../popup/PopUp";
import "./Hero.scss";
import photo from "../../assets/images/Mobiles2 1 (1).png";
import img from "../../assets/images/Globe.png";
import country from "../../assets/images/British Virgin.png";
const Body = () => {
  const [activeColor, setActiveColor] = useState(false); // საწყისი ფერი

  const handleClick = () => {
    setActiveColor(!activeColor); // ფერის ცვლილება
  };
  const statusClass = activeColor ? "active" : "inactive";
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
        <div className="secondOne">
          <div className="title">
            <p>Endless Trading Opportunities Await </p>
            <p>Try our advanced platforms and never miss a trade!</p>
          </div>
          <div className="leftSide">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <div className="block">
                <div
                  className={`vertical-line   ${statusClass}`}
                  onClick={handleClick}
                >
                  <div
                    className={`box   ${statusClass}`}
                    onClick={handleClick}
                  ></div>
                </div>
                <div>
                  <h1
                    className={`Title   ${statusClass}`}
                    onClick={handleClick}
                  >
                    AvaTradeGo{" "}
                  </h1>
                  <p>
                    Instant and hassle-free access to trading <br />
                    with no download required{" "}
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="vertical-line">
                  <div className="box"></div>
                </div>
                <div>
                  <h1>AvaTradeGo </h1>
                  <p>
                    Instant and hassle-free access to trading <br />
                    with no download required{" "}
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="vertical-line">
                  <div className="box"></div>
                </div>
                <div>
                  <h1>AvaTradeGo </h1>
                  <p>
                    Instant and hassle-free access to trading <br />
                    with no download required{" "}
                  </p>
                </div>
              </div>
              <div className="block">
                <div className="vertical-line">
                  <div className="box"></div>
                </div>
                <div>
                  <h1>AvaTradeGo </h1>
                  <p>
                    Instant and hassle-free access to trading <br />
                    with no download required{" "}
                  </p>
                </div>
              </div>
              <div>
                <button>App Store</button>
                <button>Play Store</button>
              </div>
            </div>
            <img src={photo} alt="phoneBackground" />
          </div>
        </div>
        <div className="third">
          <div className="introduction">
            <p> Regulated Jurisdiction</p>
            <p>& Global Corporate Presence </p>

            <p>
              At AvaTrade, traders relish exceptional security and liquidity in
              their trading pursuits. We voluntarily adhere to regulation
              <br /> by nine regulatory jurisdictions, ensuring top-tier
              compliance. Furthermore, our customers have access to a diverse
              <br /> range of financial instruments, broadening opportunities
              for successful investments.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <img
              alt="globe"
              src={img}
              style={{ width: "403px", height: "403px" }}
            />
            <div
              className="sideForCountry"
              style={{
                display: " grid",
                gridTemplateColumns: "auto auto auto",
              }}
            >
              <div style={{ marginLeft: "" }}>
                <div style={{ marginBottom: "50px" }}>
                  <div className="sideBySide">
                    <img src={country} alt="country flag" />{" "}
                    <div>
                      <p className="CountryName">British Virgin </p>{" "}
                      <p>
                        {" "}
                        he Financial Futures Association of <br />{" "}
                        JapanFinancial Services Agency Japan{" "}
                      </p>{" "}
                    </div>
                  </div>
                  <div className="sideBySide">
                    <img src={country} alt="country flag" />{" "}
                    <div>
                      <p className="CountryName">British Virgin </p>{" "}
                      <p>
                        {" "}
                        he Financial Futures Association of <br />{" "}
                        JapanFinancial Services Agency Japan{" "}
                      </p>{" "}
                    </div>
                  </div>
                  <div className="sideBySide">
                    <img src={country} alt="country flag" />{" "}
                    <div>
                      <p className="CountryName">British Virgin </p>{" "}
                      <p>
                        {" "}
                        he Financial Futures Association of <br />{" "}
                        JapanFinancial Services Agency Japan{" "}
                      </p>{" "}
                    </div>
                  </div>
                  <div className="sideBySide">
                    <img src={country} alt="country flag" />{" "}
                    <div>
                      <p className="CountryName">British Virgin </p>{" "}
                      <p>
                        {" "}
                        he Financial Futures Association of <br />{" "}
                        JapanFinancial Services Agency Japan{" "}
                      </p>{" "}
                    </div>
                  </div>
                  <div className="sideBySide">
                    <img src={country} alt="country flag" />{" "}
                    <div>
                      <p className="CountryName">British Virgin </p>{" "}
                      <p>
                        {" "}
                        he Financial Futures Association of <br />{" "}
                        JapanFinancial Services Agency Japan{" "}
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <PopUp buttonText="Sign Up Today" />
              </div>
              <div>
                <div className="sideBySide">
                  <img src={country} alt="country flag" />{" "}
                  <div>
                    <p className="CountryName">British Virgin </p>{" "}
                    <p>
                      {" "}
                      he Financial Futures Association of <br /> JapanFinancial
                      Services Agency Japan{" "}
                    </p>{" "}
                  </div>
                </div>
                <div className="sideBySide">
                  <img src={country} alt="country flag" />{" "}
                  <div>
                    <p className="CountryName">British Virgin </p>{" "}
                    <p>
                      {" "}
                      he Financial Futures Association of <br /> JapanFinancial
                      Services Agency Japan{" "}
                    </p>{" "}
                  </div>
                </div>
                <div className="sideBySide">
                  <img src={country} alt="country flag" />{" "}
                  <div>
                    <p className="CountryName">British Virgin </p>{" "}
                    <p>
                      {" "}
                      he Financial Futures Association of <br /> JapanFinancial
                      Services Agency Japan{" "}
                    </p>{" "}
                  </div>
                </div>
                <div className="sideBySide">
                  <img src={country} alt="country flag" />{" "}
                  <div>
                    <p className="CountryName">British Virgin </p>{" "}
                    <p>
                      {" "}
                      he Financial Futures Association of <br /> JapanFinancial
                      Services Agency Japan{" "}
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
