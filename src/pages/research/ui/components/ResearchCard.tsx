/**
 * Displays a single research project as a card with image, title, description, and action buttons.
 * This component is reusable and can be used in different contexts throughout the application.
 */

import { DESIGN_TOKENS } from "../../constants/design";
import type { ResearchProject } from "../../types";
import { getImagePath } from "@/lib/utils.ts";

interface ResearchCardProps {
  research: ResearchProject;
}

export function ResearchCard({ research }: ResearchCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div
        className={`w-full ${DESIGN_TOKENS.spacing.cardImageHeight} overflow-hidden`}
      >
        <img
          src={getImagePath(research.image)}
          alt={research.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <div className="mb-3">
          <h4 className="font-semibold text-gray-900 text-base leading-tight">
            {research.title}
          </h4>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {research.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {research.actions.map((action, actionIndex) => (
            <a
              key={actionIndex}
              href={action.url}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
            >
              <img
                src={getImagePath(action.icon)}
                alt={action.label}
                className="w-3 h-3"
              />
              <span>{action.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
