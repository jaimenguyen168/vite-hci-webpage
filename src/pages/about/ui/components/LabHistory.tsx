import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

const images = [
  {
    src: "/images/cover/3-studio.jpg",
    alt: "Students collaborating in modern university lab",
  },
  {
    src: "/images/cover/5-studio.JPG",
    alt: "Research team working on computer science project",
  },
  {
    src: "/images/cover/6-studio.JPG",
    alt: "University campus building exterior",
  },
  {
    src: "/images/cover/HCI_OpenHouse-5.jpg",
    alt: "Students in technology classroom",
  },
  {
    src: "/images/cover/HCI_OpenHouse-38.jpg",
    alt: "HCI research equipment and workspace",
  },
];

const LabHistory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
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

  return (
    <Card className="shadow-lg font-roboto" style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}>
      <CardContent className="px-6 md:px-8 py-6">
        <motion.section
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">
                Lab History
              </h2>

              <p className="text-base lg:text-lg leading-relaxed">
                What began as a small group of six researchers in a modest lab space 
                has grown into a thriving community of over 50 members in just 2–3 years. 
                During this time, our lab has published [insert number] peer-reviewed papers 
                and participated in [insert number] national and international conferences including:
              </p>
            </div>

            <div className="relative">
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-0 py-0 shadow-none">
                        <CardContent className="p-0">
                          <div className="relative h-72 rounded-3xl overflow-hidden">
                            <img
                              src={getImagePath(image.src)}
                              alt={image.alt}
                              className="w-full h-full object-cover rounded-3xl"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                            <div className="hidden w-full h-full bg-gray-200 items-center justify-center rounded-3xl">
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
                {isFirst ? null : (
                  <CarouselPrevious className="left-4 size-10 !bg-white" />
                )}
                {isLast ? null : (
                  <CarouselNext className="right-4 size-10 !bg-white" />
                )}
              </Carousel>

              {/* Pagination dots */}
              <div className="mt-6 flex items-center justify-center gap-3">
                {Array.from({ length: count }).map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "size-4 !rounded-full !p-0 transition-colors",
                      current === index + 1 ? "!bg-gray-500" : "!bg-gray-300",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </CardContent>
    </Card>
  );
};

export default LabHistory;
