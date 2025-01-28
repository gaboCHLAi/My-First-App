import React, { useState, useRef } from 'react';
import './VideoToggle.scss';
import photo from "../../assets/images/Play_button.png";

const VideoToggle = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false); // ვიდეოს ჩანახატი
  const videoRef = useRef(null); // ვიდეო ელემენტის რეფერენცია

  const toggleVideo = () => {
    setIsVideoVisible(!isVideoVisible); // ვიდეოს შეცვლა
  };

  return (
    <div className="video-toggle" onClick={toggleVideo} >
      <img src={photo} alt="Play Button" />
      
      {/* ვიდეო მხოლოდ მაშინ გამოჩნდება, როცა isVideoVisible მართალია */}
      {isVideoVisible && (
        <div className="video-container d-flex my-sm-2">
          {/* YouTube ვიდეო */}
          <iframe
            ref={videoRef}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jyXcd_sGd8Q?autoplay=1" // შეცვალეთ VIDEO_ID იმ ვიდეოს ID-ით
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="YouTube Video"
          />
        </div>
      )}
    </div>
  );
};

export default VideoToggle;

