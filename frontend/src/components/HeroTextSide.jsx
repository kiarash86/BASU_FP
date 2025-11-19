import React from 'react';
import { ScrollParallax } from "react-just-parallax";

const HeroTextSide = ({ parallaxRef }) => {
  return (
    <ScrollParallax isAbsolutelyPositioned parallaxContainerRef={parallaxRef}>
        <p className="hidden absolute -right-[5.5rem] bottom-[15rem] w-[18rem] px-2 py-3 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
            Build strong fundamentals, unlock endless possibilities
        </p>
    </ScrollParallax>
  );
};

export default HeroTextSide;