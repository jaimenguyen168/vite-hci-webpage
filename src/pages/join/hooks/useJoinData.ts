import { useQuery } from "@tanstack/react-query";
import client from "../../../../tina/__generated__/client.ts";
import type { JoinData } from "@/pages/join/types.ts";

export const useJoinData = () => {
  return useQuery({
    queryKey: ["join"],
    queryFn: async () => {
      const response = await client.queries.join({
        relativePath: "join.json",
      });
      return response.data.join as unknown as JoinData;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: false,
    retry: 2,
  });
};

export const useJoinSEO = () => {
  const { data, ...rest } = useJoinData();

  return {
    ...rest,
    data: data?.seo,
  };
};

export const useJoinFAQs = () => {
  const { data, ...rest } = useJoinData();

  return {
    ...rest,
    data: data?.faqs || [],
  };
};

export const useJoinApply = () => {
  const { data, ...rest } = useJoinData();

  return {
    ...rest,
    data: data?.apply || null,
  };
};
