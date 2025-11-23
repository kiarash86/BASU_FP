import { heroIcons } from "../constants"; 
import { ScrollParallax } from "react-just-parallax";

              {/*animation of moving balls in the background*/}

const HeroFloatingShapes = ({ parallaxRef }) => {
  return (
    <ScrollParallax isAbsolutelyPositioned parallaxContainerRef={parallaxRef}>
      <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
        {heroIcons.map((icon, index) => (
          <li className="p-5" key={index}>
            <img src={icon} width={24} height={25} alt={`icon-${index}`} />
          </li>
        ))}
      </ul>
    </ScrollParallax>
  );
};

export default HeroFloatingShapes;