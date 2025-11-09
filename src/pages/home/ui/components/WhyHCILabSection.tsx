import { Button } from "@/components/ui/button";
import Title from "@/components/Title.tsx";
import ImageCarousel from "@/components/ImageCarousel";
import { AccessibleLink } from "@/components/AccessibleLink.tsx";
import { routeContent } from "@/constants/routeConfig.ts";

const labImages = [
  {
    src: "/images/cover/3-studio.jpg",
    alt: "Students collaborating in modern university lab",
  },
  {
    src: "/images/cover/5-studio.JPG",
    alt: "Research team working on computer science project",
  },
  {
    src: "/images/cover/6-studio.JPG",
    alt: "University campus building exterior",
  },
  {
    src: "/images/cover/HCI_OpenHouse-5.jpg",
    alt: "Students in technology classroom",
  },
  {
    src: "/images/cover/HCI_OpenHouse-38.jpg",
    alt: "HCI research equipment and workspace",
  },
];

interface WhyHCILabSectionProps {
  images?: Array<{
    src: string;
    alt: string;
  }>;
}

const WhyHCILabSection = ({ images = labImages }: WhyHCILabSectionProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div>
        <Title title="Why HCI Lab?" classname="font-medium" />

        <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
          Being part of a research lab builds real-world skills, from critical
          thinking to teamwork. Students gain mentorship and hands-on
          experience, while job opportunities open doors to future careers in
          academia, healthcare, and industry.
        </p>
        <AccessibleLink
          to="/about"
          customAriaLabel={routeContent.about.linkDescription}
        >
          <Button
            className="!bg-black text-white !rounded-full !px-12 !text-sm hover:!bg-gray-700 transition-colors mt-8"
            size="sm"
            aria-label={routeContent.about.linkDescription}
          >
            Learn More<span className="sr-only"> about HCI Lab</span>
          </Button>
        </AccessibleLink>
      </div>

      <div className="relative">
        <ImageCarousel
          images={images}
          height="h-72"
          showPagination={true}
          showNavigation={true}
        />
      </div>
    </div>
  );
};

export default WhyHCILabSection;
