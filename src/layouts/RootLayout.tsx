import { Outlet, useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { getRouteConfig, type RouteConfig } from "@/constants/routeConfig.ts";
import Footer from "@/components/Footer.tsx";
import { useEffect } from "react";

interface RootLayoutProps {
  routes: RouteConfig[];
}

export default function RootLayout({ routes }: RootLayoutProps) {
  const location = useLocation();
  const routeConfig = getRouteConfig(routes, location.pathname);

  useEffect(() => {
    if (routeConfig?.heroImage) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = routeConfig.heroImage;
      document.head.appendChild(link);
    }
  }, [routeConfig?.heroImage]);

  return (
    <div className="min-h-screen flex flex-col scrollbar-hide">
      <Hero
        image={
          routeConfig?.heroImage ||
          "https://live.staticflickr.com/65535/54823010757_699c9d480f_c.jpg"
        }
        title={routeConfig?.heroTitle}
        height={routeConfig?.heroHeight}
        subtitle={routeConfig?.heroSubtitle}
        showCTA={routeConfig?.showCTA}
      >
        <NavBar routes={routes} />
      </Hero>
      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full scrollbar-hide">
        <Outlet />
      </main>
      <Footer routes={routes} />
    </div>
  );
}
