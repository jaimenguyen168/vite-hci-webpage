import CommunityResearch from "../components/CommunityResearch";
import LearningOutcomes from "../components/LearningOutcomes";
import Alumni from "../components/Alumni";
import LabHistory from "../components/LabHistory";
import communityResearchContent from "../../content/communityResearch.json";
import learningOutcomesContent from "../../content/learningOutcomes.json";
import alumniContent from "../../content/alumni.json";

const AboutContentView = () => {
  return (
    <div className="space-y-6">
      <CommunityResearch content={communityResearchContent} />
      <LearningOutcomes content={learningOutcomesContent} />
      <Alumni content={alumniContent} />
      <LabHistory />

    </div>
  );
};
export default AboutContentView;
