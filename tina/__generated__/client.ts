import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'ff0fa037f0d4b72467537c0beb77d9d50459334f', queries,  });
export default client;
  