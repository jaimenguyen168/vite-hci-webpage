import { Outlet, useLocation, useSearchParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { getRouteConfig } from "@/constants/routeConfig";

export default function SidebarLayout() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

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
  const activeLabel = activeItem?.label || "Menu";

  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav className="border border-gray-200">
      {sidebarItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onClick={isMobile ? () => setOpen(false) : undefined}
          className={`
            block w-full text-left px-4 md:px-6 py-2 md:py-3 text-base md:text-lg transition-colors
            ${
              isActive(item)
                ? "bg-primary-red-800 !text-primary-red-foreground font-medium !border-none"
                : "bg-white !text-gray-800 hover:bg-gray-50"
            }
            ${index !== sidebarItems.length - 1 ? "border-b border-gray-200" : ""}
          `}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  const MobileSidebar = () => (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 !bg-white !rounded-none !border-gray-200">
        <span className="font-medium">{activeLabel}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarContent isMobile />
      </CollapsibleContent>
    </Collapsible>
  );

  return (
    <div className="max-w-7xl mx-auto lg:px-0 py-0 lg:py-2">
      {/* Mobile Menu */}
      <div className="md:hidden mb-6">
        <MobileSidebar />
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-80 shrink-0">
          <div className="sticky top-8">
            <SidebarContent />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
