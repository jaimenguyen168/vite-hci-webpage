import { BookOpen, Globe, Users } from "lucide-react";

const HciTagsHero = () => {
  return (
    <div className="flex flex-row items-start space-x-4 md:space-x-6 xl:space-x-12 w-full">
      {/* Main title block */}
      <div className="bg-primary-red-800 text-white pl-3 xl:pl-4.5 pb-3 font-bold flex-shrink-0 relative size-36 md:size-48 lg:size-64 xl:size-72 items-end justify-end">
        <div className="flex flex-col h-full justify-end">
          <p className="text-xl md:text-4xl xl:!text-6xl">our</p>
          <p className="text-xl md:text-4xl xl:!text-6xl">research</p>
          <p className="text-xl md:text-4xl xl:!text-6xl">focuses</p>
        </div>

        <div className="absolute top-0 right-8 md:right-12 xl:right-16 size-8 md:size-12 xl:size-16 bg-white" />
        <div className="absolute top-0 right-0 size-8 md:size-12 xl:size-16 bg-primary-red" />
        <div className="absolute top-8 md:top-12 right-0 xl:top-16 size-8 md:size-12 xl:size-16 bg-white" />
      </div>

      <div className="flex flex-wrap items-center gap-2 md:gap-4 xl:gap-6">
        {/* Social Computing tag */}
        <div className="bg-[#067AAB] text-white px-2 md:px-4 xl:px-6 py-1 md:py-2 xl:py-3 rounded-2xl text-sm md:text-2xl xl:text-3xl flex-shrink-0 font-medium tracking-wider font-jetbrains-mono uppercase">
          Social Computing
        </div>

        <Users className="size-6 md:size-11 xl:size-16" />

        {/* GenAI tag */}
        <div className="bg-[#E29500] px-2 md:px-4 xl:px-6 py-1 md:py-2 xl:py-3 rounded-full text-sm md:text-2xl xl:text-3xl font-medium tracking-wide flex-shrink-0">
          GenAI & Education
        </div>

        <BookOpen className="size-6 md:size-11 xl:size-16" />

        {/* Accessible Technology tag */}
        <div className="bg-[#028683] text-white px-2 md:px-4 xl:px-6 py-1 md:py-2 xl:py-3 rounded-2xl text-sm md:text-2xl xl:text-3xl font-semibold flex-shrink-0">
          Accessible Technology
        </div>

        <Globe className="size-6 md:size-11 xl:size-16" />
      </div>
    </div>
  );
};

export default HciTagsHero;
