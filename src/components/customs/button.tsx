import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";

interface CustomButtonProps {
  text: string;
  ariaLabel: string;
}

const CustomButton = ({ text, ariaLabel }: CustomButtonProps) => {
  return (
    <Button
      className="!bg-black text-white !rounded-full hover:!bg-gray-700 transition-colors w-fit uppercase !py-6"
      size="sm"
      aria-label={ariaLabel}
    >
      <p className="text-xs md:text-sm xl:text-lg font-bold font-jetbrains-mono">
        {text}
      </p>
      <ArrowRight />
    </Button>
  );
};

export default CustomButton;
