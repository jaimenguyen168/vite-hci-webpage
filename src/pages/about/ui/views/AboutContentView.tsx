import CommunityResearch from "../components/CommunityResearch";
import LearningOutcomes from "../components/LearningOutcomes";
import Alumni from "../components/WhereAlumniLand";
import LabHistory from "../components/LabHistory";
import communityResearchContent from "../../content/communityResearch.json";
import learningOutcomesContent from "../../content/learningOutcomes.json";
import alumniContent from "../../content/alumni.json";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutContentView = () => {
  const communityRef = useRef(null);
  const learningRef = useRef(null);
  const alumniRef = useRef(null);
  const historyRef = useRef(null);

  const isCommunityInView = useInView(communityRef, { once: true });
  const isLearningInView = useInView(learningRef, { once: true });
  const isAlumniInView = useInView(alumniRef, { once: true });
  const isHistoryInView = useInView(historyRef, { once: true });

  return (
    <div className="space-y-12 pb-16">
      <motion.div
        ref={communityRef}
        initial={{ opacity: 0, y: 30}}
        animate={isCommunityInView ? { opacity: 1, y: 0 } : {opacity: 0, y: 30}}
        transition={{ duration: 0.8 }}
      >
        <CommunityResearch content={communityResearchContent} />
      </motion.div>

      <motion.div
        ref={learningRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isLearningInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <LearningOutcomes content={learningOutcomesContent} />
      </motion.div>

      <motion.div
        ref={alumniRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isAlumniInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <Alumni content={alumniContent} />
      </motion.div>

      <motion.div
        ref={historyRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHistoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <LabHistory />
      </motion.div>
    </div>
  );
};
export default AboutContentView;
