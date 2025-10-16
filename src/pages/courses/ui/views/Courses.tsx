import coursesContent from "../../content/courses.json";
import outcomesContent from "../../content/outcomes.json";
import opportunitiesContent from "../../content/opportunities.json";
import CoursesList from "./CourseList";
import JobOutcomes from "./JobOutcomes";
import Opportunities from "./Opportunities";

const CoursesPage = () => {
  return (
    <section className="space-y-12 pb-30">
      {/* Intro text with red border */}
      <div className="border-r-16 pr-6" style={{ borderColor: '#AA2C45' }}>
        <h2 className="text-xl md:text-[30px] font-outfit leading-relaxed text-right">
          The HCI Lab opens pathways for students to explore careers in technology, design, and
          research. Through hands-on projects, mentorship, and industry connections, students
          gain the skills and experiences to turn curiosity into impact.
        </h2>
      </div>

      {/* Cards */}
      <CoursesList content={coursesContent} />

      <JobOutcomes content={outcomesContent} />

      {/* Center text with red border */}
      <div className="border-l-16 pr-10 pl-6" style={{ borderColor: '#AA2C45' }}>
        <h2 className="text-xl md:text-[30px] font-outfit leading-relaxed text-left">
          Our lab strives to advance the tech, design, and research communities here in Philadelphia.
          While we support many students directly, we're often at or nearing capacity for mentorship.
        </h2>
      </div>

      <Opportunities content={opportunitiesContent} />
    </section>
  );
};

export default CoursesPage;
