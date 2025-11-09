import { useSearchParams } from "react-router-dom";
import { useAboutData } from "../../hooks/useAboutData";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
import { lazy, Suspense, useEffect } from "react";

const AboutContentView = lazy(() => import("@/pages/about/ui/views/AboutContentView.tsx"));
const EventsContentView = lazy(() => import("@/pages/about/ui/views/EventsContentView.tsx"));
const ContactContentView = lazy(() => import("@/pages/about/ui/views/ContactContentView.tsx"));

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

  useEffect(() => {
    if (aboutData) {
      const imagesToPreload = [
        aboutData.studioTime?.image,
        aboutData.events?.image1,
        aboutData.events?.image2,
      ].filter(Boolean);

      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [aboutData]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (status === "error") {
    return (
      <ErrorMessage
        message={error?.message || "Failed to load about data"}
        onRetry={refetch}
      />
    );
  }

  if (!aboutData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500 text-lg">No data available</div>
      </div>
    );
  }

  const renderContent = () => {
    switch (sub) {
      case "events":
        return <EventsContentView eventsData={aboutData.events} />;
      case "contact-us":
        return <ContactContentView />;
      default:
        return (
          <AboutContentView
            communityData={aboutData.communityResearch}
            studioTimeData={aboutData.studioTime}
            learningData={aboutData.learningOutcomes}
            labHappeningsData={aboutData.labHappenings}
          />
        );
    }
  };

  return (
    <div className="prose prose-lg max-w-none">
      <Suspense fallback={<LoadingSpinner />}>
        {renderContent()}
      </Suspense>
    </div>
  );
};

export default AboutPage;
