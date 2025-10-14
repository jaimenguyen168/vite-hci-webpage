import { Outlet, useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { getRouteConfig } from "@/constants/routeConfig.ts";
import Footer from "@/components/Footer.tsx";

export default function RootLayout() {
  const location = useLocation();
  const routeConfig = getRouteConfig(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
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
      <main className="max-w-7xl mx-auto px-6 py-8 flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
