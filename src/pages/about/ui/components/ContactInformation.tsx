import { Card } from "@/components/ui/card";


const ContactInformation = () => {
  return (
    <Card className="shadow-lg font-roboto" style={{ borderRadius: "2rem", backgroundColor: "#FAFAFA" }}>
      <div className="px-6 md:px-8 py-6">
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Mailing Address</h3>
              <p className="text-gray-700 leading-relaxed">
                Temple University HCI Lab<br />
                1801 N. Broad Street<br />
                Philadelphia, PA 19122
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:hcilab@temple.edu" className="text-blue-600 hover:underline">
                hcilab@temple.edu
              </a>
              <p className="text-gray-700 mt-1">or use the form below</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">How To Find Us</h3>
              <p className="text-gray-700 leading-relaxed">
                The HCI Lab is located in the Science Education and Research Center at Temple University.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Directions and parking
              </a>
            </div>
          </div>

          {/* Right: General Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Lab Hours</h3>
              <p className="text-gray-700 leading-relaxed">
                Monday - Friday: 9:00 a.m. - 5:00 p.m.<br />
                Saturday - Sunday: CLOSED
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Note</h3>
              <p className="text-gray-700 leading-relaxed">
                The HCI Lab is closed on all{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Temple University Holidays
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ContactInformation;