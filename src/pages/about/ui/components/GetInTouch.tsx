import Title from "@/components/Title.tsx";
import { Button } from "@/components/ui/button.tsx";

const GetInTouch = () => {
  return (
    <div className="space-y-8">
      <Title title="Get in touch with us!" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Become a Sponsor */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="/images/about/BecomeSponsor.png"
            alt="Become a Sponsor"
            className="w-32 h-32 object-contain"
          />
          <Button
              className="!bg-white text-black !font-bold !border-black !border-4 !rounded-full !px-12 !font-bold hover:!bg-gray-100 transition-colors mt-8"
              size="lg"
            >
              Become a Sponsor
          </Button>
        </div>

        {/* Join the Lab */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="/images/about/JoinTheLab.png"
            alt="Join the Lab"
            className="w-32 h-32 object-contain"
          />
          <Button
              className="!bg-white text-black !font-bold !border-black !border-4 !rounded-full !px-12 !font-bold hover:!bg-gray-100 transition-colors mt-8"
              size="lg"
            >
              Join the Lab
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Email Address */}
        <div>
          <h3 className="font-bold text-lg mb-2">HCI Lab Email Address</h3>
          <a 
            href="mailto:hcilab@temple.edu"
            className="text-sm underline"
          >
            hcilab@temple.edu
          </a>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="font-bold text-lg mb-2">Still Have Questions About Joining?</h3>
          <a
            href="/join#faq"
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            Read some commonly asked questions
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;