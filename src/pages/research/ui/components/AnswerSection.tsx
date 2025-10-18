/**
 * Displays the answer text for a research topic with a red vertical bar on the right.
 * The text is right-aligned and bold for emphasis.
 */

import { DESIGN_TOKENS } from '../../constants/design';

interface AnswerSectionProps {
  answer: string;
}

export function AnswerSection({ answer }: AnswerSectionProps) {
  return (
    <div className="mb-8 flex justify-center">
      <div className="max-w-4xl w-full relative">
        {/* Text Content with Red Bar */}
        <div className="flex items-start">
          <div className="flex-1 pr-6">
            <p className="text-gray-900 text-base md:text-lg leading-relaxed font-sans text-right font-bold">
              {answer}
            </p>
          </div>
          <div 
            className={`${DESIGN_TOKENS.spacing.barWidth} ${DESIGN_TOKENS.spacing.barHeight} flex-shrink-0`}
            style={{ backgroundColor: DESIGN_TOKENS.colors.primaryRed }}
          ></div>
        </div>
      </div>
    </div>
  );
}
