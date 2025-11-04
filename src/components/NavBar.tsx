import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo.tsx";
import type { RouteConfig } from "@/constants/routeConfig.ts";

interface NavBarProps {
  routes?: RouteConfig[];
}

export default function NavBar({ routes }: NavBarProps) {
  const navItems = routes?.filter((item) => item.label !== "Home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Logo */}
          <Logo size={56} />

          {/* Mobile Hamburger Menu */}
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                className="group size-10 md:hidden flex items-center justify-center !bg-transparent !border-2 !border-white hover:!bg-white"
                variant="outline"
                size="icon"
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="relative size-8 flex items-center justify-center ">
                  <Menu
                    className={`absolute size-5 text-white transition-all duration-300 group-hover:text-black ${
                      isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                  <X
                    className={`absolute size-5 text-white transition-all duration-300 group-hover:text-black ${
                      isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-48 p-2 md:hidden mr-6"
              id="mobile-menu"
              role="menu"
              aria-label="Navigation menu"
            >
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-1">
                  {navItems?.map((item) => (
                    <NavigationMenuItem key={item.path} className="w-full">
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="!text-black !bg-transparent !text-base font-roboto transition-colors hover:!bg-black/10 px-3 py-1 rounded-md"
                          role="menuitem"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navItems?.map((item) => (
              <NavigationMenuItem key={item.path}>
                <NavigationMenuLink asChild>
                  <Link
                    to={item.path}
                    className="!text-white !bg-transparent mx-1 xl:mx-2 !font-medium !text-lg font-roboto transition-colors hover:!bg-white/10 px-3 py-2 rounded-md whitespace-nowrap"
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
