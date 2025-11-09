import CommunityResearch from "../components/CommunityResearch";
import LearningOutcomes from "../components/LearningOutcomes";
import LabHistory from "../components/LabHistory";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { CommunityResearchContent, LearningOutcomesContent } from "../../types";

interface AboutContentViewProps {
  communityData: CommunityResearchContent;
  learningData: LearningOutcomesContent;
}

const AboutContentView = ({ communityData, learningData }: AboutContentViewProps) => {
  const communityRef = useRef(null);
  const learningRef = useRef(null);
  const historyRef = useRef(null);

  const isCommunityInView = useInView(communityRef, { once: true });
  const isLearningInView = useInView(learningRef, { once: true });
  const isHistoryInView = useInView(historyRef, { once: true });

  return (
    <div className="space-y-12 pb-16">
      <motion.div
        ref={communityRef}
        initial={{ opacity: 0, y: 30}}
        animate={isCommunityInView ? { opacity: 1, y: 0 } : {opacity: 0, y: 30}}
        transition={{ duration: 0.8 }}
      >
        <CommunityResearch content={communityData} />
      </motion.div>

      <motion.div
        ref={learningRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isLearningInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <LearningOutcomes content={learningData} />
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
