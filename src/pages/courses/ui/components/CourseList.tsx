import { Card, CardContent } from "@/components/ui/card.tsx";

type CoursesContent = {
  title: string;
  description: string;
  items: string[];
  moreInfoUrl?: string;
};

export default function CourseList({ content }: { content: CoursesContent }) {
  return (
    <div className="relative pt-6">
      <div className="absolute top-0 left-0 right-0 z-10">
        <div
          className="shadow-sm rounded-full px-6 py-6"
          style={{ backgroundColor: "#FAFAFA" }}
        >
          <h3 className="text-xl md:text-[28px] font-outfit">
            {content.title}
          </h3>
        </div>
      </div>

      <Card
        className="shadow-lg pt-12 font-roboto"
        style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}
      >
        <CardContent className="px-6 md:px-8 py-10">
          <p className="mb-4 text-sm md:text-lg">{content.description}</p>
          <ul className="list-none space-y-1 text-sm md:text-lg">
            {content.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {content.moreInfoUrl && (
            <p className="mt-4 text-sm md:text-lg">
              For full course descriptions and more information, visit{" "}
              <a
                href={content.moreInfoUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium"
                style={{ textDecoration: "underline" }}
              >
                {new URL(content.moreInfoUrl).host +
                  new URL(content.moreInfoUrl).pathname}
              </a>
              .
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
