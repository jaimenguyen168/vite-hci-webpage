import { useQuery } from "@tanstack/react-query";
import type { PeopleData } from "@/pages/people/types.ts";
import client from "../../tina/__generated__/client.ts";

export const usePeopleData = () => {
  return useQuery({
    queryKey: ["people"],
    queryFn: async () => {
      const response = await client.queries.people({
        relativePath: "people.json",
      });
      return response.data.people as PeopleData;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    retry: 2,
  });
};

export const usePeopleSEO = () => {
  const { data, ...rest } = usePeopleData();

  return {
    ...rest,
    data: data?.seo,
  };
};

export const useActiveMembers = () => {
  const { data: peopleData, ...rest } = usePeopleData();

  return {
    ...rest,
    data: peopleData?.people?.filter((p) => p.status === "active") || [],
  };
};

export const useAlumniMembers = () => {
  const { data: peopleData, ...rest } = usePeopleData();

  return {
    ...rest,
    data: peopleData?.people?.filter((p) => p.status === "alumni") || [],
  };
};

export const useCollaborators = () => {
  const { data: peopleData, ...rest } = usePeopleData();

  return {
    ...rest,
    data: peopleData?.people?.filter((p) => p.status === "collaborator") || [],
  };
};
