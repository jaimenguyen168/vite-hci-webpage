import { useSearchParams } from "react-router-dom";
import CurrentMembersView from "@/pages/people/ui/views/CurrentMembersView.tsx";
import AlumniView from "@/pages/people/ui/views/AlumniView.tsx";
import CollaboratorsView from "@/pages/people/ui/views/CollaboratorsView.tsx";

const PeoplePage = () => {
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");

  const renderContent = () => {
    switch (sub) {
      case "alumni":
        return <AlumniView />;
      case "collaborators":
        return <CollaboratorsView />;
      default:
        return <CurrentMembersView />;
    }
  };

  return <div className="prose prose-lg max-w-none">{renderContent()}</div>;
};

export default PeoplePage;
