import React from "react";
import styled from "styled-components";
import scaryvid1 from "../assets/stockfootage0395.mov";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;
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

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  background: black;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

const Banner = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Helvetica";

  background-color: black;

  color: blac;

  /* position: absolute; */
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1.3;

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  span {
    display: block;

    background: #54bc3e;
    background: -moz-linear-gradient(top, #ffff00 0%, #ffff8f 100%);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #ffff00),
      color-stop(100%, #ffff8f)
    );
    background: -webkit-linear-gradient(top, #ffff00 0%, #ffff8f 100%);
    background: -o-linear-gradient(top, #ffff00 0%, #ffff8f 100%);
    background: -ms-linear-gradient(top, #ffff00 0%, #ffff8f 100%);
    background: linear-gradient(to bottom, #ffff00 0%, #ffff8f 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff00', endColorstr='#ffff8f',GradientType=0 );

    padding: 1rem 2rem;
  }
`;

const Marquee = () => {
  return (
    <Section>
      <Container id="direction">
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#direction"
          >
            CAUTION! CAUTION! CAUTION! CAUTION! CAUTION! CAUTION! CAUTION!
            CAUTION!
          </span>
        </Banner>
        <Banner
          data-scroll
          data-scroll-speed="-2"
          data-scroll-target="#direction"
        >
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
          >
            Keep out! Keep out! Keep out! Keep out! Keep out! Keep out! Keep
            out! Keep out! Keep out!
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            CAUTION! CAUTION! CAUTION! CAUTION! CAUTION! CAUTION! CAUTION!
            CAUTION!
          </span>
        </Banner>
        <Banner>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
          >
            CAUTION! Keep out! CAUTION! Keep out! CAUTION! Keep out! CAUTION!
            Keep out!
          </span>
        </Banner>
        <Banner
          data-scroll
          data-scroll-speed="6"
          data-scroll-target="#direction"
        >
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            CAUTION! CAUTION! CAUTION! CAUTION! Keep out! CAUTION! CAUTION!
            CAUTION!
          </span>
        </Banner>
      </Container>
    </Section>
  );
};

export default Marquee;
