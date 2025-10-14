import coursesContent from "../../content/courses.json";
import outcomesContent from "../../content/outcomes.json";
import opportunitiesContent from "../../content/opportunities.json";
import CoursesList from "./CourseList";
// import JobOutcomes from "./JobOutcomes";
// import Opportunities from "./Opportunities";

const CoursesPage = () => {
  return (
    <section className="space-y-8">
      {/* Intro text with red border */}
      <div className="border-r-16 pr-6 pl-18" style={{ borderColor: '#AA2C45' }}>
        <p className="text-xl md:text-2xl font-roboto leading-relaxed text-right">
          The HCI Lab opens pathways for students to explore careers in technology, design, and
          research. Through hands-on projects, mentorship, and industry connections, students
          gain the skills and experiences to turn curiosity into impact.
        </p>
      </div>

      {/* Cards */}
      <CoursesList content={coursesContent} />
      {/* <JobOutcomes content={outcomesContent} />
      <Opportunities content={opportunitiesContent} /> */}
    </section>
  );
};

export default CoursesPage;
