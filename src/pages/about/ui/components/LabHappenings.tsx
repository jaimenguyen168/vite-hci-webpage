import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousel";
import type { LabHappeningsContent } from "../../types";

interface LabHappeningsProps {
  content: LabHappeningsContent;
}

const LabHappenings = ({ content }: LabHappeningsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <Card
      className="shadow-lg font-roboto"
      style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}
    >
      <CardContent className="px-6 md:px-8 py-6">
        <motion.section
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">
                {content.title}
              </h2>

              <p className="text-base lg:text-lg leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="relative">
              <ImageCarousel
                images={content.images}
                height="h-72"
                showPagination={true}
                showNavigation={true}
                title="Temple HCI Lab History Gallery"
                description="Historical images showcasing the growth and development of Temple University HCI Lab"
              />
            </div>
          </div>
        </motion.section>
      </CardContent>
    </Card>
  );
};

export default LabHappenings;
