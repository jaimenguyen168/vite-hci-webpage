import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import {
  getRouteConfig,
  getSEOConfig,
  getRouteImages,
  routes,
} from "@/constants/routeConfig.ts";
import Footer from "@/components/Footer.tsx";
import { useSEO } from "@/hooks/useSEO.ts";

export default function RootLayout() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");

  const routeConfig = getRouteConfig(location.pathname);
  const seoConfig = getSEOConfig(location.pathname, sub || undefined);
  const routeImages = getRouteImages(location.pathname);

  useSEO(
    seoConfig || {
      title: "Temple University HCI Lab",
      description: "Human-Computer Interaction Research at Temple University",
      keywords: "HCI, Temple University, Research Lab",
    },
  );

  return (
    <div className="min-h-screen flex flex-col scrollbar-hide">
      <Hero
        image={
          routeImages.hero ||
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
