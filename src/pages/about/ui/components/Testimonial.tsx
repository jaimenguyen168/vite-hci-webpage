import { User, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  title: string;
  text: string;
  imageSrc?: string;
  reverse?: boolean;
}

const Testimonial = ({
  name,
  title,
  text,
  imageSrc,
  reverse = false,
}: TestimonialProps) => {
  return (
    <Card className="shadow-sm/20 py-0 rounded-4xl max-w-[52rem] mx-auto">
      <CardContent className="px-14 py-6 lg:p-12">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
        >
          {/* Profile Section */}
          <div className="flex flex-col items-center shrink-0 order-1 md:order-0">
            <div className="w-24 h-24 lg:w-32 xl:h-32 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-16 h-16 text-gray-400" />
              )}
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 relative flex flex-col justify-center order-2 lg:order-none">
            {/* Decorative quote icons */}
            <Quote
              className={`absolute -top-6 ${reverse ? "left-1 lg:-left-8" : "-left-8 lg:-left-12"} size-6 lg:size-8 text-pink-200 rotate-180`}
              fill="currentColor"
            />
            <Quote
              className={`absolute bottom-6 ${reverse ? "right-2 lg:right-4" : "-right-1 lg:-right-2"} size-6 lg:size-8 text-pink-200`}
              fill="currentColor"
            />

            <div
              className="text-gray-700 leading-relaxed mb-6 relative z-10 font-outfit text-sm text-center lg:text-left"
              dangerouslySetInnerHTML={{ __html: text }}
            />

            <div
              className={`flex ${reverse ? "lg:justify-end" : "lg:justify-start"} justify-center`}
            >
              <p className="text-base lg:text-lg font-semibold text-gray-900 relative z-10">
                — {name}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
