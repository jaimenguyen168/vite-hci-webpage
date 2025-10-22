import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import SponsorModal from "@/pages/sponsors/ui/components/SponsorModal.tsx";
import SponsorCard from "@/pages/sponsors/ui/components/SponsorCard.tsx";
import sponsorsData from "@/pages/sponsors/content/sponsors.json";
import Title from "@/components/Title.tsx";

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

const Sponsors = () => {
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "50px" });

  const openModal = (sponsor: Sponsor) => {
    setSelectedSponsor(sponsor);
  };

  const closeModal = () => {
    setSelectedSponsor(null);
  };

  // Show blank page for "Interested in sponsoring?" tab
  if (sub === "become-our-sponsor") {
    return <div><h1 className="text-3xl md:text-4xl font-bold text-black">TBD</h1></div>;
  }

  return (
    <div className="w-full py-4 container mx-auto">
      {/* Header */}
      <motion.div 
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="px-8 space-y-6"
      >
        <div className="max-w-6xl">
          <Title title="Our Sponsors" />
          <div 
            className="border-l-8 pl-8 mb-12"
            style={{ borderLeftColor: '#9D3747' }}
          >
            <h2 className="text-base md:text-lg xl:text-2xl leading-relaxed text-gray-700">
              Thank you to our sponsors for their support! To learn more about becoming a sponsor of our lab,{" "}
              <a href="#" className="underline text-blue-600 hover:text-blue-800">
                visit this page
              </a>
              .
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Sponsor Cards */}
      <motion.div 
        ref={cardsRef}
        initial={{ opacity: 0 }}
        animate={isCardsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="px-8 space-y-6"
      >
        {sponsorsData.sponsors.map((sponsor, index) => (
          <SponsorCard
            key={sponsor.id}
            sponsor={sponsor}
            onClick={() => openModal(sponsor)}
            index={index}
          />
        ))}
      </motion.div>

      {/* Modal for detailed grant information */}
      <SponsorModal sponsor={selectedSponsor} onClose={closeModal} />
    </div>
  );
};

export default Sponsors;
