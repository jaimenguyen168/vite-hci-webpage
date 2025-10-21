import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
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

interface SponsorModalProps {
  sponsor: Sponsor | null;
  onClose: () => void;
}

const SponsorModal = ({ sponsor, onClose }: SponsorModalProps) => {
  if (!sponsor) return null;

  return (
    <Sheet open={sponsor !== null} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="font-bold text-gray-900 leading-relaxed">{sponsor.name}</SheetTitle>
          <SheetDescription className="text-gray-700 leading-relaxed">
            Detailed grant information and project details
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-4">
          {sponsor.grants.map((grant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <GrantItem grant={grant} isCollapsed={false} />
            </motion.div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SponsorModal;
