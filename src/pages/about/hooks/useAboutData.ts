import { useQuery } from "@tanstack/react-query";
import type { AboutData } from "@/pages/about/types.ts";
import client from "../../../../tina/__generated__/client.ts";

// Base hook - fetch all about data once
export const useAboutData = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const response = await client.queries.about({
        relativePath: "about.json",
      });
      return response.data.about as AboutData;
    },
    staleTime: 5 * 60 * 1000,      // 5 minutes
    gcTime: 10 * 60 * 1000,        // 10 minutes (garbage collection time)
    refetchOnWindowFocus: false,   // Don't refetch when user returns to tab
    retry: 2,                      // Retry failed requests twice
  });
};