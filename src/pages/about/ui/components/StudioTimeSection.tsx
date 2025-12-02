import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils.ts";
import type { StudioTimeContent } from "../../types";
import { useCallback } from "react";
import { Title } from "@/components/customs/title.tsx";

interface StudioTimeProps {
  content: StudioTimeContent;
}

export default function StudioTime({ content }: StudioTimeProps) {
  const handleButtonClick = useCallback(() => {
    window.open(content.buttonLink, "_blank", "noopener,noreferrer");
  }, [content.buttonLink]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 font-roboto">
      {/* Left: Image with Caption */}
      <div className="flex flex-col items-center justify-center">
        {/* Red Box Background */}
        {/* <div className="absolute inset-0 bg-red-500 rounded-3xl scale-105 -z-10" /> */}

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-lg -rotate-3 z-2">
          <img
            src={getImagePath(content.image)}
            alt={content.imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
            width="600"
            height="400"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        {/* Caption outside image container */}
        <p className="text-center text-sm mt-3">{content.imageCaption}</p>
      </div>

      {/* Right: Text Content + Button */}
      <div>
        <Title title={content.title} />
        <p
          className="mt-4 text-base lg:text-lg"
          dangerouslySetInnerHTML={{ __html: content.description }}
        />

        {/* Button */}
        <div className="flex mt-6">
          <Button
            className="text-black !rounded-full !text-sm hover:!bg-gray-200 ring-2 ring-black !bg-white"
            size="sm"
            onClick={handleButtonClick}
          >
            {content.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
