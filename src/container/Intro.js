import React, { useRef, useState } from "react";
import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { meal } from "../constants/index";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <Introduction>
      <Video
        src={meal}
        type="video/mp4"
        ref={vidRef}
        loop
        controls={false}
        muted
      />

      <Overlay>
        <OverlayCircle onClick={handleVideo}>
          {playVideo ? (
            <BsFillPauseFill color="#fff" fontSize="30px" />
          ) : (
            <BsFillPlayFill color="#fff" fontSize="30px" />
          )}
        </OverlayCircle>
      </Overlay>
    </Introduction>
  );
};

const Introduction = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: var(--color-black);
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid green;
  cursor: pointer;
`;

export default Intro;
