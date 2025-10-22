import ContactInformation from "../components/ContactInformation";
import ContactForm from "../components/ContactForm";

const ContactContentView = () => {
  return (
    <div className="space-y-12 pb-16">
      <ContactInformation />
      <ContactForm />
    </div>
  );
};
export default ContactContentView;
