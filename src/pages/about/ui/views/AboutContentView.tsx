import CommunityResearch from "../components/CommunityResearch";
import LearningOutcomes from "../components/LearningOutcomes";
import LabHappenings from "../components/LabHappenings";
import StudioTime from "../components/StudioTimeSection";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type {
  CommunityResearchContent,
  LabHappeningsContent,
  LearningOutcomesContent,
  StudioTimeContent,
} from "../../types";

interface AboutContentViewProps {
  communityData: CommunityResearchContent;
  studioTimeData: StudioTimeContent;
  learningData: LearningOutcomesContent;
  labHappeningsData: LabHappeningsContent;
}

const AboutContentView = ({
  communityData,
  studioTimeData,
  learningData,
  labHappeningsData,
}: AboutContentViewProps) => {
  const communityRef = useRef(null);
  const studioTimeRef = useRef(null);
  const learningRef = useRef(null);
  const happeningsRef = useRef(null);

  const isCommunityInView = useInView(communityRef, { once: true });
  const isStudioTimeInView = useInView(studioTimeRef, { once: true });
  const isLearningInView = useInView(learningRef, { once: true });
  const isHappeningsInView = useInView(happeningsRef, { once: true });

  return (
    <div className="space-y-12 pb-16">
      {/* Community Research */}
      <motion.div
        ref={communityRef}
        initial={{ opacity: 0, y: 30 }}
        animate={
          isCommunityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.8 }}
      >
        <CommunityResearch content={communityData} />
      </motion.div>

      {/* Studio Time Section */}
      <motion.div
        ref={studioTimeRef}
        initial={{ opacity: 0, y: 30 }}
        animate={
          isStudioTimeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.8 }}
      >
        <StudioTime content={studioTimeData} />
      </motion.div>

      {/* Learning Outcomes */}
      <motion.div
        ref={learningRef}
        initial={{ opacity: 0, y: 30 }}
        animate={
          isLearningInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.8 }}
      >
        <LearningOutcomes content={learningData} />
      </motion.div>

      {/* Lab Happenings */}
      <motion.div
        ref={happeningsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={
          isHappeningsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.8 }}
      >
        <LabHappenings content={labHappeningsData} />
      </motion.div>
    </div>
  );
};

export default AboutContentView;
