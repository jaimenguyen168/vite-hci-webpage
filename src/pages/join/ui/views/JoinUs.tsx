import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useJoinData, useJoinSEO } from "@/pages/join/hooks/useJoinData.ts";
import { useSEO } from "@/hooks/useSEO.ts";

const JoinUsPage = () => {
  const { data: joinData, isLoading, isError } = useJoinData();
  const {
    data: seoData,
    isLoading: seoLoading,
    isError: seoError,
  } = useJoinSEO();

  const getSEOConfig = () => {
    const baseUrl = window.location.origin;
    const basePath = "/join";

    if (!seoData) {
      return {
        title: "Join Us | Research Lab",
        description:
          "Join our research lab and contribute to cutting-edge HCI research.",
        keywords: "research lab, join us, apply, HCI research",
        canonical: `${baseUrl}${basePath}`,
      };
    }

    return {
      ...seoData,
      canonical: `${baseUrl}${basePath}`,
    };
  };

  const seoConfig = getSEOConfig();
  useSEO(seoConfig);

  if (isLoading || seoLoading) {
    return <div>Loading...</div>;
  }

  if (isError || seoError || !joinData) {
    return <div>Error loading content</div>;
  }

  const defaultOpenFaq = joinData.faqs?.find((faq) => faq.defaultOpen);
  const defaultValue = defaultOpenFaq ? defaultOpenFaq.question : undefined;

  return (
    <main className="w-full pb-8 pt-4" role="main">
      <h1 className="font-bold text-gray-900 !text-2xl md:!text-3xl xl:!text-4xl mb-8">
        Any questions before joining?
      </h1>

      <div className="px-0 md:px-6 mb-16">
        <Accordion
          type="single"
          collapsible
          className="space-y-6"
          defaultValue={defaultValue}
        >
          {joinData.faqs?.map((faq, index) => (
            <AnimatedAccordionItem key={index} faq={faq} index={index} />
          ))}
        </Accordion>
      </div>

      <Card className="bg-primary-red-900 border-0 shadow-lg !rounded-4xl">
        <CardContent className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            {joinData.apply.title}
          </h2>
          <Button
            variant="outline"
            size="lg"
            className="!bg-transparent text-white !rounded-full !border-2 !border-white hover:!bg-white hover:text-primary-red-900 transition-colors px-8"
            onClick={() => window.open(joinData.apply.button.url, "_blank")}
          >
            {joinData.apply.button.text}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default JoinUsPage;

const AnimatedAccordionItem = ({
  faq,
  index,
}: {
  faq: {
    question: string;
    answer: string;
    defaultOpen?: boolean;
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <AccordionItem
        key={index}
        value={faq.question}
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
    </motion.div>
  );
};
