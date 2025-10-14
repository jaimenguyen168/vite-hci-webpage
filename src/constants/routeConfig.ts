import HomePage from "@/pages/Home.tsx";
import ResearchPage from "@/pages/Research.tsx";
import AboutPage from "@/pages/about/ui/views/About.tsx";
import PeoplePage from "@/pages/People.tsx";
import CoursesPage from "@/pages/Courses.tsx";
import SponsorPage from "@/pages/Sponsor.tsx";
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

export const routes: RouteConfig[] = [
  {
    path: "/",
    label: "Home",
    component: HomePage,
    heroImage:
      "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2676",
    heroTitle: "Temple HCI Lab",
    heroHeight: "large",
    heroSubtitle:
      "Our research lab takes a human-centered approach to using AI, NLP, and Visualization to facilitate learning and empower non-experts to participate in work that has been previously reserved for trained professionals.",
    showCTA: true,
  },
  {
    path: "/research",
    label: "Research",
    component: ResearchPage,
    heroImage:
      "https://images.unsplash.com/photo-1580983558189-84200466afb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",
    heroTitle: "Research",
    heroHeight: "small",
  },
  {
    path: "/about",
    label: "About",
    component: AboutPage,
    sidebar: [
      { label: "About", path: "/about", isMain: true },
      { label: "Events", path: "/about?sub=events" },
      { label: "Contact Us", path: "/about?sub=contact-us" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1603975711481-18b7aaca4caa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2080",
    heroTitle: "About Our Lab",
    heroHeight: "small",
  },
  {
    path: "/people",
    label: "People",
    component: PeoplePage,
    sidebar: [
      { label: "Current Members", path: "/people", isMain: true },
      { label: "Alumni", path: "/people?sub=alumni" },
      { label: "Collaborators", path: "/people?sub=collaborators" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1676276374309-53509b8a9b51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2630",
    heroTitle: "The HCI Lab Community",
    heroHeight: "small",
  },
  {
    path: "/courses",
    label: "Courses",
    component: CoursesPage,
    heroImage:
      "https://images.unsplash.com/photo-1612773073063-5dc1e48fa47b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",
    heroTitle: "Pathways",
    heroHeight: "small",
  },
  {
    path: "/sponsors",
    label: "Sponsors",
    component: SponsorPage,
    sidebar: [
      { label: "Our Sponsors", path: "/sponsors", isMain: true },
      {
        label: "Interested in sponsoring?",
        path: "/sponsors?sub=become-our-sponsor",
      },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1573496799822-b0557c9e2f41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2669",
    heroTitle: "Sponsors",
    heroHeight: "small",
  },
  {
    path: "/join",
    label: "Join",
    component: JoinUsPage,
    heroImage:
      "https://images.unsplash.com/photo-1581093577421-f561a654a353?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2670",
    heroTitle: "Join Us",
    heroHeight: "small",
  },
];

export const getRouteConfig = (path: string) =>
  routes.find((route) => route.path === path);
