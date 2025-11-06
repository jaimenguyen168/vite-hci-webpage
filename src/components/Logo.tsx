import { Link, useLocation } from "react-router-dom";
import { getImagePath } from "@/lib/utils.ts";
import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 48, className = "" }: LogoProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHomePage) {
      e.preventDefault();
      const scrollToTop = () => {
        const scrollDuration = 300;
        const scrollStep = -window.scrollY / (scrollDuration / 15);

        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      };

      scrollToTop();
    }
  };

  return (
    <Link
      to="/"
      className={`flex items-center ${className}`}
      onClick={handleLogoClick}
      itemScope
      aria-label="Temple University HCI Lab - Navigate to homepage"
      title="Temple University Human-Computer Interaction Research Lab"
    >
      <div className="flex-shrink-0">
        <img
          src={getImagePath("/hci-logo.png")}
          alt="Temple University HCI Lab logo - Human-Computer Interaction Research Laboratory"
          className="rounded"
          style={{ width: `${size}px`, height: `${size}px` }}
          loading="eager"
          decoding="sync"
          width={size}
          height={size}
          itemProp="logo"
          role="img"
        />
      </div>
    </Link>
  );
};

export default Logo;
