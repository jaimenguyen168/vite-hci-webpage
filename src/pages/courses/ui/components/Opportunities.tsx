import { Card, CardContent } from "@/components/ui/card.tsx";
import { getImagePath } from "@/lib/utils.ts";

type OpportunitiesContent = {
  title: string;
  blurb: string;
  logos: Array<{
    alt: string;
    src: string;
    href: string;
  }>;
};

export default function Opportunities({
  content,
}: {
  content: OpportunitiesContent;
}) {
  return (
    <div className="relative pt-6">
      <div className="absolute top-0 left-0 right-0 z-10">
        <div
          className="shadow-sm rounded-full px-6 py-6"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <h3 className="text-2xl md:text-[28px] font-outfit">
            {content.title}
          </h3>
        </div>
      </div>

      <Card
        className="shadow-lg pt-12 font-roboto"
        style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}
      >
        <CardContent className="px-6 md:px-8 py-10">
          <p className="mb-4 text-sm md:text-lg font-roboto">{content.blurb}</p>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {content.logos.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-block transition-transform hover:scale-110"
              >
                <img
                  src={getImagePath(item.src)}
                  alt={item.alt}
                  className="h-12 md:h-16 object-contain"
                />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
