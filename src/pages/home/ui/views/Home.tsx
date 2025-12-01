import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import WhyHCILabSection from "@/pages/home/ui/components/WhyHCILabSection.tsx";
import FeatureProjects from "@/pages/home/ui/components/FeatureProjects.tsx";
import HCITagsHero from "@/pages/home/ui/components/HCITagsHero.tsx";
import HubCommunitySection from "@/pages/home/ui/components/HubCommunitySection.tsx";
import RecentNewsSection from "@/pages/home/ui/components/RecentNewsSection.tsx";

export default function HomePage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="pt-4 pb-12 space-y-8 w-full"
      >
        <HCITagsHero />

        {/* Why HCI Lab Section */}
        <WhyHCILabSection />

        {/* Beyond the Lab Section */}
        <FeatureProjects />

        {/* Hub Community Section */}
        <HubCommunitySection />

        {/* Recent News Section */}
        <RecentNewsSection />

        {/* Join Us CTA */}
        {/*<JoinUsCallToAction />*/}
      </motion.section>
    </div>
  );
}
