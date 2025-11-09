import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { getImagePath } from "@/lib/utils.ts";
import { usePeopleHeroImages } from "@/pages/people/hooks/usePeopleData.ts";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  children: ReactNode;
  image: string;
  title?: string;
  height?: "small" | "large";
  subtitle?: string;
  showCTA?: boolean;
}

const TRANSITION_DELAY = 10000;

const Hero = ({
  children,
  image,
  title,
  height = "small",
  subtitle,
  showCTA = false,
}: HeroProps) => {
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [count, setCount] = useState(0);

  const heightClass =
    height === "large"
      ? "h-[500px] md:h-[600px] lg:h-[700px]"
      : "h-[400px] md:h-[450px] lg:h-[500px]";

  const [searchParams] = useSearchParams();
  const subSection = searchParams.get("sub");
  const formattedSubSection = subSection
    ? subSection
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : null;

  const isHomePage = location.pathname === "/";

  const showBreadcrumb = subSection && title;

  const peopleHeroImages = usePeopleHeroImages();

  const getHeroImages = () => {
    switch (location.pathname) {
      case "/people":
        return peopleHeroImages;
      default:
        return {
          data: [{ src: image, alt: title || "Hero background", title: "" }],
          isLoading: false,
        };
    }
  };

  const { data: heroImages, isLoading } = getHeroImages();

  useEffect(() => {
    if (heroImages?.length > 0) {
      heroImages.forEach((heroImage, index) => {
        const link = document.createElement("link");
        if (index === 0) {
          link.rel = "preload";
          link.as = "image";
        } else {
          link.rel = "prefetch";
        }
        link.href = getImagePath(heroImage.src);
        document.head.appendChild(link);
      });
    }
  }, [heroImages]);

  useEffect(() => {
    if (heroImages && heroImages.length > 1) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
          setCount(count + 1);
          setIsTransitioning(false);
        }, 100);
      }, TRANSITION_DELAY);

      return () => clearInterval(interval);
    }
  }, [heroImages, currentImageIndex, count]);

  const changeToImage = (index: number) => {
    if (index === currentImageIndex || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setCount(count + 1);
      setIsTransitioning(false);
    }, 100);
  };

  const slideVariants = {
    enter: {
      x: "100%",
      opacity: 1,
      zIndex: 1,
    },
    center: {
      x: 0,
      opacity: 1,
      zIndex: 2,
    },
    exit: {
      x: "-100%",
      opacity: 1,
      zIndex: 1,
    },
  };

  const transition = {
    duration: 1,
    ease: [0.45, 0.05, 0.55, 0.95] as const,
  };

  if (isLoading) {
    return (
      <div
        className={`relative w-screen mx-auto bg-cover ${heightClass} overflow-hidden`}
      >
        <img
          src={getImagePath(image)}
          alt={title || "Hero background"}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition:
              window.innerWidth >= 1024 ? "center 36%" : "center 50%",
          }}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full h-full flex flex-col max-w-7xl mx-auto pt-16 md:pt-20 lg:pt-0">
          {children}
        </div>
      </div>
    );
  }

  const currentImage = heroImages?.[currentImageIndex] || {
    src: image,
    alt: title || "Hero background",
    title: "",
  };

  return (
    <div
      className={`relative w-screen mx-auto bg-cover ${heightClass} overflow-hidden`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {heroImages && heroImages.length > 1 ? (
          <AnimatePresence custom={currentImageIndex}>
            <motion.img
              key={currentImageIndex}
              src={getImagePath(currentImage.src)}
              alt={currentImage.alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition:
                  window.innerWidth >= 1024 ? "center 36%" : "center 50%",
              }}
              variants={slideVariants}
              initial={count === 0 ? "center" : "enter"}
              animate="center"
              exit="exit"
              transition={transition}
              decoding="async"
            />
          </AnimatePresence>
        ) : (
          <img
            src={getImagePath(currentImage.src)}
            alt={currentImage.alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition:
                window.innerWidth >= 1024 ? "center 36%" : "center 50%",
            }}
            decoding="async"
          />
        )}
      </div>

      <div
        className={`absolute inset-0 z-10 ${isHomePage ? "bg-black/50" : "bg-black/40"}`}
      />

      {/* Dot Indicators */}
      {heroImages && heroImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 items-center z-20">
          {heroImages.map((_, index) => (
            <Button
              key={index}
              onClick={() => changeToImage(index)}
              disabled={isTransitioning}
              variant="ghost"
              className={`
          !p-0 !m-0 !rounded-full !size-3 !bg-white transition-all duration-300 ease-out transform
          ${
            index === currentImageIndex
              ? "scale-125 !border-2 !border-black shadow-[0_0_0_1px_white]"
              : "scale-100 opacity-80 hover:opacity-100"
          }
          ${isTransitioning ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
        `}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 w-full h-full flex flex-col max-w-7xl mx-auto pt-16 md:pt-20 lg:pt-0">
        {children}

        {title && (
          <div
            className={`flex-1 flex w-full items-center justify-center px-6 md:px-8 lg:px-16 py-8 ${
              height === "large"
                ? "flex-col lg:flex-row gap-6 lg:gap-0"
                : "flex-row justify-start"
            }`}
          >
            <div
              className={`w-full ${height === "large" ? "lg:flex-1" : "flex-1"} ${
                height === "large" ? "text-center lg:text-left" : "text-left"
              }`}
            >
              {showBreadcrumb && (
                <p className="text-white text-base md:text-lg mb-2">
                  {title} /{" "}
                  <span className="font-semibold">{formattedSubSection}</span>
                </p>
              )}
              <h1
                className={`text-white leading-tight  ${height === "large" ? "!text-5xl md:!text-7xl xl:!text-[110px] font-semibold" : "md:!text-6xl !text-4xl font-bold "}`}
              >
                {showBreadcrumb ? formattedSubSection : title}
              </h1>
            </div>
            {height === "large" && (
              <div className="flex flex-col items-center lg:items-start lg:ml-8 w-full lg:w-auto">
                {subtitle && (
                  <p className="text-base md:text-xl text-white max-w-xl font-medium mb-4 md:mb-6 leading-relaxed text-center lg:text-left">
                    {subtitle}
                  </p>
                )}
                {showCTA && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-sm md:text-base border-2 !border-white !bg-transparent text-white hover:!bg-white hover:text-black px-6 md:px-8"
                  >
                    Learn more about us
                  </Button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
