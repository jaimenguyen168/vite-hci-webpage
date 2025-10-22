/**
 * Represents a single accordion item for a research topic.
 * Composes AnswerSection, VideoSection, and ResearchGrid components.
 * Handles the accordion trigger and content display.
 */

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnswerSection } from './AnswerSection';
import { VideoSection } from './VideoSection';
import { ResearchGrid } from './ResearchGrid';
import type { ResearchTopic } from '../../types';

interface ResearchAccordionItemProps {
  topic: ResearchTopic;
  index: number;
}

export function ResearchAccordionItem({ topic, index }: ResearchAccordionItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  const getLogoForTopic = (topicId: string) => {
    switch (topicId) {
      case "research-1":
        return "/images/research/gen-ai-logo.png";
      case "research-2":
        return "/images/research/accessibility-logo.png";
      case "research-3":
        return "/images/research/social-computing-logo.png";
      default:
        return null;
    }
  };

  const logoPath = getLogoForTopic(topic.id);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
    >
      <AccordionItem
        key={topic.id}
        value={topic.id}
        className="rounded-4xl shadow-lg"
      >
        <AccordionTrigger className="px-6 py-5 !bg-white !border-2 !rounded-full text-left !text-base md:!text-2xl font-medium shadow shadow-gray-300 flex items-center gap-4">
          {logoPath && (
            <img 
              src={logoPath} 
              alt={`${topic.question} logo`}
              className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0"
            />
          )}
          <span>{topic.question}</span>
        </AccordionTrigger>
        <AccordionContent className="px-6 py-5 text-gray-700 leading-relaxed text-sm md:text-lg">
          {topic.answer && (
            <AnswerSection answer={topic.answer} />
          )}
          
          {topic.video && (
            <VideoSection video={topic.video} />
          )}
          
          <ResearchGrid 
            topicName={topic.question} 
            projects={topic.research} 
          />
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}
