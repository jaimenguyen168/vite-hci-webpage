import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <div className="flex-1 flex w-full bg-primary-red-800 mt-12 md:mt-16 overflow-hidden justify-between items-center pl-0 md:pl-8 h-48 md:h-56 relative">
      <div className="flex-1 flex-col w-full justify-center items-center md:items-start text-center md:text-left px-16 md:px-0 z-10">
        <p className="text-2xl md:text-4xl text-white font-medium font-outfit mb-4">
          Interested in joining?
        </p>
        <Link to="/join">
          <div className="border-3 border-white rounded-sm px-8 md:px-16 py-2 w-fit mb-8 mx-auto md:mx-0 cursor-pointer hover:bg-white hover:text-primary-red-800 text-sm md:text-lg text-white font-medium font-outfit transition-colors duration-300 ease-in-out">
            Apply to Join Us
          </div>
        </Link>
        <div className="w-full h-3 md:h-4 bg-[#FF5E7E]" />
      </div>
      <img
        src="/logos/hci-logo-white.png"
        alt="Temple University HCI Lab logo - Human-Computer Interaction Research Laboratory"
        className="size-96 flex-shrink-0 hidden md:block"
        loading="eager"
        decoding="sync"
        itemProp="logo"
        role="img"
      />

      <img
        src="/logos/hci-logo-white.png"
        alt="Temple University HCI Lab logo - Human-Computer Interaction Research Laboratory"
        className="size-48 flex-shrink-0 block md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"
        loading="eager"
        decoding="sync"
        itemProp="logo"
        role="img"
      />
    </div>
  );
};
export default CallToActionSection;
