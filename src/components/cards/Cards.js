import React from "react";
import "./Card.scss";

function Card({
  title,
  number,
  NumberInPercent,
  description,
  img,
  customStyle = {},
  customClass = "",
}) {
  return (
    <div className="FirstCard">
      <div className="leftSide m-auto">
        <img src={img} alt={description}   />
        <p style={{ fontSize: "20px", fontWeight: "500" }}>{title}</p>
      </div>
      <div className="line"></div>
      <div className="rightSide m-auto">
        <h1>{number}</h1>
        <p>{NumberInPercent}</p>
        <p >{description}</p>
      </div>
    </div>
  );
}

export const SecondCard = ({ title, paragraph, name }) => {
  return (
    <div className="SecondCard d-flex justify-content-center align-items-center"    >
      <div>
      <h3>{title}</h3>  
      <p>{paragraph}</p>
      <p>{name}</p>
      </div>
    </div>
  );
}

export default Card;
