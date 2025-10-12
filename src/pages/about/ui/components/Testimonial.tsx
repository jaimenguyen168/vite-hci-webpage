import { User, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  title: string;
  text: string;
  imageSrc?: string;
}

const Testimonial = ({ name, title, text, imageSrc }: TestimonialProps) => {
  return (
    <Card className="shadow-lg py-0 rounded-4xl">
      <CardContent className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center space-x-4">
          {/* Profile Section */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
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
            <div className="mt-4 text-center md:text-left">
              <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 relative">
            {/* Decorative quote icons */}
            <Quote
              className="absolute -top-2 -left-12 size-8 text-pink-200 rotate-180"
              fill="currentColor"
            />
            <Quote
              className="absolute bottom-6 -right-2 size-8 text-pink-200"
              fill="currentColor"
            />

            <div
              className="text-gray-700 leading-relaxed mb-6 relative z-10 font-outfit text-sm"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <p className="text-lg font-semibold text-gray-900 relative z-10">
              — {name}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
