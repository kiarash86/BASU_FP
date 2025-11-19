import Section from "./Section";
import timelineElements from "../constants/timelineElements";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineItem from "./TimelineItem"; 

function CourseTimeline() {
  return (
    <Section id="timeline"  crossesOffset="lg:translate-y-[5.25rem]" customPadding="py-20">
      <h2 className="h2 text-center mb-12">Timeline</h2>

      <VerticalTimeline>
        {timelineElements.map((element) => (
          <TimelineItem key={element.id} element={element} />
        ))}
      </VerticalTimeline>
    </Section>
  );
}

export default CourseTimeline;