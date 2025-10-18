import { Accordion } from "@/components/ui/accordion.tsx";
import { ResearchIntro } from "../components/ResearchIntro.tsx";
import { ResearchAccordionItem } from "../components/ResearchAccordionItem.tsx";
import researchData from "../../content/researchTopics.json";
import type { ResearchData } from "../../types";

export default function ResearchPage() {
  const { researchTopics } = researchData as ResearchData;

  const introText = "Research drives innovation, deepens understanding, and shapes solutions to real-world challenges. In our lab, research is more than gathering data—it's a process of discovery, critical thinking, and collaboration that expands knowledge and creates lasting impact.";

  return (
    <div className="w-full py-4 container mx-auto">
      <ResearchIntro introText={introText} />
      <div className="px-8">
        <h2 className="font-bold text-gray-900 !text-2xl md:!text-4xl mb-10">
          Explore common research areas in our lab
        </h2>
        <div className="px-0 md:px-6 mb-16">
          <Accordion type="single" collapsible className="space-y-6" defaultValue="research-1">
            {researchTopics.map((topic) => (
              <ResearchAccordionItem key={topic.id} topic={topic} />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
