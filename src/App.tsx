import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import SidebarLayout from "./layouts/SidebarLayout";
import { routes } from "@/constants/routeConfig.ts";

export default function App() {
  const routesWithoutSidebar = routes.filter(
    (route) => !route.sidebar || route.sidebar.length === 0,
  );
  const routesWithSidebar = routes.filter(
    (route) => route.sidebar && route.sidebar.length > 0,
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
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
          <Route element={<SidebarLayout />}>
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
