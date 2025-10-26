/**
 * Displays a grid of research project cards with a section title.
 * Uses a responsive grid layout that adapts to different screen sizes.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ResearchCard } from './ResearchCard';
import type { ResearchProject } from '../../types';

interface ResearchGridProps {
  topicName: string;
  projects: ResearchProject[];
}

export function ResearchGrid({ topicName, projects }: ResearchGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-6"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Papers in {topicName}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((research, index) => (
          <ResearchCard key={index} research={research} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
