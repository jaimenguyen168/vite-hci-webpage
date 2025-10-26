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

type Alumni = {
  title: string;
  description: string;
  alumni: Array<{
    name: string;
    title: string;
    quote: string;
    img: string;
  }>;
};

export default function Alumni({ content }: { content: Alumni }) {
  return (
    <div className="relative">
      <Card className="font-roboto py-0 border-none shadow-none">
        <CardContent className="px-6 md:px-8">
          <Title title={content.title} />
          <p className="leading-relaxed text-md">{content.description}</p>
        </CardContent>

        {/* Alumni Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto px-12"
        >
          <CarouselContent>
            {content.alumni.map((alumnus, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="h-full bg-gray-50 border-none shadow-md">
                  <CardContent className="p-3 md:p-5 flex flex-col justify-between h-[500px] relative">
                    {/* Quote Section */}
                    <div className="flex-1 flex flex-col">
                      {/* Quote Icon (Top Left) */}
                      <Quote
                        className="absolute left-4 top-4 text-pink-200 size-8 md:size-10 rotate-180"
                        fill="currentColor"
                      />

                      {/* Quote Text */}
                      <div
                        className="text-gray-700 leading-relaxed my-auto px-8 md:px-10 relative z-10 font-outfit text-sm text-center max-h-[250px]"
                        dangerouslySetInnerHTML={{ __html: alumnus.quote }}
                      />

                      {/* Quote Icon (Bottom of quote area) */}
                      <Quote
                        className="self-end text-pink-200 size-8 md:size-10"
                        fill="currentColor"
                      />
                    </div>

                    {/* Alumni Info - Fixed at bottom */}
                    <div className="pt-4 flex-shrink-0 space-y-3 text-center">
                      <h3 className="font-semibold text-base md:text-lg">{alumnus.name}</h3>
                      <img
                        src={alumnus.img}
                        alt={alumnus.name}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto border-4 border-white shadow-md"
                      />
                      <p className="text-xs md:text-sm text-gray-600">{alumnus.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>
    </div>
  );
}
