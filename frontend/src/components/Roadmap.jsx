import Section from "./Section";
import Heading from "./Heading"
// import Tagline from "./Tagline";

const RoadmapEmbed = () => {
  return (
    <Section
      id="roadmap"
      className="w-full flex justify-center bg-transparent relative"
      crossess
      crossessOffset="lg:translate-y-[5.25rem]"
      customPadding="py-20"
    >
      <Heading tag="Ready to get started" className="md:max-w-md lg:max-w-2xl" title="A structured path to guide your learning journey" />
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12 rounded-xl overflow-hidden">
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://roadmap.sh/r/embed?id=68e654b31d72874d102728f1"
            title="FP Roadmap"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default RoadmapEmbed;
