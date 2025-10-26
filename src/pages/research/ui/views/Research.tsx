import { Accordion } from "@/components/ui/accordion.tsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ResearchIntro } from "../components/ResearchIntro.tsx";
import { ResearchAccordionItem } from "../components/ResearchAccordionItem.tsx";
import researchData from "../../content/researchTopics.json";
import type { ResearchData } from "../../types";

export default function ResearchPage() {
  const { researchTopics } = researchData as ResearchData;
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const accordionRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: true });
  const isTitleInView = useInView(titleRef, { once: true });
  const isAccordionInView = useInView(accordionRef, { once: true, margin: "50px" });

  const introText = "Research drives innovation, deepens understanding, and shapes solutions to real-world challenges. In our lab, research is more than gathering data—it's a process of discovery, critical thinking, and collaboration that expands knowledge and creates lasting impact.";

  return (
    <div className="w-full py-4 container mx-auto">
      <motion.div
        ref={introRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isIntroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        <ResearchIntro introText={introText} />
      </motion.div>
      
      <div className="px-8">
        <motion.h2 
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bold text-gray-900 !text-2xl md:!text-4xl mb-10"
        >
          Explore common research areas in our lab
        </motion.h2>
        
        <motion.div 
          ref={accordionRef}
          initial={{ opacity: 0 }}
          animate={isAccordionInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-0 md:px-6 mb-16"
        >
          <Accordion type="single" collapsible className="space-y-6" defaultValue="research-1">
            {researchTopics.map((topic, index) => (
              <ResearchAccordionItem key={topic.id} topic={topic} index={index} />
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
