import type { LearningOutcomesContent } from "../../types";
import Testimony from "@/pages/about/ui/components/Testimony.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface LearningOutcomesProps {
  content: LearningOutcomesContent;
}

export default function LearningOutcomes({ content }: LearningOutcomesProps) {
  const alumni = content.alumni || [];

  return (
    <section className="px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Learning Outcomes Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">{content.title}</h2>

        {/* Outcomes List */}
        <div className="mb-8 space-y-6">
          {content.items.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl mb-2">
                <span className="font-bold">{item.title}:</span>{" "}
                {item.description}
              </h3>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="hidden xl:block">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {alumni.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/2">
                    <Testimony
                      name={testimonial.name}
                      quote={testimonial.quote}
                      img={testimonial.img}
                      title={testimonial.title}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 !bg-white !size-8" />
              <CarouselNext className="right-4 !bg-white !size-8" />
            </Carousel>
          </div>

          {/* Mobile/Tablet View (below xl) - Carousel with single testimony */}
          <div className="xl:hidden">
            <Carousel className="w-full max-w-xl mx-auto px-6">
              <CarouselContent>
                {alumni.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Testimony
                      name={testimonial.name}
                      quote={testimonial.quote}
                      img={testimonial.img}
                      title={testimonial.title}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 !bg-white !size-8" />
              <CarouselNext className="right-4 !bg-white !size-8" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
