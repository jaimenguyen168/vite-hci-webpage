import type { CommunityResearchContent } from "../../types";
import Title from "@/components/Title.tsx";

interface CommunityResearchProps {
  content: CommunityResearchContent;
}

export default function CommunityResearch({ content }: CommunityResearchProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center font-roboto">
      {/* Left: Text Content */}
      <div>
        <Title title={content.title} />
        <p className="text-base xl:text-lg leading-relaxed">
          {content.description}
        </p>
      </div>

      {/* Right: Video */}
      <div className="rounded-3xl overflow-hidden shadow-lg aspect-video">
        <iframe
          src={content.video}
          title="Community Research Video"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
