import { createClient, groq } from "next-sanity";
import { Blog } from "@/types";
import clientConfig from "../config/client-config";

export default function getBlogs(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" ] | order(_createdAt desc) {
      _id,
      title,
      'blogSlug': slug.current,
      date,
      'imageUrl': imageUrl.asset->url,
      content,
      description
    }
    `
  );
}
