import { Card, CardContent } from "@/components/ui/card.tsx";
import Title from "@/components/Title.tsx";

type LearningOutcomes = {
  title: string;
  items: Array<{
    title: string;
    description: string;
  }>;
};

export default function LearningOutcomes({
  content,
}: {
  content: LearningOutcomes;
}) {
  return (
    <div className="relative">
      <Card
        className="shadow-lg font-roboto"
        style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}
      >
        <CardContent className="px-6 md:px-8 py-6">
          <Title title={content.title} />
          <ul className="list-none space-y-4 text-lg py-6">
            {content.items.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>: {item.description}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
