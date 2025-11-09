import { Card, CardContent } from "@/components/ui/card.tsx";
import { Quote } from "lucide-react";
import type { AlumniTestimonial } from "@/pages/about/types.ts";

export default function Testimony({
  name,
  quote,
  img,
  title,
}: AlumniTestimonial) {
  return (
    <Card
      className="h-full bg-gray-50 border-none shadow-lg justify-between rounded-2xl"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <CardContent className="px-6 md:px-8 py-0 flex flex-col relative">
        {/* Quote Icon (Top Left) */}
        <Quote
          className="absolute left-3 top-6 text-pink-200 size-8 md:size-10 rotate-180"
          fill="currentColor"
        />

        {/* Image at top center */}
        <div className="flex justify-center mb-4">
          <img
            src={img}
            alt={name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* Quote Text */}
        <div className="flex-1 flex items-center">
          <div
            className="text-gray-700 leading-relaxed font-outfit text-base text-center px-5"
            dangerouslySetInnerHTML={{
              __html: quote,
            }}
          />
        </div>

        {/* Quote Icon (Bottom Right) */}
        <Quote
          className="absolute right-3 bottom-10 text-pink-200 size-8 md:size-10"
          fill="currentColor"
        />

        {/* Title */}
        <div className="mt-6 text-center flex-shrink-0">
          <h3 className="font-light text-lg md:text-xl">{title}</h3>
        </div>

        {/* Alumni Name - Fixed at bottom */}
        <div className="mt-auto text-center flex-shrink-0">
          <h3 className="font-semibold text-lg md:text-xl">— {name}</h3>
        </div>
      </CardContent>
    </Card>
  );
}
