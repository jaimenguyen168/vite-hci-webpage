import { type ComponentType, lazy } from "react";
import type { SEOConfig } from "@/hooks/useSEO";
import seoConfigs from "@/constants/content/seoConfigs.json";
import routeContent from "@/constants/content/routeContent.json";
import imagesConfig from "@/constants/content/heroImagesConfig.json";

const HomePage = lazy(() => import("@/pages/home/ui/views/Home.tsx"));
const ResearchPage = lazy(
  () => import("@/pages/research/ui/views/Research.tsx"),
);
const AboutPage = lazy(() => import("@/pages/about/ui/views/About.tsx"));
const PeoplePage = lazy(() => import("@/pages/people/ui/views/People.tsx"));
const CoursesPage = lazy(() => import("@/pages/courses/ui/views/Courses"));
const SponsorsPage = lazy(() => import("@/pages/sponsors/ui/views/Sponsors"));
const JoinUsPage = lazy(() => import("@/pages/join/ui/views/JoinUs.tsx"));

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
  heroTitle?: string;
  heroHeight?: "small" | "large";
  heroSubtitle?: string;
  showCTA?: boolean;
  seo?: SEOConfig;
  linkDescription?: string;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    label: routeContent.home.label,
    component: HomePage,
    heroTitle: routeContent.home.heroTitle,
    heroHeight: "large",
    heroSubtitle: routeContent.home.heroSubtitle,
    showCTA: true,
    seo: seoConfigs.main.home,
    linkDescription: routeContent.home.linkDescription,
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
    heroTitle: routeContent.about.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.main.about,
    linkDescription: routeContent.about.linkDescription,
  },
  {
    path: "/research",
    label: routeContent.research.label,
    component: ResearchPage,
    heroTitle: routeContent.research.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.main.research,
    linkDescription: routeContent.research.linkDescription,
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
    heroTitle: routeContent.people.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.main.people,
    linkDescription: routeContent.people.linkDescription,
  },
  {
    path: "/courses",
    label: routeContent.courses.label,
    component: CoursesPage,
    heroTitle: routeContent.courses.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.main.courses,
    linkDescription: routeContent.courses.linkDescription,
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
    heroTitle: routeContent.sponsors.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.main.sponsors,
    linkDescription: routeContent.sponsors.linkDescription,
  },
  {
    path: "/join",
    label: routeContent.join.label,
    component: JoinUsPage,
    heroTitle: routeContent.join.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.main.join,
    linkDescription: routeContent.join.linkDescription,
  },
];

export const getRouteConfig = (path: string) =>
  routes.find((route) => route.path === path);

export const getSEOConfig = (path: string, sub?: string) => {
  const route = getRouteConfig(path);

  if (!route?.seo) return null;

  if (sub) {
    const pathKey = path.replace("/", "") || "home";
    const subPageSEO = seoConfigs.sub[pathKey as keyof typeof seoConfigs.sub];

    if (subPageSEO && subPageSEO[sub as keyof typeof subPageSEO]) {
      return subPageSEO[sub as keyof typeof subPageSEO] as SEOConfig;
    }
  }

  return route.seo;
};

export const getRouteImages = (path: string) => {
  const pathKey = path.replace("/", "") || "home";
  return (
    imagesConfig[pathKey as keyof typeof imagesConfig] || {
      hero: "",
      gallery: [],
    }
  );
};

export { routeContent, seoConfigs, imagesConfig };
