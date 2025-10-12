import { useSearchParams } from "react-router-dom";
import AboutContentView from "@/pages/about/ui/views/AboutContentView.tsx";
import EventsContentView from "@/pages/about/ui/views/EventsContentView.tsx";
import ContactContentView from "@/pages/about/ui/views/ContactContentView.tsx";

const AboutPage = () => {
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");

  const renderContent = () => {
    switch (sub) {
      case "events":
        return <EventsContentView />;
      case "contact-us":
        return <ContactContentView />;
      default:
        return <AboutContentView />;
    }
  };

  return <div className="prose prose-lg max-w-none">{renderContent()}</div>;
};

export default AboutPage;
