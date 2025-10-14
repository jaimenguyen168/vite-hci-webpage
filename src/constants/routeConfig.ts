import HomePage from "@/pages/Home.tsx";
import ResearchPage from "@/pages/Research.tsx";
import AboutPage from "@/pages/about/ui/views/About.tsx";
import PeoplePage from "@/pages/People.tsx";
import CoursesPage from "@/pages/Courses.tsx";
import SponsorPage from "@/pages/Sponsor.tsx";
import JoinUsPage from "@/pages/join/ui/views/JoinUs.tsx";
import type { ComponentType } from "react";
import routeContent from "@/constants/content/routeContent.json";

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

export const routes: RouteConfig[] = [
  {
    path: "/",
    label: routeContent.routes.home.label,
    component: HomePage,
    heroImage: routeContent.routes.home.heroImage,
    heroTitle: routeContent.routes.home.heroTitle,
    heroHeight: "large",
    heroSubtitle: routeContent.routes.home.heroSubtitle,
    showCTA: true,
  },
  {
    path: "/about",
    label: routeContent.routes.about.label,
    component: AboutPage,
    sidebar: [
      { label: "About", path: "/about", isMain: true },
      { label: "Events", path: "/about?sub=events" },
      { label: "Contact Us", path: "/about?sub=contact-us" },
    ],
    heroImage: routeContent.routes.about.heroImage,
    heroTitle: routeContent.routes.about.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/research",
    label: routeContent.routes.research.label,
    component: ResearchPage,
    heroImage: routeContent.routes.research.heroImage,
    heroTitle: routeContent.routes.research.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/people",
    label: routeContent.routes.people.label,
    component: PeoplePage,
    sidebar: [
      { label: "Current Members", path: "/people", isMain: true },
      { label: "Alumni", path: "/people?sub=alumni" },
      { label: "Collaborators", path: "/people?sub=collaborators" },
    ],
    heroImage: routeContent.routes.people.heroImage,
    heroTitle: routeContent.routes.people.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/courses",
    label: routeContent.routes.courses.label,
    component: CoursesPage,
    heroImage: routeContent.routes.courses.heroImage,
    heroTitle: routeContent.routes.courses.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/sponsors",
    label: routeContent.routes.sponsors.label,
    component: SponsorPage,
    sidebar: [
      { label: "Our Sponsors", path: "/sponsors", isMain: true },
      {
        label: "Interested in sponsoring?",
        path: "/sponsors?sub=become-our-sponsor",
      },
    ],
    heroImage: routeContent.routes.sponsors.heroImage,
    heroTitle: routeContent.routes.sponsors.heroTitle,
    heroHeight: "small",
  },
  {
    path: "/join",
    label: routeContent.routes.join.label,
    component: JoinUsPage,
    heroImage: routeContent.routes.join.heroImage,
    heroTitle: routeContent.routes.join.heroTitle,
    heroHeight: "small",
  },
];

export const getRouteConfig = (path: string) =>
  routes.find((route) => route.path === path);
