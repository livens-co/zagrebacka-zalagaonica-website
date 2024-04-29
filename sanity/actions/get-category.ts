import { createClient, groq } from "next-sanity";
import {  Category } from "@/types";
import clientConfig from "../config/client-config";

export default async function getCategory(categorySlug: string): Promise<Category> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "category" && categorySlug.current == $categorySlug][0]{
      _id,
      'categorySlug': categorySlug.current,
      title,
      description,
      'imageUrl': imageUrl.asset->url,
      'isActive': true
    }
    `,
    { categorySlug } 
  );
}
