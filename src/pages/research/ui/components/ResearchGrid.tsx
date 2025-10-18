/**
 * Displays a grid of research project cards with a section title.
 * Uses a responsive grid layout that adapts to different screen sizes.
 */

import { ResearchCard } from './ResearchCard';
import type { ResearchProject } from '../../types';

interface ResearchGridProps {
  topicName: string;
  projects: ResearchProject[];
}

export function ResearchGrid({ topicName, projects }: ResearchGridProps) {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Papers in {topicName}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((research, index) => (
          <ResearchCard key={index} research={research} />
        ))}
      </div>
    </div>
  );
}
