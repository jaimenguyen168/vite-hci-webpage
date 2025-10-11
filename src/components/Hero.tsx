import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { useSearchParams } from "react-router-dom";

interface HeroProps {
  children: ReactNode;
  image: string;
  title?: string;
  height?: "small" | "large";
  subtitle?: string;
  showCTA?: boolean;
}

export default function Hero({
  children,
  image,
  title,
  height = "small",
  subtitle,
  showCTA = false,
}: HeroProps) {
  const heightClass = height === "large" ? "h-[700px]" : "h-[510px]";

  const [searchParams] = useSearchParams();
  const subSection = searchParams.get("sub");
  const formattedSubSection = subSection
    ? subSection
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : null;

  const showBreadcrumb = subSection && title;

  return (
    <div
      className={`relative w-screen mx-auto bg-cover bg-center  ${heightClass}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex flex-col max-w-7xl mx-auto">
        {children}

        {title && (
          <div className="flex-1 flex items-center justify-between px-8 md:px-16">
            <div className="flex-1">
              {showBreadcrumb && (
                <p className="text-white text-lg mb-2">
                  {title} /{" "}
                  <span className="font-semibold">{formattedSubSection}</span>
                </p>
              )}
              <h1
                className={`text-white leading-tight ${height === "large" ? "!text-[110px] font-semibold" : "!text-6xl font-bold "}`}
              >
                {showBreadcrumb ? formattedSubSection : title}
              </h1>
            </div>
            <div className="flex-1 flex flex-col items-start ml-8">
              {subtitle && (
                <p className="text-lg text-white max-w-xl mb-6 leading-relaxed text-left">
                  {subtitle}
                </p>
              )}
              {showCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base border-2 !border-white !bg-transparent text-white hover:!bg-white hover:text-black px-8"
                >
                  Learn more about us
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
