import { createClient, groq } from "next-sanity";
import { Category } from "@/types";
import clientConfig from "../config/client-config";

export default function getCategories(): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category"] | order(title asc) {
      _id,
      'categorySlug': categorySlug.current,
      title,
      description,
      'imageUrl': imageUrl.asset->url,
      'isActive': true
    }`
  );
}
