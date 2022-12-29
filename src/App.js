import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";

import Loader from "./components/Loader";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import About from "./sections/About";
import Footer from "./sections/Footer";

import Home from "./sections/Home";
import Caution from "./sections/Caution";
import Haunt from "./sections/Haunt";
import Aerial from "./sections/Aerial";
import GlobalStyles from "./styles/GlobalStyles";
import { haunt, normal } from "./styles/Themes";
import { Gradient } from "react-gradient";

function App() {
  // useLocoScroll();
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);
  const gradients = [
    ["#bd19d6", "#ea7d10"],
    ["#ff2121", "#25c668"],
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={normal}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to
              //  watch properties like `router.asPath` (you may want to add more criterias
              //  if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}

              <Home key="home" />

              <About key="about" />

              <Aerial key="Aerial" />
            </AnimatePresence>
            <ThemeProvider theme={haunt}>
              <Caution key="Caution" />
              <Haunt key="new arrival" />
            </ThemeProvider>

            <Footer key="Footer" />
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
