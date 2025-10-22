import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

export const getImagePath = (path?: string | null): string => {
  if (!path) {
    return "";
  }

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  const isGitHubPages =
    window.location.pathname.startsWith("/vite-hci-webpage/");

  if (isGitHubPages) {
    return `/vite-hci-webpage/${cleanPath}`;
  }

  return `/${cleanPath}`;
};
