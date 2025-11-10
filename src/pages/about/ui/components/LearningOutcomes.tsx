import type { LearningOutcomesContent } from "../../types";
import Testimony from "@/pages/about/ui/components/Testimony.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Title from "@/components/Title.tsx";

interface LearningOutcomesProps {
  content: LearningOutcomesContent;
}

export default function LearningOutcomes({ content }: LearningOutcomesProps) {
  const [api, setApi] = useState<CarouselApi>();
  const alumni = content.alumni || [];

  useEffect(() => {
    if (!api) return;

    return () => {
      api.off("select", () => {});
    };
  }, [api]);

  return (
    <section className="">
      <div className="w-full">
        {/* Learning Outcomes Header */}
        <Title title={content.title} />

        {/* Outcomes List */}
        <div className="mb-8 space-y-3">
          {content.items.map((item, index) => (
            <div key={index}>
              <h3 className="text-base xl:text-xl mb-2">
                <span className="font-bold">{item.title}:</span>{" "}
                {item.description}
              </h3>
            </div>
          ))}
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            className="max-w-sm xl:max-w-7xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {alumni.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4  xl:basis-1/2">
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <Testimony
                      name={testimonial.name}
                      quote={testimonial.quote}
                      img={testimonial.img}
                      title={testimonial.title}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 xl:left-4 size-10 !bg-white" />
            <CarouselNext className="right-0 xl:right-4 size-10 !bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
