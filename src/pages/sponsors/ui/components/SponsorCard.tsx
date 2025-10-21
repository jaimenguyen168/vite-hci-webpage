import { Card } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GrantItem from "./GrantItem";

interface Grant {
  title: string;
  projectNumber: string;
  dateRange: string;
  amount: string;
}

interface Sponsor {
  id: string;
  name: string;
  logo: string;
  logoAlt: string;
  grants: Grant[];
}

interface SponsorCardProps {
  sponsor: Sponsor;
  onClick: () => void;
  index: number;
}

const SponsorCard = ({ sponsor, onClick, index }: SponsorCardProps) => {
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
      <Card 
        className="p-4 md:p-6 bg-white rounded-lg shadow-md border-0 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={onClick}
      >
        <div className="flex items-start space-x-3 md:space-x-4">
          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0">
            <img 
              src={sponsor.logo} 
              alt={sponsor.logoAlt} 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-relaxed">
              {sponsor.name}
            </h3>
            <div className="space-y-3">
              <GrantItem grant={sponsor.grants[0]} isCollapsed={true} />
              <div className="ml-4 text-sm text-gray-600">Amount</div>
              <GrantItem grant={sponsor.grants[1] || sponsor.grants[0]} isCollapsed={true} />
              <div className="ml-4 text-sm text-gray-600">Amount</div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SponsorCard;
