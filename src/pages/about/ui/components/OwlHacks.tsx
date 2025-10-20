import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils.ts";

const OwlHacks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start font-roboto">
        <div>
            <h2 className="text-3xl font-bold text-gray-900">Owl Hacks</h2>

            <p className="mt-4">
                Our HCI Lab at Temple proudly sponsors OwlHacks, the university’s annual hackathon 
                that brings together creative students from all disciplines to design, build, and innovate.
                <br /><br />
                Through this event, we celebrate collaboration, accessibility, and the spirit of human-centered design—empowering students 
                to turn ideas into impactful, user-focused technologies.
            </p>
        </div>
        <div className="transform rotate-3 rounded-[64px] overflow-hidden shadow-lg">
          <img
            src={getImagePath("/images/cover/5-studio.JPG")}
            alt="Lab/Event participants collaborating"
            className="w-full h-80 object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start font-roboto py-10">
        <div className="transform -rotate-3 rounded-[64px] overflow-hidden shadow-lg">
          <img
            src={getImagePath("/images/cover/5-studio.JPG")}
            alt="Lab/Event participants collaborating"
            className="w-full h-80 object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div>
            <h2 className="text-3xl font-bold text-gray-900">Not Just a Hackathon</h2>

            <p className="mt-4">
                OwlHacks features panels with Temple alumni now working in the tech and design industry, 
                giving students a chance to learn from real-world experiences and explore diverse career paths
                 in human-centered technology.
            </p>

            <div className="mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Want to find out more?
              </h2>
              <div className="mt-6">
                <Button
                  className="text-black !rounded-full !text-sm hover:!bg-gray-200 ring-2 ring-black"
                  size="sm"
                  onClick={() => window.open("https://owlhacks.com", "_blank")}
                >
                  Check Out the Owl-Hacks Website
                </Button>
              </div>
            </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OwlHacks;
