import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import hauntrat1 from "../assets/assets-aerialnaut/hauntrat1.JPG.jpg";
import img2 from "../assets/assets-aerialnaut/chainsaw-haunt.JPG.jpg";
import img3 from "../assets/assets-aerialnaut/haunt-selfie1.JPG.jpg";
import img4 from "../assets/assets-aerialnaut/haunt-makeup.JPG.jpg";

const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  background-color: grey;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw grey;
  border: 3px solid black;

  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw grey

    height: 80vh;
  }
  @media (max-width: 48em) {
    width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
    width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  background-color: grey;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 3px 3px 3px black;

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  #scare {
    color: red;
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ img, name }) => {
  return (
    <Item>
      <img width="400" height="600" src={img} alt={name} />
      <h2>{name}</h2>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-70%",
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App",
            scrub: 1,
            // markers: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="fixed-target" className="new-arrival">
      <Overlay />

      <Title
        data-scroll
        data-scroll-speed="-1"
        data-scroll-direction="horizontal"
      >
        <span id="scare">
          Haunt <br /> Experience
        </span>
      </Title>

      <Container ref={ScrollingRef}>
        <Photos img={hauntrat1} name="Haunt" />
        <Photos img={img2} name="Haunt" />
        <Photos img={img3} name="Haunt" />
        <Photos img={img4} name="Haunt" />
      </Container>

      <Text data-scroll data-scroll-speed="-.5">
        Performed in 8+ different scenes as a cannibalistic hillbilly handywoman
        [3 yrs].
        <br />
        <br />
        Performed a 3-min immersive scene as the lead asylum patient [2 yrs].
        <br />
        <br />
        Performed a 2-min high energy scene as a cartoony squawking bird for the
        hayride [1 yr].
        <br /> <br />
        Served as a fill in for many actors that got hurt/sick on a nightly
        basis.
        <br />
        <br />
        Creator and logistics lead for 70+ events total with 10 - 120 people in
        attendance.
        <br />
        <br />
        Created characters, storylines and connections for ALL speaking and
        non-speaking roles as a team.
        <br />
        Collaborated in the overall development of the Asylum and Hayride from
        inception to opening.
        <br />
      </Text>
    </Section>
  );
};

export default NewArrival;
