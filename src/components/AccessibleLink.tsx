// ✅ Separate type and value imports
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { getRouteConfig } from "@/constants/routeConfig";
import type { ReactNode } from "react";

const getLinkDescription = (path: string): string => {
  const route = getRouteConfig(path);
  return route?.linkDescription || `Navigate to ${route?.label || path}`;
};

interface AccessibleLinkProps extends LinkProps {
  children: ReactNode;
  customAriaLabel?: string;
}

export const AccessibleLink = ({
  to,
  children,
  customAriaLabel,
  ...props
}: AccessibleLinkProps) => {
  const path = typeof to === "string" ? to : to.pathname || "";
  const ariaLabel = customAriaLabel || getLinkDescription(path);

  return (
    <Link to={to} aria-label={ariaLabel} {...props}>
      {children}
    </Link>
  );
};
