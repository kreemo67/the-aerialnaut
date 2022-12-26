import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/aerialnaut-practice.MOV";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: -50px;
  left: 50;
  right: 0;
  bottom: 0;
  z-index: 5;
  padding: 600px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: "Epilogue";
    font-size: ${(props) => props.theme.fontBig};
    position: fixed;
    left: 40px;
    bottom: 93.5%;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: calc(5rem + 8vw);
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Epilogue";
    font-weight: 500;
    align-items: baseline;
    margin-right: 20%;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 10 auto;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.5,
    },
  },
};
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 10%;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;
const TitlePos = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 2rem;
  top: 10;
  left: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            The <br /> Aerialnaut
          </motion.h1>
        </div>
        <Text>
          <motion.h2
            style={{ alignSelf: "flex-start" }}
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="2"
          >
            Welcome to Aerialnaut Entertainment!
            <br />
            <br />
            My name is Bailey. I'm a multitalented LSU graduate with a knack for
            innovation in aerial performance and scare entertainment.
          </motion.h2>
        </Text>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
