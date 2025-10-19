import {useRef} from "react";
import { motion, useInView } from "framer-motion";
import ResearchCard from "@/pages/home/ui/components/ResearchCard.tsx";
import WhyHCILabSection from "@/pages/home/ui/components/WhyHCILabSection.tsx";
import BeyondTheLabSection from "@/pages/home/ui/components/BeyondTheLabSection.tsx";
import RecentNewsSection from "@/pages/home/ui/components/RecentNewsSection.tsx";
import {BookOpen, Globe, type LucideIcon, Users} from "lucide-react";
import Title from "@/components/Title.tsx";

interface ResearchArea {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  icon: LucideIcon
}

const researchAreas: ResearchArea[] = [
  {
    id: "genai-education",
    title: "GenAI & Education",
    description: "Exploring Generative AI in computing education, enhancing learning, creativity, and assessment through intelligent tools.",
    buttonText: "Read more",
    buttonUrl: "/research/genai-education",
    icon: BookOpen
  },
  {
    id: "accessible-technology",
    title: "Accessible Technology",
    description: "Exploring accessible technology in computing, enhancing inclusion, usability, and opportunity through thoughtful design and innovation.",
    buttonText: "Read more",
    buttonUrl: "/research/accessible-technology",
    icon: Globe
  },
  {
    id: "social-computing",
    title: "Social Computing",
    description: "Exploring social computing in education, fostering collaboration, communication, and community through interactive digital platforms.",
    buttonText: "Read more",
    buttonUrl: "/research/social-computing",
    icon: Users
  }
];

export default function HomePage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 pt-4 pb-12"
      >
        <Title title="Our Research" />

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {researchAreas.map((research, index) => (
            <ResearchCard key={research.id} research={research} index={index} />
          ))}
        </div>

        {/* Why HCI Lab Section */}
        <WhyHCILabSection />

        {/* Beyond the Lab Section */}
        <BeyondTheLabSection />

        {/* Recent News Section */}
        <RecentNewsSection />

        {/* Join Us CTA */}
        {/*<JoinUsCallToAction />*/}
      </motion.section>
    </div>
  );
}
