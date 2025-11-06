import { useSearchParams } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import {
  useActiveMembers,
  useAlumniMembers,
  useCollaborators,
  usePeopleSEO,
} from "@/pages/people/hooks/usePeopleData.ts";
import CurrentMembersView from "@/pages/people/ui/views/CurrentMembersView.tsx";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
import { useSEO } from "@/hooks/useSEO.ts";
import ErrorMessage from "@/components/ErrorMessage.tsx";

const AlumniView = lazy(() => import("@/pages/people/ui/views/AlumniView.tsx"));
const CollaboratorsView = lazy(
  () => import("@/pages/people/ui/views/CollaboratorsView.tsx"),
);

const PeoplePage = () => {
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [sub]);

  const activeMembers = useActiveMembers();
  const alumniMembers = useAlumniMembers();
  const collaborators = useCollaborators();
  const {
    data: seoData,
    isLoading: seoLoading,
    isError: seoError,
  } = usePeopleSEO();

  const getSEOConfig = () => {
    const baseUrl = window.location.origin;
    const basePath = "/people";

    if (!seoData) {
      return {
        title: "People | Our Research Lab",
        description: "Meet our research team members.",
        keywords: "research team, lab members",
        canonical: `${baseUrl}${basePath}`,
      };
    }

    switch (sub) {
      case "alumni":
        return {
          ...seoData.alumni,
          canonical: `${baseUrl}${basePath}?sub=alumni`,
        };
      case "collaborators":
        return {
          ...seoData.collaborators,
          canonical: `${baseUrl}${basePath}?sub=collaborators`,
        };
      default:
        return {
          ...seoData.current,
          canonical: `${baseUrl}${basePath}`,
        };
    }
  };

  const seoConfig = getSEOConfig();

  useSEO(seoConfig);

  const getCurrentQuery = () => {
    switch (sub) {
      case "alumni":
        return alumniMembers;
      case "collaborators":
        return collaborators;
      default:
        return activeMembers;
    }
  };

  const currentQuery = getCurrentQuery();

  if (currentQuery.isLoading || seoLoading) {
    return <LoadingSpinner />;
  }

  if (currentQuery.isError || seoError) {
    return (
      <>
        <ErrorMessage
          message={currentQuery.error?.message || "Failed to load people data"}
          onRetry={() => currentQuery.refetch?.()}
        />
      </>
    );
  }

  const renderContent = () => {
    switch (sub) {
      case "alumni":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <AlumniView alumniMembers={alumniMembers.data} />
          </Suspense>
        );
      case "collaborators":
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CollaboratorsView collaborators={collaborators.data} />
          </Suspense>
        );
      default:
        return <CurrentMembersView activeMembers={activeMembers.data} />;
    }
  };

  return (
    <main className="prose prose-lg max-w-none" role="main">
      {renderContent()}
    </main>
  );
};

export default PeoplePage;
