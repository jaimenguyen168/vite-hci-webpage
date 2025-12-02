import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AccessibleLink } from "@/components/AccessibleLink.tsx";
import { routeContent } from "@/constants/routeConfig.ts";
import { BorderTitle } from "@/components/customs/title.tsx";
import CustomButton from "@/components/customs/button.tsx";
import { getImagePath } from "@/lib/utils.ts";
import TapeTag from "@/components/TapeTag.tsx";

interface FeaturedProject {
  id: string;
  title: string;
  authors: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "chatgpt-study",
    title:
      '"All Roads Lead to ChatGPT": How Generative AI is Eroding Social Interactions and Student Learning Communities',
    authors: "I Hou, O Man, K Hamilton, S Muthusekaran...",
  },
  {
    id: "hackathon-leadership",
    title:
      '"All Roads Lead to ChatGPT": How Generative AI is Eroding Social Interactions and Student Learning Communities',
    authors: "I Hou, O Man, K Hamilton, S Muthusekaran...",
  },
];

const FeatureProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start mt-0 md:mt-12">
        {/* Left side - Image (order-2 on mobile, order-1 on lg+) */}
        <div className="order-2 lg:order-1">
          <div className="relative p-2 md:p-6">
            {/* Image container */}
            <div className="relative shadow-lg">
              <img
                src={getImagePath("/images/cover/3-studio.jpg")}
                alt={""}
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* SVG Tape Tag */}
              <TapeTag position="bottom-right" rotation={-24} color="black">
                <p className="text-xs md:text-sm font-light font-jetbrains-mono leading-tight break-words whitespace-normal max-w-40 md:max-w-48 line-clamp-3">
                  Omar Shakir presenting "Feed-stack" at Temple's CIS
                </p>
              </TapeTag>
            </div>
          </div>
        </div>

        {/* Right side - Content (order-1 on mobile, order-2 on lg+) */}
        <div className="order-1 lg:order-2 pl-0 lg:pl-8 space-y-6">
          {/* Header with red border */}
          <BorderTitle title="Featured Projects" />

          {/* Project cards */}
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="border-2 border-cyan-700 rounded-bl-[36px] md:rounded-bl-[50px] px-3 md:px-6 py-2 md:py-4 bg-white hover:shadow-md transition-shadow"
              >
                {/* Blue circle avatar */}
                <div className="flex items-start gap-4">
                  <div className="size-12 md:size-16 bg-cyan-700 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-sm md:text-lg font-roboto text-gray-900 mb-2 leading-tight underline decoration-gray-300 hover:decoration-gray-600 transition-colors cursor-pointer line-clamp-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-1">
                      {project.authors}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Explore button */}
          <AccessibleLink
            to="/research"
            customAriaLabel={routeContent.research.linkDescription}
          >
            <CustomButton
              text="Explore"
              ariaLabel="Explore HCI Research Projects"
            />
          </AccessibleLink>
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureProjects;
