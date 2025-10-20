import { Card, CardContent } from "@/components/ui/card.tsx";
import Testimonial from "./Testimonial";

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
    <div className="relative pt-6">
      <Card
        className="shadow-lg font-roboto"
        style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}
      >
        <CardContent className="px-6 md:px-8 py-6">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">
            {content.title}
          </h2>
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
