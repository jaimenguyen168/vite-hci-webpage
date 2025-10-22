import { useSearchParams } from "react-router-dom";
import CurrentMembersView from "@/pages/people/ui/views/CurrentMembersView.tsx";
import AlumniView from "@/pages/people/ui/views/AlumniView.tsx";
import CollaboratorsView from "@/pages/people/ui/views/CollaboratorsView.tsx";
import { useEffect, useState } from "react";
import type { Person } from "@/pages/people/types.ts";
import client from "../../../../../tina/__generated__/client.ts";

const PeoplePage = () => {
  const [searchParams] = useSearchParams();
  const sub = searchParams.get("sub");

  const [peopleData, setPeopleData] = useState<Person[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.queries.people({
          relativePath: "people.json",
        });

        setPeopleData((response.data.people.people as Person[]) || []);
      } catch (error) {
        console.error("Error fetching people data from Tina:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!peopleData) {
    return <div>Error loading content</div>;
  }

  const activeMembers = peopleData?.filter((p) => p.status === "active");
  const alumniMembers = peopleData?.filter((p) => p.status === "alumni");
  const collaborators = peopleData?.filter((p) => p.status === "collaborator");

  const renderContent = () => {
    switch (sub) {
      case "alumni":
        return <AlumniView alumniMembers={alumniMembers} />;
      case "collaborators":
        return <CollaboratorsView collaborators={collaborators} />;
      default:
        return <CurrentMembersView activeMembers={activeMembers} />;
    }
  };

  return <div className="prose prose-lg max-w-none">{renderContent()}</div>;
};

export default PeoplePage;
