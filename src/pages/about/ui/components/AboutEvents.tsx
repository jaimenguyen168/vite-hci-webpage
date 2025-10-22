import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils.ts";

interface AboutContent {
  title1: string;
  description1: string;
  image1: string;
  image1Alt: string;
  title2: string;
  description2: string;
  image2: string;
  image2Alt: string;
  ctaTitle: string;
  buttonText: string;
  buttonLink: string;
}

const aboutEventsContents: AboutContent = {
  "title1": "Owl Hacks",
  "description1": "Our HCI Lab at Temple proudly sponsors OwlHacks, the university's annual hackathon that brings together creative students from all disciplines to design, build, and innovate.<br><br>Through this event, we celebrate collaboration, accessibility, and the spirit of human-centered design—empowering students to turn ideas into impactful, user-focused technologies.",
  "image1": "/images/cover/5-studio.JPG",
  "image1Alt": "Lab/Event participants collaborating",
  "title2": "Not Just a Hackathon",
  "description2": "OwlHacks features panels with Temple alumni now working in the tech and design industry, giving students a chance to learn from real-world experiences and explore diverse career paths in human-centered technology.",
  "image2": "/images/cover/5-studio.JPG",
  "image2Alt": "Lab/Event participants collaborating",
  "ctaTitle": "Want to find out more?",
  "buttonText": "Check Out the Owl-Hacks Website",
  "buttonLink": "https://owlhacks.com"
}

export default function AboutEvents() {
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
          <h2 className="text-3xl font-bold text-gray-900">{aboutEventsContents.title1}</h2>
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: aboutEventsContents.description1 }} />
        </div>
        <div className="transform rotate-3 rounded-[64px] overflow-hidden shadow-lg">
          <img
            src={getImagePath(aboutEventsContents.image1)}
            alt={aboutEventsContents.image1Alt}
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start font-roboto py-10">
        <div className="transform -rotate-3 rounded-[64px] overflow-hidden shadow-lg">
          <img
            src={getImagePath(aboutEventsContents.image2)}
            alt={aboutEventsContents.image2Alt}
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{aboutEventsContents.title2}</h2>
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: aboutEventsContents.description2 }} />

          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {aboutEventsContents.ctaTitle}
            </h2>
            <div className="flex mt-4">
              <Button
                className="text-black !rounded-full !text-sm hover:!bg-gray-200 ring-2 ring-black"
                size="sm"
                onClick={() => window.open(aboutEventsContents.buttonLink, "_blank")}
              >
                {aboutEventsContents.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
