    /*what is happening at main(home) page*/


import Header from "../components/Header";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import CourseTimeline from "../components/CourseTimeline";
import RoadmapEmbed from "../components/Roadmap";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";


const LandingPage = () => {
  return (
    <>
        {/*everything in this page coming from components and here we just use them?*/}

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <CourseTimeline />
        <RoadmapEmbed />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default LandingPage;
