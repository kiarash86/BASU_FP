import Section from "./Section";
import Heading from "./Heading";
import RoadmapChild from "./RoadmapChild"; 
              {/*mother of roadmap show*/}


const Roadmap = () => {
  return (
    <Section
      id="roadmap"
      className="w-full flex justify-center bg-transparent relative"
      
      crossesOffset="lg:translate-y-[5.25rem]"
      customPadding="py-20"
    >
      <Heading 
        tag="Ready to get started" 
        className="text-center md:max-w-md lg:max-w-2xl" 
        title="A structured path to guide your learning journey" 
      />
      
      <RoadmapChild /> 

    </Section>
  );
};

export default Roadmap;