import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils.ts";
import type { EventsContent } from "../../types";

interface AboutEventsProps {
  content: EventsContent
}

export default function AboutEvents({ content }: AboutEventsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start font-roboto">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{content.title1}</h2>
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: content.description1 }} />
        </div>
        <div className="transform rotate-3 rounded-[64px] overflow-hidden shadow-lg">
          <img
            src={getImagePath(content.image1)}
            alt={content.image1Alt}
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start font-roboto py-10">
        <div className="transform -rotate-3 rounded-[64px] overflow-hidden shadow-lg">
          <img
            src={getImagePath(content.image2)}
            alt={content.image2Alt}
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{content.title2}</h2>
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: content.description2 }} />

          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {content.ctaTitle}
            </h2>
            <div className="flex mt-4">
              <Button
                className="text-black !rounded-full !text-sm hover:!bg-gray-200 ring-2 ring-black"
                size="sm"
                onClick={() => window.open(content.buttonLink, "_blank")}
              >
                {content.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
