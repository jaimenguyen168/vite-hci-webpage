import { Outlet, useLocation, useSearchParams, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getRouteConfig } from "@/constants/routeConfig";

export default function SidebarLayout() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const routeConfig = getRouteConfig(location.pathname);
  const currentSub = searchParams.get("sub");
  const sidebarItems = routeConfig?.sidebar || [];

  const isActive = (item: { path: string; isMain?: boolean }) => {
    if (item.isMain) {
      return !currentSub && location.pathname === routeConfig?.path;
    }
    const itemSub = new URLSearchParams(item.path.split("?")[1]).get("sub");
    return currentSub === itemSub;
  };

  const activeItem = sidebarItems.find((item) => isActive(item));

  const getBreadcrumbItems = () => {
    const items = [{ label: "Home", path: "/" }];

    if (routeConfig) {
      items.push({
        label: routeConfig.label || "Path",
        path: routeConfig.path,
      });
    }

    if (activeItem && !activeItem.isMain) {
      items.push({
        label: activeItem.label,
        path: activeItem.path,
      });
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  const SidebarContent = () => (
    <nav className="border border-gray-200 bg-white rounded-lg overflow-hidden w-full md:w-auto">
      <div className="p-2">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`
              block w-full text-left px-4 py-3 text-base rounded-md transition-colors mb-1 truncate
              ${
                isActive(item)
                  ? "bg-primary-red-800 !text-primary-red-foreground font-medium"
                  : "bg-white !text-gray-800 hover:bg-gray-50"
              }
              ${index !== sidebarItems.length - 1 && "border-b"}
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );

  const MobileBreadcrumb = () => (
    <div className="">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <BreadcrumbSeparator className="mr-2" />}
              <BreadcrumbItem>
                {index === breadcrumbItems.length - 1 ? (
                  <BreadcrumbPage className="font-semibold text-primary-red-800">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      to={item.path}
                      className="!text-gray-600 hover:!text-gray-900"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto lg:px-0 py-0 lg:py-2 overflow-hidden">
      {/* Mobile Breadcrumb */}
      <div className="md:hidden">
        <MobileBreadcrumb />
      </div>

      <div className="flex gap-8 overflow-hidden">
        {/* Desktop Sidebar - Side panel */}
        <aside className="hidden md:block w-80 shrink-0 overflow-hidden">
          <div className="sticky">
            <SidebarContent />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-4 w-full xl:max-w-6xl overflow-hidden">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar - Bottom */}
      <div className="md:hidden shrink-0 w-full mb-8 overflow-hidden">
        <SidebarContent />
      </div>
    </div>
  );
}
