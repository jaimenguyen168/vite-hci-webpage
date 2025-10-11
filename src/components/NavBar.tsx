import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { getNavItems } from "@/constants/routeConfig.ts";

export default function NavBar() {
  const navItems = getNavItems();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-12 py-6 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <div className="w-12 h-12 bg-red-600 rounded-sm flex items-center justify-center overflow-hidden">
            <img src="/hci-logo.png" alt="HCI Logo" className="size-full" />
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.path}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.path}
                    className={`!text-white !bg-transparent mx-3 !text-base transition-colors hover:!bg-white/10`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
