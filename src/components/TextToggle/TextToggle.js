import React, { useState } from "react";
import data from "../../data/data.json";
import './TextToggle.scss';

const TextToggle = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div >
      <p className={`text ${isExpanded ? "expanded" : ""}`}>
        {data.mainTitle.title}
      </p>
      <button className="toggle-button" onClick={toggleText}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default TextToggle;
