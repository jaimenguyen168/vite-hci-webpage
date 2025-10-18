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
    <div className="container mx-auto px-8 mb-16">
      <div className="max-w-4xl">
        <div 
          className="border-l-4 pl-8 mb-12" 
          style={{ borderLeftColor: DESIGN_TOKENS.colors.primaryRed }}
        >
          <p className="text-2xl font-roboto leading-relaxed">
            {introText}
          </p>
        </div>
      </div>
    </div>
  );
}
