import { Outlet, useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { getRouteConfig } from "@/constants/routeConfig.ts";
import Footer from "@/components/Footer.tsx";
import { useEffect } from "react";

export default function RootLayout() {
  const location = useLocation();
  const routeConfig = getRouteConfig(location.pathname);

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
        <NavBar />
      </Hero>
      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full scrollbar-hide">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
