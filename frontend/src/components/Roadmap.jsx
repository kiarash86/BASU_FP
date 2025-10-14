import Section from "./Section";

const RoadmapEmbed = () => {
  return (
    <Section
      id="roadmap"
      className="w-full flex justify-center bg-transparent relative"
      crossess
      crossessOffset="lg:translate-y-[5.25rem]"
      customPadding="py-20"
    >
      <div className="w-full max-w-[100vw] md:max-w-[500vw] lg:max-w-[500vw] rounded-xl overflow-hidden">
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://roadmap.sh/r/embed?id=68e654b31d72874d102728f1"
            title="FP Roadmap"
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

export default RoadmapEmbed;
