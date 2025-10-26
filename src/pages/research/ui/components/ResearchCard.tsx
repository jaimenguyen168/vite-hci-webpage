/**
 * Displays a single research project as a card with image, title, description, and action buttons.
 * This component is reusable and can be used in different contexts throughout the application.
 */

import { DESIGN_TOKENS } from "../../constants/design";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ResearchProject } from "../../types";
import { Code, FileText, Mic, Share2, SquarePlay } from "lucide-react";

interface ResearchCardProps {
  research: ResearchProject;
  index: number;
}

export function ResearchCard({ research, index }: ResearchCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  const renderIcon = (label: string) => {
    switch (label) {
      case "PDF":
        return <FileText size={12} />;
      case "Code":
        return <Code size={12} />;
      case "Demo":
        return <SquarePlay size={12} />;
      case "Talk":
        return <Mic size={12} />;
      case "Cite":
        return <Share2 size={12} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div
        className={`w-full ${DESIGN_TOKENS.spacing.cardImageHeight} overflow-hidden`}
      >
        <img
          src={research.image}
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
              {renderIcon(action.label)}
              <span>{action.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
