import { Col } from "react-bootstrap";
import React, { useRef } from "react";

export const ProjectCard = ({ title, description, imgUrl, video }) => {
  const videoRef = useRef(null);

  const handleMouseHover = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to start
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          onMouseOver={handleMouseHover}
          // onMouseLeave={handleMouseLeave}
          style={{ border: "2px solid #f9f9f9" }}
          muted // Mute to allow autoplay without sound issues
        >
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <span>{description}</span>
      </div>
    </Col>
  );
};
