import HomePage from "@/pages/home/ui/views/Home.tsx";
import ResearchPage from "@/pages/research/ui/views/Research.tsx";
import AboutPage from "@/pages/about/ui/views/About.tsx";
import PeoplePage from "@/pages/people/ui/views/People.tsx";
import CoursesPage from "@/pages/courses/ui/views/Courses";
import SponsorsPage from "@/pages/sponsors/ui/views/Sponsors";
import JoinUsPage from "@/pages/join/ui/views/JoinUs.tsx";
import type { ComponentType } from "react";
import type { SEOConfig } from "@/hooks/useSEO";

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
  seo?: SEOConfig;
  linkDescription?: string;
}

export const routeContent = {
  home: {
    label: "Home",
    heroImage: "/images/cover/6-studio.JPG",
    heroTitle: "Temple HCI Lab",
    heroSubtitle:
      "Our research lab takes a human-centered approach to using AI, NLP, and Visualization to facilitate learning and empower non-experts to participate in work that has been previously reserved for trained professionals.",
    linkDescription: "Go to Temple HCI Lab homepage",
  },
  about: {
    label: "About",
    heroImage: "/images/cover/NC_05301.jpg",
    heroTitle: "About Our Lab",
    linkDescription:
      "Learn about Temple University HCI Lab mission and history",
  },
  research: {
    label: "Research",
    heroImage: "/images/cover/442_72A2112.jpg",
    heroTitle: "Research",
    linkDescription: "Explore our human-computer interaction research projects",
  },
  people: {
    label: "People",
    heroImage: "/images/cover/3-studio.jpg",
    heroTitle: "The HCI Lab Community",
    linkDescription: "Meet our research team members and collaborators",
  },
  courses: {
    label: "Courses",
    heroImage: "/images/cover/HCI_OpenHouse-5.jpg",
    heroTitle: "Pathways",
    linkDescription: "Discover HCI courses and educational pathways",
  },
  sponsors: {
    label: "Sponsors",
    heroImage: "/images/cover/HCI_OpenHouse-38.jpg",
    heroTitle: "Sponsors",
    linkDescription:
      "Learn about our research sponsors and partnership opportunities",
  },
  join: {
    label: "Join",
    heroImage: "/images/cover/IMG_3673.jpg",
    heroTitle: "Join Us",
    linkDescription: "Apply to join Temple University HCI Lab research team",
  },
} as const;

// SEO configurations for each page
const seoConfigs = {
  home: {
    title: "Temple University HCI Lab | Human-Computer Interaction Research",
    description:
      "Temple University HCI Lab conducts cutting-edge research in human-computer interaction, AI, NLP, and visualization to facilitate learning and empower non-experts.",
    keywords:
      "HCI, Temple University, Human Computer Interaction, Research Lab, AI, NLP, Visualization, Learning Technology",
    canonical: "https://yourdomain.com/",
    ogImage: "/images/og/home.jpg",
  },
  about: {
    title: "About | Temple University HCI Lab",
    description:
      "Learn about Temple University's Human-Computer Interaction Research Lab, our mission, history, and approach to advancing HCI research and education.",
    keywords:
      "HCI Lab, Temple University, About, Research Mission, Human Computer Interaction, Academic Research",
    canonical: "https://yourdomain.com/about",
    ogImage: "/images/og/about.jpg",
  },
  research: {
    title: "Research | Temple University HCI Lab",
    description:
      "Explore our research projects in human-computer interaction, AI applications, natural language processing, and visualization technologies at Temple University.",
    keywords:
      "HCI Research, Temple University, AI Research, NLP, Visualization, Human Computer Interaction Projects",
    canonical: "https://yourdomain.com/research",
    ogImage: "/images/og/research.jpg",
  },
  people: {
    title: "People | Temple University HCI Lab Team",
    description:
      "Meet our research team at Temple University HCI Lab - faculty, graduate students, and collaborators advancing human-computer interaction research.",
    keywords:
      "HCI Team, Temple University, Research Faculty, Graduate Students, HCI Researchers, Lab Members",
    canonical: "https://yourdomain.com/people",
    ogImage: "/images/og/people.jpg",
  },
  courses: {
    title: "Courses | Temple University HCI Lab",
    description:
      "Discover HCI courses and educational pathways at Temple University. Learn about our curriculum in human-computer interaction and related fields.",
    keywords:
      "HCI Courses, Temple University, Human Computer Interaction Education, HCI Curriculum, Graduate Courses",
    canonical: "https://yourdomain.com/courses",
    ogImage: "/images/og/courses.jpg",
  },
  sponsors: {
    title: "Sponsors | Temple University HCI Lab",
    description:
      "Learn about our research sponsors and partners who support innovative HCI research at Temple University. Explore sponsorship opportunities.",
    keywords:
      "HCI Sponsors, Temple University, Research Funding, Sponsorship, Research Partners, HCI Lab Support",
    canonical: "https://yourdomain.com/sponsors",
    ogImage: "/images/og/sponsors.jpg",
  },
  join: {
    title: "Join Us | Temple University HCI Lab",
    description:
      "Join Temple University HCI Lab! Apply for research positions, learn about opportunities for students and researchers in human-computer interaction.",
    keywords:
      "Join HCI Lab, Temple University, Research Opportunities, HCI Jobs, Graduate Research, Apply Research Lab",
    canonical: "https://yourdomain.com/join",
    ogImage: "/images/og/join.jpg",
  },
} as const;

