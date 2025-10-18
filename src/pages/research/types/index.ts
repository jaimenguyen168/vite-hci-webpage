/**
 * Type definitions for the Research page components and data structures
 */

export interface ResearchAction {
  label: string;
  icon: string;
  url: string;
}

export interface ResearchProject {
  title: string;
  description: string;
  image: string;
  actions: ResearchAction[];
}

export interface ResearchVideo {
  url: string;
  title: string;
  description: string;
}

export interface ResearchTopic {
  id: string;
  question: string;
  answer: string;
  video?: ResearchVideo;
  research: ResearchProject[];
  defaultOpen?: boolean;
}

export interface ResearchData {
  researchTopics: ResearchTopic[];
}
