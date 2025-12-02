import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface ResearchArea {
  id: string;
  title: string;
  description: string;
  buttonUrl: string;
  icon: LucideIcon;
  linkDescription?: string;
}

const ResearchCard = ({
  research,
  index,
}: {
  research: ResearchArea;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
    >
      <Card className="border-0 shadow-lg !rounded-3xl h-full py-0 relative">
        <CardContent className="p-8 flex flex-col h-full relative z-20">
          <h3 className="text-sm md:text-lg xl:text-2xl font-semibold  mb-2">
            {research.title}
          </h3>
          <p className="text-xs md:text-sm xl:text-base leading-relaxed mb-4 flex-grow">
            {research.description}
          </p>
          <Button
            className="!rounded-full !border !border-white hover:!bg-white hover:text-primary-red-900 transition-colors self-start !px-8"
            onClick={() => window.open(research.buttonUrl, "_blank")}
            size="sm"
            aria-label={
              research.linkDescription ||
              `Learn more about ${research.title} research`
            }
          >
            <p className="text-xs md:text-sm xl:text-base">
              Read More
              <span className="sr-only">
                {" "}
                about HCI Lab Research on {research.title}
              </span>
            </p>
          </Button>
        </CardContent>

        <research.icon
          className="absolute size-36 md:size-40 xl:size-48 text-gray-300 right-12 md:right-6 top-1/2 -translate-y-1/2"
          strokeWidth={1}
        />
      </Card>
    </motion.div>
  );
};

export default ResearchCard;
