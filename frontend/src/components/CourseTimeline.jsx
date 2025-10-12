import Section from "./Section";
import timelineElements from "./timelineElements";
import { BottomLine } from "./design/Hero";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function CourseTimeline() {
  const iconColors = {
    work: "#8FDC97",
    school: "#FFA400",
    project: "#92AFD7",
  };

  return (
    <Section id="timeline">
      <h2 className="h2 text-center mb-12">Timeline</h2>
      <BottomLine />

      <VerticalTimeline>
        {timelineElements.map((element) => {
          let color = iconColors[element.icon] || "#06D6A0"; 
          let showButton = element.buttonText && element.buttonText.trim() !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="text-gray-100 mt-6 md:mt-0"
              iconStyle={{ background: color, color: "#fff" }}
              icon={<img className="relative px-2 py-2" width="60px" height="auto" src={element.iconSrc} alt="" />}
              contentStyle={{
                background: "#1B1B2E",
                color: "#fff",
                borderRadius: "1rem",
                boxShadow:
                  "0 0.25em 0.5em 0 rgba(0,0,0,0.25), 0 0.4em 1.25em 0 rgba(0,0,0,0.15)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #1B1B2E" }}
            >
              <h3 className="text-xl font-semibold pt-1">{element.title}</h3>
              <h5 className="text-sm text-n-3">{element.location}</h5>
              <p className="text-base mt-4 mb-6 py-3">{element.description}</p>

              {showButton && (
                <a
                  className={`px-4 py-2 rounded-md text-white text-sm font-semibold`}
                  style={{ backgroundColor: color }}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Section>
  );
}

export default CourseTimeline;
