import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/ImageCarousel";

const images = [
  {
    src: "/images/cover/3-studio.jpg",
    alt: "Students collaborating in modern university lab",
  },
  {
    src: "/images/cover/5-studio.JPG",
    alt: "Research team working on computer science project",
  },
  {
    src: "/images/cover/6-studio.JPG",
    alt: "University campus building exterior",
  },
  {
    src: "/images/cover/HCI_OpenHouse-5.jpg",
    alt: "Students in technology classroom",
  },
  {
    src: "/images/cover/HCI_OpenHouse-38.jpg",
    alt: "HCI research equipment and workspace",
  },
];

const LabHistory = () => {
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
                Lab History
              </h2>

              <p className="text-base lg:text-lg leading-relaxed">
                What began as a small group of six researchers in a modest lab
                space has grown into a thriving community of over 50 members in
                just 2–3 years. During this time, our lab has published [insert
                number] peer-reviewed papers and participated in [insert number]
                national and international conferences including:
              </p>
            </div>

            <div className="relative">
              <ImageCarousel
                images={images}
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

export default LabHistory;
