import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import RootLayout from "./layouts/RootLayout";
import SidebarLayout from "./layouts/SidebarLayout";
import {
  fetchRouteContent,
  createRoutes,
  type RouteConfig,
} from "@/constants/routeConfig.ts";

export default function App() {
  const [routes, setRoutes] = useState<RouteConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const basename = window.location.pathname.startsWith("/vite-hci-webpage/")
    ? "/vite-hci-webpage/"
    : "";

  useEffect(() => {
    const initializeRoutes = async () => {
      try {
        const routeContent = await fetchRouteContent();
        const routeConfigs = createRoutes(routeContent);
        setRoutes(routeConfigs);
      } catch (err) {
        console.error("Failed to initialize routes:", err);
        setError("Failed to load application configuration");
      } finally {
        setLoading(false);
      }
    };

    initializeRoutes();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading application...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  const routesWithoutSidebar = routes.filter(
    (route) => !route.sidebar || route.sidebar.length === 0,
  );
  const routesWithSidebar = routes.filter(
    (route) => route.sidebar && route.sidebar.length > 0,
  );

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<RootLayout routes={routes} />}>
          {/* Pages without sidebar */}
          {routesWithoutSidebar.map((route) => {
            const Component = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Component />}
              />
            );
          })}

          {/* Pages with sidebar */}
          <Route element={<SidebarLayout routes={routes} />}>
            {routesWithSidebar.map((route) => {
              const Component = route.component;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<Component />}
                />
              );
            })}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
