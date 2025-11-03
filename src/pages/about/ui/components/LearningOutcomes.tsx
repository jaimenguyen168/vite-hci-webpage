import { Card, CardContent } from "@/components/ui/card.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Title from "@/components/Title.tsx";

type LearningOutcomes = {
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
  alumni?: Array<{
    name: string;
    title: string;
    quote: string;
    img: string;
  }>;
};

export default function LearningOutcomes({content}: {content: LearningOutcomes;}) {
  return (
    <div className="relative">
      <Card
        className="shadow-lg font-roboto"
        style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}
      >
        <CardContent className="px-6 md:px-8 py-6">
          <Title title={content.title} />
          <ul className="list-none space-y-3 text-lg py-3">
            {content.items.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>: {item.description}
              </li>
            ))}
          </ul>

          {/* Alumni Testimonials Section */}
          {content.alumni && content.alumni.length > 0 && (
            <div className="">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {content.alumni.map((alumnus, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                      <Card className="mt-6 h-full bg-gray-50 border-none shadow-lg justify-between rounded-2xl" style={{ backgroundColor: "#FFFFFF"}}>
                        <CardContent className="px-6 md:px-8 pt-6 pb-0 flex flex-col h-[400px] relative">
                          {/* Quote Icon (Top Left) */}
                          <Quote
                            className="absolute left-3 top-6 text-pink-200 size-8 md:size-10 rotate-180"
                            fill="currentColor"
                          />

                          {/* Image at top center */}
                          <div className="flex justify-center">
                            <img
                              src={alumnus.img}
                              alt={alumnus.name}
                              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md"
                            />
                          </div>

                          {/* Quote Text */}
                          <div className="flex-1 flex items-center">
                            <div
                              className="text-gray-700 leading-relaxed font-outfit text-base md:text-sm text-center px-5"
                              dangerouslySetInnerHTML={{ __html: alumnus.quote }}
                            />
                          </div>

                          {/* Quote Icon (Bottom Right) */}
                          <Quote
                            className="absolute right-3 bottom-10 text-pink-200 size-8 md:size-10"
                            fill="currentColor"
                          />

                          {/* Alumni Name - Fixed at bottom */}
                          <div className="mt-auto text-center flex-shrink-0">
                            <h3 className="font-semibold text-lg md:text-xl">— {alumnus.name}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 size-10 !bg-white" />
                <CarouselNext className="right-4 size-10 !bg-white" />
              </Carousel>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
