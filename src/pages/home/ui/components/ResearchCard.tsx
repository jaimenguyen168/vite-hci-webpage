import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type {LucideIcon} from "lucide-react";

interface ResearchArea {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  icon: LucideIcon;
}

const ResearchCard = ({ research, index }: { research: ResearchArea; index: number }) => {
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
      <Card className="bg-primary-red-900 border-0 shadow-lg !rounded-4xl h-full py-0">
        <CardContent className="p-8 flex flex-col h-full relative">
          <h3 className="text-sm md:text-lg xl:text-2xl font-semibold text-white mb-2">{research.title}</h3>
          <p className="text-white/90 text-xs md:text-sm xl:text-base leading-relaxed mb-4 flex-grow">
            {research.description}
          </p>
          <Button
            variant="outline"
            className="!bg-transparent text-white !rounded-full !border !border-white hover:!bg-white hover:text-primary-red-900 transition-colors self-start"
            onClick={() => window.open(research.buttonUrl, "_blank")}
            size="sm"
          >
            <p className="text-xs md:text-sm xl:text-base">{research.buttonText}</p>
          </Button>

          <research.icon
            className="absolute size-36 md:size-40 xl:size-48 text-white/20 right-12 md:right-6 top-1/2 -translate-y-1/2"
            strokeWidth={1}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResearchCard;
