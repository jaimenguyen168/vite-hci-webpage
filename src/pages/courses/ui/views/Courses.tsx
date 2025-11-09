import coursesContent from "../../content/courses.json";
import outcomesContent from "../../content/outcomes.json";
import opportunitiesContent from "../../content/opportunities.json";
import CourseList from "@/pages/courses/ui/components/CourseList.tsx";
import JobOutcomes from "@/pages/courses/ui/components/JobOutcomes.tsx";
import Opportunities from "@/pages/courses/ui/components/Opportunities.tsx";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CoursesPage = () => {

  const introRef = useRef(null);
  const coursesRef = useRef(null);
  const outcomesRef = useRef(null);
  const centerRef = useRef(null);
  const opportunitiesRef = useRef(null);

  const isIntroInView = useInView(introRef, { once: true });
  const isCoursesInView = useInView(coursesRef, { once: true });
  const isOutcomesInView = useInView(outcomesRef, { once: true });
  const isCenterInView = useInView(centerRef, { once: true });
  const isOpportunitiesInView = useInView(opportunitiesRef, { once: true });

  return (
    <div className="space-y-12 pb-16 scrollbar-hide">
      <motion.div
        ref={introRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        {/* Intro text with red border */}
        <div className="border-r-8 pl-10 pr-6" style={{ borderColor: "#AA2C45" }}>
          <h2 className="text-base md:text-lg xl:text-2xl leading-relaxed text-right">
            The HCI Lab opens pathways for students to explore careers in
            technology, design, and research. Through hands-on projects,
          mentorship, and industry connections, students gain the skills and
          experiences to turn curiosity into impact.
          </h2>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        ref={coursesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isCoursesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <CourseList content={coursesContent} />
      </motion.div>

      <motion.div
        ref={outcomesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isOutcomesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <JobOutcomes content={outcomesContent} />
      </motion.div>

      {/* Center text with red border */}
      <motion.div
        ref={centerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isCenterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="border-l-8 pr-10 pl-6"
          style={{ borderColor: "#AA2C45" }}
        >
          <h2 className="text-base md:text-lg xl:text-2xl leading-relaxed text-left">
            Our lab strives to advance the tech, design, and research communities
            here in Philadelphia. While we support many students directly, we're
            often at or nearing capacity for mentorship.
          </h2>
        </div>
      </motion.div>

      <motion.div
        ref={opportunitiesRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isOpportunitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <Opportunities content={opportunitiesContent} />
      </motion.div>
    </div>
  );
};

export default CoursesPage;
