import ImageCarousel from "@/components/ImageCarousel";
import { AccessibleLink } from "@/components/AccessibleLink.tsx";
import CustomButton from "@/components/customs/button.tsx";
import { routeContent } from "@/constants/routeConfig.ts";
import { BorderTitle } from "@/components/customs/title.tsx";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="flex flex-col gap-6">
        <BorderTitle title="Why join HCI Lab?" />
        <p className="text-base md:text-lg xl:text-xl text-gray-700 leading-relaxed mt-4">
          Being part of a research lab builds real-world skills, from critical
          thinking to teamwork. Students gain mentorship and hands-on
          experience, while job opportunities open doors to future careers in
          academia, healthcare, and industry.
        </p>
        <AccessibleLink
          to="/about"
          customAriaLabel={routeContent.about.linkDescription}
        >
          <CustomButton
            text="Learn More"
            ariaLabel={routeContent.about.linkDescription}
          />
        </AccessibleLink>
      </div>

      <div className="relative">
        <ImageCarousel
          images={images}
          height="h-72"
          roundedClassName="rounded-bl-[100px]"
          showPagination={true}
          showNavigation={true}
        />
      </div>
    </div>
  );
};

export default WhyHCILabSection;
