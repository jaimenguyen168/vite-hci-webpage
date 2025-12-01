import { AccessibleLink } from "@/components/AccessibleLink.tsx";
import CustomButton from "@/components/customs/button.tsx";
import { routeContent } from "@/constants/routeConfig.ts";
import { BorderTitle } from "@/components/customs/title.tsx";
import { getImagePath } from "@/lib/utils.ts";
import TapeTag from "@/components/TapeTag.tsx";

const HubCommunitySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 items-center mt-12">
      <div className="flex flex-col gap-6">
        <BorderTitle title="A Hub for Communities" />
        <p className="text-sm md:text-lg xl:text-xl text-gray-700 leading-relaxed">
          The HCI Lab empowers students with the skills and confidence to
          design, lead, and innovate within their own communities. Through
          hands-on research, projects, and collaboration with organizations like
          <b> ACM, TUDev, OwlByte, and OwlHacks</b> we create pathways for
          students to turn ideas into real-world impact.
        </p>
        <AccessibleLink
          to="/about"
          customAriaLabel={routeContent.about.linkDescription}
        >
          <CustomButton
            text="Explore"
            ariaLabel={routeContent.about.linkDescription}
          />
        </AccessibleLink>
      </div>

      <div className="relative p-4 md:p-6">
        {/* Image container */}
        <div className="shadow-lg">
          <img
            src={getImagePath("/images/cover/3-studio.jpg")}
            alt="Lab/Event participants collaborating"
            className="w-full h-64 md:h-80 object-cover ml-4 md:ml-0"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          {/* Tags */}
          <div className="absolute top-10 -left-2 -rotate-16 px-3 md:px-6 py-1 md:py-2 bg-cyan-600 rounded-full">
            <p className="text-xs md:text-sm text-white font-semibold uppercase">
              #team
            </p>
          </div>

          <div className="absolute top-24 -left-6 rotate-8 px-3 md:px-6 py-1 md:py-2 bg-orange-300 rounded-full">
            <p className="text-xs md:text-sm text-white font-semibold uppercase">
              #community
            </p>
          </div>

          <div className="absolute top-44 left-0 rotate-16 px-3 md:px-6 py-1 md:py-2 bg-pink-300 rounded-full">
            <p className="text-xs md:text-sm text-white font-semibold uppercase">
              #hci
            </p>
          </div>

          <TapeTag position="bottom-left" rotation={-16} color="white">
            <p className="text-xs md:text-sm font-light font-jetbrains-mono leading-tight break-words whitespace-normal max-w-32 md:max-w-40 line-clamp-3">
              Selfie with the Lab 2024 !!!!!
            </p>
          </TapeTag>
        </div>
      </div>
    </div>
  );
};

export default HubCommunitySection;
