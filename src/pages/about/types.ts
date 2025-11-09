export interface AboutData {
    communityResearch: CommunityResearchContent;
    studioTime: StudioTimeContent;
    learningOutcomes: LearningOutcomesContent;
    events: EventsContent;
    labHappenings: LabHappeningsContent;
}

export interface CommunityResearchContent {
    title: string;
    description: string;
    video: string;
}

export interface StudioTimeContent {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    imageCaption: string;
    buttonText: string;
    buttonLink: string;
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

export interface LabHappeningsContent {
    title: string;
    description: string;
    images: LabHappeningsImage[];
}

export interface LabHappeningsImage {
    src: string;
    alt: string;
}