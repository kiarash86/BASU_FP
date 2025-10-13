import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header"
import Hero from "./components/Hero" 
import Benefits from "./components/Benefits";
import CourseTimeline from "./components/CourseTimeline" 
import RoadmapEmbed from "./components/Roadmap"

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <CourseTimeline />
        <RoadmapEmbed />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App
