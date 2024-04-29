import { createClient, groq } from "next-sanity";
import { Blog } from "@/types";
import clientConfig from "../config/client-config";

export default async function getBlog(blogSlug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $blogSlug][0]{
      _id,
      title,
      'blogSlug': slug.current,
      date,
      'imageUrl': imageUrl.asset->url,
      content,
      description
    }
    `,
    { blogSlug } 
  );
}
