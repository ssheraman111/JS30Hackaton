import { Container } from "@mui/material";
import React from "react";
import "./VideoAboutUs.css";
const VideoAboutUs = () => {
  return (
    <Container>
      <iframe
        className="video1"
        height="450"
        src="https://www.youtube.com/embed/G5g0H_YarIU?controls=0&amp;start=5"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <iframe
        className="video1"
        width="90%"
        height="450"
        src="https://www.youtube.com/embed/BiBwujgYNvc?controls=0&amp;start=5"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Container>
  );
};

export default VideoAboutUs;
