import { createClient, groq } from "next-sanity";
import { Brand } from "@/types";
import clientConfig from "../config/client-config";

export default function getBrands(): Promise<Brand[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "brand" ] | order(_createdAt desc) {
      _id,
      'brandSlug': brandSlug.current,
      title,
      isActive,
        isFeatured
    }
    `
  );
}
