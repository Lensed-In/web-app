import { createClient as createUrqlClient } from "urql";
export const APIURL = "https://api.lens.dev";

export const basicClient = new createUrqlClient({
  url: APIURL,
});
