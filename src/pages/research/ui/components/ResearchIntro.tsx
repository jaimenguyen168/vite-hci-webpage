/**

 * Displays the main introduction text for the Research page with a red left border.
 * This component provides context about the lab's research philosophy and approach.
 */

import { DESIGN_TOKENS } from '../../constants/design';

interface ResearchIntroProps {
  introText: string;
}

export function ResearchIntro({ introText }: ResearchIntroProps) {
  return (
    <div className="px-8">
      <div className="max-w-6xl">
        <div 
          className="border-l-8 pl-8 mb-12"
          style={{ borderLeftColor: DESIGN_TOKENS.colors.primaryRed }}
        >
          <h2 className="text-base md:text-lg xl:text-2xl leading-relaxed">
            {introText}
          </h2>
        </div>
      </div>
    </div>
  );
}
