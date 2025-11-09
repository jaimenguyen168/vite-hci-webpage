export interface AboutData {
    communityResearch: CommunityResearchContent;
    learningOutcomes: LearningOutcomesContent;
    events: EventsContent;
}

export interface CommunityResearchContent {
    title: string;
    description: string;
    video: string;
}

export interface LearningOutcomesContent {
    title: string;
    items: LearningOutcomeItem[];
    alumni: AlumniTestimonial[];
}

export interface LearningOutcomeItem {
    title: string;
    description: string;
}

export interface AlumniTestimonial {
    name: string;
    title: string;
    quote: string;
    img?: string;
}

export interface EventsContent {
    title1: string;
    description1: string;
    image1: string;
    image1Alt: string;
    title2: string;
    description2: string;
    image2: string;
    image2Alt: string;
    ctaTitle: string;
    buttonText: string;
    buttonLink: string;
}