// Static routes configuration
export const routes: RouteConfig[] = [
  {
    path: "/",
    label: routeContent.home.label,
    component: HomePage,
    heroImage: routeContent.home.heroImage,
    heroTitle: routeContent.home.heroTitle,
    heroHeight: "large",
    heroSubtitle: routeContent.home.heroSubtitle,
    showCTA: true,
    seo: seoConfigs.home,
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
    heroImage: routeContent.about.heroImage,
    heroTitle: routeContent.about.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.about,
    linkDescription: routeContent.about.linkDescription,
  },
  {
    path: "/research",
    label: routeContent.research.label,
    component: ResearchPage,
    heroImage: routeContent.research.heroImage,
    heroTitle: routeContent.research.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.research,
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
    heroImage: routeContent.people.heroImage,
    heroTitle: routeContent.people.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.people,
    linkDescription: routeContent.people.linkDescription,
  },
  {
    path: "/courses",
    label: routeContent.courses.label,
    component: CoursesPage,
    heroImage: routeContent.courses.heroImage,
    heroTitle: routeContent.courses.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.courses,
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
    heroImage: routeContent.sponsors.heroImage,
    heroTitle: routeContent.sponsors.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.sponsors,
    linkDescription: routeContent.sponsors.linkDescription,
  },
  {
    path: "/join",
    label: routeContent.join.label,
    component: JoinUsPage,
    heroImage: routeContent.join.heroImage,
    heroTitle: routeContent.join.heroTitle,
    heroHeight: "small",
    seo: seoConfigs.join,
    linkDescription: routeContent.join.linkDescription,
  },
];

// Enhanced getRouteConfig with sub-page SEO support
export const getRouteConfig = (path: string) =>
  routes.find((route) => route.path === path);

// Get SEO config for sub-pages (like people?sub=alumni)
export const getSEOConfig = (path: string, sub?: string) => {
  const route = getRouteConfig(path);

  if (!route?.seo) return null;

  // Handle sub-pages for people
  if (path === "/people" && sub) {
    const peopleSEO = {
      current: {
        title: "Current Members | Temple University HCI Lab Team",
        description:
          "Meet our current members—students and researchers who bring creativity, curiosity, and collaboration to every project. Join our innovative research community.",
        keywords:
          "HCI, HCI Lab, Temple HCI Lab, current members, research team, graduate students, lab members, academic research",
        canonical: "https://yourdomain.com/people",
        ogImage: "/images/og/people-current.jpg",
      },
      alumni: {
        title:
          "Alumni | Temple University HCI Lab - Former Members & Their Impact",
        description:
          "Meet our accomplished alumni who have gone on to make significant contributions in their fields. Discover the lasting impact of our research lab community.",
        keywords:
          "HCI, HCI Lab, Temple HCI Lab, alumni, former members, research lab graduates, academic achievements, career outcomes",
        canonical: "https://yourdomain.com/people?sub=alumni",
        ogImage: "/images/og/people-alumni.jpg",
      },
      collaborators: {
        title:
          "Collaborators | Temple University HCI Lab Partners & External Contributors",
        description:
          "Our valued collaborators and research partners who contribute to our lab's innovative projects and academic excellence.",
        keywords:
          "HCI, HCI Lab, Temple HCI Lab, collaborators, research partners, academic collaboration, external contributors",
        canonical: "https://yourdomain.com/people?sub=collaborators",
        ogImage: "/images/og/people-collaborators.jpg",
      },
    };

    return peopleSEO[sub as keyof typeof peopleSEO] || route.seo;
  }

  return route.seo;
};
