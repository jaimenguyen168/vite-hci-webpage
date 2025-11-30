import { motion, useInView } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { Button } from "@/components/ui/button";
import { getImagePath } from "@/lib/utils.ts";
import { AccessibleLink } from "@/components/AccessibleLink.tsx";
import { routeContent } from "@/constants/routeConfig.ts";
import { BorderTitle } from "@/components/customs/title.tsx";
import CustomButton from "@/components/customs/button.tsx";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Image */}
        <PhotoSubTitleTag
          tag={
            <p className="text-sm font-jetbrains-mono">
              Omar Shakir presenting
              <br />
              "Feed-stack" at Temple's
              <br />
              CIS kaldjsflkdsjf...
            </p>
          }
        />

        {/* Right side - Content */}
        <div className="pl-0 lg:pl-8 space-y-6">
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
                className="border-2 border-cyan-700 rounded-bl-[50px] p-6 bg-white hover:shadow-md transition-shadow"
              >
                {/* Blue circle avatar */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-cyan-700 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-lg font-roboto text-gray-900 mb-2 leading-tight underline decoration-gray-300 hover:decoration-gray-600 transition-colors cursor-pointer line-clamp-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-1">
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

// const PhotoSubtitle = ({ subtitle }: { subtitle: string }) => {
//   return (
//     <div className="relative">
//       {/* Image container with polaroid effect */}
//       <div className="relative transform -rotate-3 rounded-2xl overflow-hidden shadow-lg bg-white p-4">
//         <img
//           src={getImagePath("/images/cover/3-studio.jpg")}
//           alt="Lab/Event participants collaborating"
//           className="w-full h-80 object-cover rounded-xl"
//           onError={(e) => {
//             e.currentTarget.style.display = "none";
//           }}
//         />
//         {/* Bottom caption area */}
//         <div className="bg-black text-white px-4 py-3 mt-4 rounded-lg">
//           <p className="text-sm font-jetbrains-mono">{subtitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const PhotoSubTitleTag = ({ tag }: { tag: ReactNode }) => {
  return (
    <div className="relative p-6">
      {/* Image container */}
      <div className="shadow-lg">
        <img
          src={getImagePath("/images/cover/3-studio.jpg")}
          alt="Lab/Event participants collaborating"
          className="w-full h-80 object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Tag */}
        <div className="absolute bottom-4 -right-4 bg-black/75 text-white px-4 py-3 -rotate-24 tape">
          {tag}
        </div>
      </div>
    </div>
  );
};
