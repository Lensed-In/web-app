// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient as createUrqlClient } from "urql";
// import { refreshAuthToken } from "../utils";

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
