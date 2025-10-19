import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Title from "@/components/Title.tsx";
import { Link } from "react-router-dom";

interface FeaturedProject {
  id: string;
  title: string;
  authors: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "chatgpt-study",
    title: "\"All Roads Lead to ChatGPT\": How Generative AI is Eroding Social Interactions and Student Learning Communities",
    authors: "I Hou, O Man, K Hamilton, S Muthusekaran..."
  },
  {
    id: "hackathon-leadership",
    title: "Hacking Student Leadership: Peer Mentorship and Leadership Skill Development Among Hackathon Organizers",
    authors: "K Patel, A Tran, C Kapp, D Bicalho..."
  }
];

const BeyondTheLabSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-8"
    >
      <Title title="Beyond the Lab" classname="font-medium" />

      <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8 w-full lg:max-w-1/2">
        Our lab goes beyond research—sponsoring events like <strong>OwlHacks</strong>, where
        students collaborate, create, and connect with alumni and industry
        professionals to bring human-centered ideas to life.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="transform -rotate-3 rounded-[64px] overflow-hidden shadow-lg">
          <img
            src="/images/cover/3-studio.jpg"
            alt="Lab/Event participants collaborating"
            className="w-full h-80 object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="pl-0 lg:pl-8">
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6">Featured Projects</h3>
          <div className="space-y-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <h4 className="text-sm lg:text-base text-gray-900 mb-2 leading-snug underline decoration-gray-300 hover:decoration-gray-600 transition-colors cursor-pointer">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-xs lg:text-sm">{project.authors}</p>
              </motion.div>
            ))}
          </div>
          <Link to="/research">
            <Button
              className="!bg-black text-white !rounded-full !px-12 !text-sm hover:!bg-gray-700 transition-colors mt-8"
              size="sm"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default BeyondTheLabSection;