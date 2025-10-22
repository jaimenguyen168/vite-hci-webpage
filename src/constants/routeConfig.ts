import HomePage from "@/pages/home/ui/views/Home.tsx";
import ResearchPage from "@/pages/research/ui/views/Research.tsx";
import AboutPage from "@/pages/about/ui/views/About.tsx";
import PeoplePage from "@/pages/people/ui/views/People.tsx";
import CoursesPage from "@/pages/courses/ui/views/Courses";
import SponsorsPage from "@/pages/sponsors/ui/views/Sponsors";
import JoinUsPage from "@/pages/join/ui/views/JoinUs.tsx";
import type { ComponentType } from "react";

export interface SidebarItem {
  label: string;
  path: string;
  isMain?: boolean;
}

export interface RouteConfig {
  path: string;
  label: string;
  component: ComponentType;
  sidebar?: SidebarItem[];
  heroImage?: string;
  heroTitle?: string;
  heroHeight?: "small" | "large";
  heroSubtitle?: string;
  showCTA?: boolean;
}

interface RouteContent {
  home: {
    label: string;
    heroImage: string;
    heroTitle: string;
    heroSubtitle: string;
  };
  about: {
    label: string;
    heroImage: string;
    heroTitle: string;
  };
  research: {
    label: string;
    heroImage: string;
    heroTitle: string;
  };
  people: {
    label: string;
    heroImage: string;
    heroTitle: string;
  };
  courses: {
    label: string;
    heroImage: string;
    heroTitle: string;
  };
  sponsors: {
    label: string;
    heroImage: string;
    heroTitle: string;
  };
  join: {
    label: string;
    heroImage: string;
    heroTitle: string;
  };
}

// Cache for route content to avoid multiple fetches
let routeContentCache: RouteContent | null = null;

export const fetchRouteContent = async (): Promise<RouteContent> => {
  if (routeContentCache) {
    return routeContentCache;
  }

  try {
    const response = await fetch("/content/routes/routeContent.json");
    const content = await response.json();
    routeContentCache = content;
    return content;
  } catch (error) {
    console.error("Error fetching route content:", error);
    throw error;
  }
};

export const createRoutes = (routeContent: RouteContent): RouteConfig[] => [
  {
    path: "/",
    label: routeContent.home.label,
    component: HomePage,
    heroImage: routeContent.home.heroImage,
    heroTitle: routeContent.home.heroTitle,
    heroHeight: "large",
    heroSubtitle: routeContent.home.heroSubtitle,
    showCTA: true,
  },
  {
    path: "/about",
    label: routeContent.about.label,
    component: AboutPage,
    sidebar: [
      { label: "About", path: "/about", isMain: true },
      { label: "Events", path: "/about?sub=events" },
      { label: "Contact Us", path: "/about?sub=contact-us" },
    ],
    heroImage: routeContent.about.heroImage,
    heroTitle: routeContent.about.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/research",
    label: routeContent.research.label,
    component: ResearchPage,
    heroImage: routeContent.research.heroImage,
    heroTitle: routeContent.research.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/people",
    label: routeContent.people.label,
    component: PeoplePage,
    sidebar: [
      { label: "Current Members", path: "/people", isMain: true },
      { label: "Alumni", path: "/people?sub=alumni" },
      { label: "Collaborators", path: "/people?sub=collaborators" },
    ],
    heroImage: routeContent.people.heroImage,
    heroTitle: routeContent.people.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/courses",
    label: routeContent.courses.label,
    component: CoursesPage,
    heroImage: routeContent.courses.heroImage,
    heroTitle: routeContent.courses.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/sponsors",
    label: routeContent.sponsors.label,
    component: SponsorsPage,
    sidebar: [
      { label: "Our Sponsors", path: "/sponsors", isMain: true },
      {
        label: "Interested in sponsoring?",
        path: "/sponsors?sub=become-our-sponsor",
      },
    ],
    heroImage: routeContent.sponsors.heroImage,
    heroTitle: routeContent.sponsors.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/join",
    label: routeContent.join.label,
    component: JoinUsPage,
    heroImage: routeContent.join.heroImage,
    heroTitle: routeContent.join.heroTitle,
    heroHeight: "small",
  },
];

export const getRouteConfig = (routes: RouteConfig[], path: string) =>
  routes.find((route) => route.path === path);
