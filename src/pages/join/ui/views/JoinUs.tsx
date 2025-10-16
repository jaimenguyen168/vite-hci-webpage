import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import faqData from "@/pages/join/content/faq.json";
import applyData from "../../../../../content/applications/apply.json";

const JoinUsPage = () => {
  const faqs = faqData.faqs;

  return (
    <div className="w-full py-8">
      <h2 className="font-bold text-gray-900 !text-2xl md:!text-4xl mb-10">
        Any questions before joining?
      </h2>

      <div className="px-0 md:px-6 mb-16">
        <Accordion
          type="single"
          collapsible
          className="space-y-6"
          defaultValue="item-1"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-4xl shadow-lg"
            >
              <AccordionTrigger className="px-6 py-5 !bg-white !border-2 !rounded-full text-left !text-base md:!text-2xl font-medium shadow shadow-gray-300">
                {faq.question}
              </AccordionTrigger>
              {faq.answer && (
                <AccordionContent className="px-6 py-5 text-gray-700 leading-relaxed text-sm md:text-lg">
                  {faq.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Card className="bg-primary-red-900 border-0 shadow-lg !rounded-4xl">
        <CardContent className="px-8 md:px-16 py-8 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            {applyData.title}
          </h2>
          <Button
            variant="outline"
            size="lg"
            className="!bg-transparent text-white !rounded-full !border-2 !border-white hover:!bg-white hover:text-primary-red-900 transition-colors px-8"
            onClick={() => window.open(applyData.button.url, "_blank")}
          >
            {applyData.button.text}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JoinUsPage;
