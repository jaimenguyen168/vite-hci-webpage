import Title from "@/components/Title.tsx";

const ContactContentView = () => {
  return (
    <div className="w-full mb-8">
      <Title title="Contact Us" />
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Address</h3>
          <p className="text-gray-700">
            Temple University
            <br />
            Department of Computer Science
            <br />
            Philadelphia, PA
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Email</h3>
          <p className="text-gray-700">
            <a
              href="mailto:hcilab@temple.edu"
              className="text-primary-red-800 hover:underline"
            >
              hcilab@temple.edu
            </a>
          </p>
        </div>
        {/* Add more contact information here */}
      </div>
    </div>
  );
};
export default ContactContentView;
