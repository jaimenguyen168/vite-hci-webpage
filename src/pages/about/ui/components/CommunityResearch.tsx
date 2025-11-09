import type { CommunityResearchContent } from "../../types";

interface CommunityResearchProps {
  content: CommunityResearchContent;
}

export default function CommunityResearch({ content }: CommunityResearchProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center font-roboto">
      {/* Left: Text Content */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900">{content.title}</h2>
        <p className="mt-4 text-lg leading-relaxed">{content.description}</p>
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
