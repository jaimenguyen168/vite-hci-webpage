import type { ReactNode } from "react";
import { getImagePath } from "@/lib/utils.ts";
import TapeTag from "@/components/TapeTag.tsx";

interface PhotoSubTitleTagProps {
  tag: ReactNode;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  rotation?: number;
  tapeColor?: "black" | "white";
  imageSrc?: string;
  altText?: string;
}

const PhotoSubTitleTag = ({
  tag,
  position = "top-right",
  rotation = -24,
  tapeColor = "black",
  imageSrc = "/images/cover/3-studio.jpg",
  altText = "Lab/Event participants collaborating",
}: PhotoSubTitleTagProps) => {
  return (
    <div className="relative p-2 md:p-6">
      {/* Image container */}
      <div className="relative shadow-lg">
        <img
          src={getImagePath(imageSrc)}
          alt={altText}
          className="w-full h-64 md:h-80 object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* SVG Tape Tag */}
        <TapeTag position={position} rotation={rotation} color={tapeColor}>
          {tag}
        </TapeTag>
      </div>
    </div>
  );
};

export default PhotoSubTitleTag;
