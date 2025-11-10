import ContactInformation from "../components/ContactInformation";
import ContactForm from "../components/ContactForm";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactContentView = () => {
  const contactInfoRef = useRef(null);
  const contactFormRef = useRef(null);

  const isContactInfoInView = useInView(contactInfoRef, { once: true });
  const isContactFormInView = useInView(contactFormRef, { once: true });

  return (
    <div className="space-y-8 pb-16">
      <motion.div
        ref={contactInfoRef}
        initial={{ opacity: 0, y: 30 }}
        animate={
          isContactInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.8 }}
      >
        <ContactInformation />
      </motion.div>

      <motion.div
        ref={contactFormRef}
        initial={{ opacity: 0, y: 30 }}
        animate={
          isContactFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.8 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
};
export default ContactContentView;
