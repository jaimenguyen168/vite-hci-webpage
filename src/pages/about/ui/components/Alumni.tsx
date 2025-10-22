import { Card, CardContent } from "@/components/ui/card.tsx";
import Testimonial from "./Testimonial";
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
        <CardContent className="px-6 md:px-8 py-6">
          <Title title={content.title} />
          <p className="leading-relaxed text-md py-6">{content.description}</p>
        </CardContent>

        {/* Alumni Testimonials */}
        <div className="grid grid-rows-1 md:grid-rows-2 gap-10">
          {content.alumni.map((alumnus, index) => (
            <Testimonial
              key={index}
              name={alumnus.name}
              title={alumnus.title}
              text={alumnus.quote}
              imageSrc={alumnus.img}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
