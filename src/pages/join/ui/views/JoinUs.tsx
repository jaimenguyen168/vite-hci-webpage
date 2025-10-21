import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import faqData from "@/pages/join/content/faq.json";

interface ApplyData {
  title: string;
  button: {
    text: string;
    url: string;
  };
}

const JoinUsPage = () => {
  // const [faqData, setFaqData] = useState(null);
  const [applyData, setApplyData] = useState<ApplyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [applyResponse] = await Promise.all([
          fetch("/content/join/faq.json"),
          fetch("/content/join/apply.json"),
        ]);

        // const faqResult = await faqResponse.json();
        const applyResult = await applyResponse.json();

        // setFaqData(faqResult);
        setApplyData(applyResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!faqData || !applyData) {
    return <div>Error loading content</div>;
  }

  const faqs = faqData.faqs;

  return (
    <div className="w-full pb-8 pt-4">
      <h2 className="font-bold text-gray-900 !text-2xl md:!text-3xl xl:!text-4xl mb-8">
        Any questions before joining?
      </h2>

      <div className="px-0 md:px-6 mb-16">
        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AnimatedAccordionItem key={faq.id} faq={faq} index={index} />
          ))}
        </Accordion>
      </div>

      <Card className="bg-primary-red-900 border-0 shadow-lg !rounded-4xl">
        <CardContent className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
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

const AnimatedAccordionItem = ({
  faq,
  index,
}: {
  faq: { id: string; question: string; answer: string };
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
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
    </motion.div>
  );
};
