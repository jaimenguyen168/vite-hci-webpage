import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn, getImagePath } from "@/lib/utils";

interface ImageCarouselProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  height?: string;
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  // SEO props
  title?: string;
  description?: string;
}

const ImageCarousel = ({
  images,
  height = "h-72",
  className = "",
  showPagination = true,
  showNavigation = true,
  title = "Temple HCI Lab Gallery",
  description = "Images from Temple University Human-Computer Interaction Research Lab",
}: ImageCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const isFirst = current === 1;
  const isLast = current === count;

  if (!images || images.length === 0) {
    return (
      <div
        className={`${height} rounded-3xl bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  const altText = (originalAlt: string) => {
    if (
      originalAlt.toLowerCase().includes("temple") ||
      originalAlt.toLowerCase().includes("hci")
    ) {
      return originalAlt;
    }
    return `${originalAlt} - Temple University HCI Lab`;
  };

  return (
    <div className={`relative ${className}`}>
      {/* SEO: Hidden title and description */}
      <h3 className="sr-only">{title}</h3>
      <p className="sr-only">{description}</p>

      <Carousel setApi={setApi} className="w-full" aria-label={title}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 py-0 shadow-none">
                <CardContent className="p-0">
                  <div
                    className={`relative ${height} rounded-3xl overflow-hidden`}
                  >
                    <img
                      src={getImagePath(image.src)}
                      alt={altText(image.alt)}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      width="800"
                      height="600"
                      itemScope
                      itemType="https://schema.org/ImageObject"
                      itemProp="image"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        // Show fallback
                        const fallback = e.currentTarget
                          .nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    {/* SEO: Hidden context for each image */}
                    <span className="sr-only" itemProp="description">
                      {altText(image.alt)}
                    </span>
                    <meta
                      itemProp="creator"
                      content="Temple University HCI Lab"
                    />

                    <div className="hidden w-full h-full bg-gray-200 items-center justify-center rounded-3xl absolute inset-0">
                      <span className="text-gray-500 text-center px-4">
                        {image.alt}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        {showNavigation && images.length > 1 && (
          <>
            {!isFirst && (
              <CarouselPrevious
                className="left-4 size-10 !bg-white/90 hover:!bg-white"
                aria-label="Previous image"
              />
            )}
            {!isLast && (
              <CarouselNext
                className="right-4 size-10 !bg-white/90 hover:!bg-white"
                aria-label="Next image"
              />
            )}
          </>
        )}
      </Carousel>

      {/* Pagination dots */}
      {showPagination && images.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "size-4 !rounded-full !p-0 transition-all duration-200 hover:scale-110",
                current === index + 1
                  ? "!bg-gray-600 shadow-md"
                  : "!bg-gray-300 hover:!bg-gray-400",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
