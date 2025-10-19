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
    <div className="mb-12 flex justify-center">
      <div className="w-full relative">
        {/* Text Content with Red Bar */}
        <div className="border-r-8 pl-10 pr-6" style={{ borderColor: DESIGN_TOKENS.colors.primaryRed }}>
          <h2 className="text-base md:text-lg xl:text-2xl leading-relaxed font-sans text-right font-semibold">
            {answer}
          </h2>
        </div>
      </div>
    </div>
  );
}
