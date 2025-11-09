import { useSearchParams } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import {
  useActiveMembers,
  useAlumniMembers,
  useCollaborators,
} from "@/pages/people/hooks/usePeopleData.ts";
import CurrentMembersView from "@/pages/people/ui/views/CurrentMembersView.tsx";
import LoadingSpinner from "@/components/LoadingSpinner.tsx";
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

  if (currentQuery.isLoading) {
    return <LoadingSpinner />;
  }

  if (currentQuery.isError) {
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
