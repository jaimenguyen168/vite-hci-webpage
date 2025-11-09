import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '443458db9569d20569e3a8cf6a06e711369fbd66', queries,  });
export default client;
  