import { useSearchParams } from "react-router-dom";
import { useAboutData } from "../../hooks/useAboutData";
import AboutContentView from "@/pages/about/ui/views/AboutContentView.tsx";
import EventsContentView from "@/pages/about/ui/views/EventsContentView.tsx";
import ContactContentView from "@/pages/about/ui/views/ContactContentView.tsx";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";

// Error component with semantic HTML
const ErrorMessage = ({
  message = "Error loading content",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) => (
  <div className="flex items-center justify-center min-h-[200px]" role="alert">
    <div className="text-center">
      <div className="text-red-500 text-lg font-medium mb-2">⚠️ {message}</div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-sm text-primary hover:underline"
          aria-label="Retry loading content"
        >
          Try again
        </button>
      )}
    </div>
  </div>
);

const AboutPage = () => {
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");

  const { data: aboutData, status, error, refetch } = useAboutData();

  // Handle loading state
  if (status === "pending") {
    return <LoadingSpinner />;
  }

  // Handle error state
  if (status === "error") {
    return (
      <ErrorMessage
        message={error?.message || "Failed to load about data"}
        onRetry={refetch}
      />
    );
  }

  const renderContent = () => {
    switch (sub) {
      case "events":
        return <EventsContentView eventsData={aboutData?.events} />;
      case "contact-us":
        return <ContactContentView />;
      default:
        return <AboutContentView
          communityData={aboutData?.communityResearch}
          learningData={aboutData?.learningOutcomes}
        />;
    }
  };

  return <div className="prose prose-lg max-w-none">{renderContent()}</div>;
};

export default AboutPage;
