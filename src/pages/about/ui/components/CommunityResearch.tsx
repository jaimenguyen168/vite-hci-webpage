import { Card, CardContent } from "@/components/ui/card.tsx";
import Title from "@/components/Title.tsx";

type CommunityResearch = {
  title: string;
  description: string;
  video: string;
};

export default function CommunityResearch({
  content,
}: {
  content: CommunityResearch;
}) {
  return (
    <div className="relative">
      <Card
        className="shadow-lg font-roboto"
        style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Description */}
          <CardContent className="px-6 md:px-8 py-6 flex-1">
            <Title title={content.title} />
            <p className="leading-relaxed text-md py-6">
              {content.description}
            </p>
          </CardContent>

          {/* Right: Video */}
          <CardContent className="px-6 md:px-8 py-6 flex-1">
            <div className="relative w-full h-full aspect-video rounded-lg overflow-hidden shadow-md bg-black">
              <iframe
                src={content.video}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
