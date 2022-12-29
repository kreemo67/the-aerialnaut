import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Gradient } from "react-gradient";

import silkscircus1 from "../assets/assets-aerialnaut/silks-circus1.jpg";
import silkscircus5 from "../assets/assets-aerialnaut/silks-circus5.JPG.jpg";
import roseroom from "../assets/assets-aerialnaut/rose-room-chair.jpeg";
import IMG_2737 from "../assets/assets-aerialnaut/IMG_2737.png";
import IMG_2738 from "../assets/assets-aerialnaut/IMG_2738.png";
import IMG_2739 from "../assets/assets-aerialnaut/IMG_2739.png";
import IMG_2740 from "../assets/assets-aerialnaut/IMG_2740.png";
import IMG_2741 from "../assets/assets-aerialnaut/IMG_2741.png";
import hoop3 from "../assets/assets-aerialnaut/hoop3.png";
import hoop1 from "../assets/assets-aerialnaut/hoop1.png";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: linear-gradient(45deg, #d28db7, #c2a522);

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Epilogue";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 4px 4px 4px ${(props) => props.theme.body};

  position: absolute;
  top: 0.5rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};

  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="600" height="800" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        Aerial and Cirque du soleil
      </Title>
      <Left>
        <p>
          Performed 50+ sets and theatrical shows for several reputable
          companies: <br /> <br />
          Louisiana State University, Parisian Cirque O Champs, 13th Gate
          Haunted House, DFNTLY Entertainment, Fly Unfeathered Events, Aqua Acro
          Entertainment, Cerceaux Sisters and Rose Room ATX.
          <br /> <br />
          Assisted with grant research, created the company budget, opened
          communications with theatrical companies and coordinated for the
          upcoming audition workshops.
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={roseroom} title="Rose Room" />
        <Product img={IMG_2737} title="gradientpic1" />
        <Product img={silkscircus1} title="silks1" />
        <Product img={silkscircus5} title="silks2" />
        <Product img={IMG_2737} title="gradientpic1" />
        <Product img={IMG_2738} title="gradientpic2" />
        <Product img={IMG_2739} title="gradientpic3" />
        <Product img={IMG_2740} title="gradientpic4" />
        <Product img={IMG_2741} title="gradientpic5" />
        <Product img={hoop3} title="hoop3" />
      </Right>
    </Section>
  );
};

export default Shop;
