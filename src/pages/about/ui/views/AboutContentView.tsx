import Testimonial from "@/pages/about/ui/components/Testimonial.tsx";
import Title from "@/components/Title.tsx";

const AboutContentView = () => {
  return (
    <div className="w-full mb-8 py-4">
      <Title title="About Our Lab" />
      <p className="text-lg text-gray-700">
        The Temple HCI Lab is dedicated to advancing human-computer interaction
        research through innovative approaches to AI, NLP, and Visualization.
      </p>
      <p className="text-gray-700">
        Our mission is to make complex technologies accessible to everyone,
        empowering non-experts to participate in work that has traditionally
        required specialized training.
      </p>

      <Testimonial
        name="Hannah V. Nguyen"
        title="UX Designer @ URBN"
        text="Being a part of the Temple HCI Lab gave me a new perspective on user research and design. In the lab, I worked with a talented team on a novel chatbot UI project (<strong>Feedstack</strong>), which was both fun, challenging, and rewarding! That experience in conversational UI design helped me land my first full-time role as an Analyst & UX Designer at URBN (Urban Outfitters, Inc) for their retail chatbots. I'm so grateful that but most importantly the memories and people I've met at Temple HCI!"
      />
    </div>
  );
};
export default AboutContentView;
