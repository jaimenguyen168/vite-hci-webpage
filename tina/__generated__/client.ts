import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1015f80c5f2a611bded96727470b298f4f41d20c', queries,  });
export default client;
  