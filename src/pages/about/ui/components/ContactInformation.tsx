import Title from "@/components/Title.tsx";

const ContactInformation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <img
          src="/images/about/SERC.png"
          alt="Science Education and Research Center"
          className="w-full h-auto object-cover rounded-lg"
        />
        <p className="mt-2 text-sm flex justify-center">
          Front doors of Science Education and Research Center (SERC)
        </p>
      </div>

      <div className="space-y-2">
        <Title title="Find us in SERC!" />

        <a
          href="https://campusoperations.temple.edu/parking-services"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm xl:text-md leading-relaxed underline hover:text-blue-600"
        >
          Directions and Parking
        </a>

        <p className="text-sm xl:text-md leading-relaxed">
          The Human-Computer Interaction (HCI) Lab meets in the College of Science and Technology at Temple University, located in the Science Education and Research Center (SERC) building. This vibrant space brings together students and researchers to explore the intersection of technology, design, and human experience.
        </p>

        <div>
          <h3 className="font-bold text-lg mb-2">HCI Mailing Address</h3>
          <p className="text-sm leading-relaxed">
            Temple University HCI Lab<br />
            1925 N 12th St (SERC 301)<br />
            Philadelphia, PA 19122
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default ContactInformation;
