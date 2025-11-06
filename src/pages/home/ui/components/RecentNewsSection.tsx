import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Title from "@/components/Title.tsx";
import { getImagePath } from "@/lib/utils.ts";
import { AccessibleLink } from "@/components/AccessibleLink.tsx";
import { routeContent } from "@/constants/routeConfig.ts";

interface NewsItem {
  id: string;
  date: string;
  title: string;
}

const newsItems: NewsItem[] = [
  {
    id: "news-1",
    date: "MAY 2025",
    title: "Congratulations to our lab members in the Class of 2025!",
  },
  {
    id: "news-2",
    date: "APR 2025",
    title: '"[Paper Name]" accepted into ITiCSe 2025!',
  },
  {
    id: "news-3",
    date: "APR 2025",
    title: '"[Paper Name]" accepted into ITiCSe 2025!',
  },
];

const RecentNewsSection = () => {
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
        <div>
          <Title title="Recent News" classname="font-medium" />

          <div className="space-y-6 p-6 bg-gray-50 rounded-xl">
            {newsItems.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="flex gap-4 items-center"
              >
                <div className="text-sm font-semibold text-gray-900 min-w-[80px]">
                  {news.date}
                </div>
                <div className="text-gray-700 text-sm">{news.title}</div>
              </motion.div>
            ))}
          </div>
          <AccessibleLink
            to="/about?sub=events"
            aria-label={routeContent.about.linkDescription}
          >
            <Button
              className="!bg-red-900 text-white !rounded-full !px-12 !text-sm hover:!bg-red-800 transition-colors mt-8"
              size="sm"
            >
              More Events
            </Button>
          </AccessibleLink>
        </div>
        <div className="transform rotate-3 rounded-3xl overflow-hidden shadow-lg">
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
    </motion.section>
  );
};

export default RecentNewsSection;
