/**
 * Displays a video with accompanying text content in a responsive layout.
 * Video is positioned on the left, text content on the right.
 */

import { DESIGN_TOKENS } from '../../constants/design';
import type { ResearchVideo } from '../../types';

interface VideoSectionProps {
  video: ResearchVideo;
}

export function VideoSection({ video }: VideoSectionProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <div className={`relative w-full ${DESIGN_TOKENS.spacing.videoHeightMobile} ${DESIGN_TOKENS.spacing.videoHeightDesktop} rounded-lg overflow-hidden shadow-lg`}>
            <iframe
              src={video.url}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {video.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
}
