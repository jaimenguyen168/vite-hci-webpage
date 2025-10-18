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
import { AnswerSection } from './AnswerSection';
import { VideoSection } from './VideoSection';
import { ResearchGrid } from './ResearchGrid';
import type { ResearchTopic } from '../../types';

interface ResearchAccordionItemProps {
  topic: ResearchTopic;
}

export function ResearchAccordionItem({ topic }: ResearchAccordionItemProps) {
  return (
    <AccordionItem
      key={topic.id}
      value={topic.id}
      className="rounded-4xl shadow-lg"
    >
      <AccordionTrigger className="px-6 py-5 !bg-white !border-2 !rounded-full text-left !text-base md:!text-2xl font-medium shadow shadow-gray-300">
        {topic.question}
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
  );
}
