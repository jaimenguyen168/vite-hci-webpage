import { useRef } from "react";
import AboutEvents from "../components/AboutEvents";
import LabLinkedInPosts from "../components/LabLinkedInPosts";
import { motion, useInView } from "framer-motion";
import type { EventsContent } from "../../types";

interface EventsContentViewProps {
  eventsData: EventsContent;
}

const EventsContentView = ({ eventsData }: EventsContentViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-8 pb-16">
        <AboutEvents content={eventsData} />
        <LabLinkedInPosts />
      </div>
    </motion.section>
  );
};
export default EventsContentView;
