import { createClient, groq } from "next-sanity";
import { Product } from "@/types";
import clientConfig from "../config/client-config";

export default function getFeaturedProducts(): Promise<Product[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "products" && isFeatured == true ] | order(_createdAt desc) {
          _id,
          'slug': slug.current,
           title,
          'categories': categories[]->{
                _id,
                categorySlug,
               title
                     },
            price,
            description,
            paymentMethod,
            isFeatured,
            'brands': brands[]->{
              _id,
              title,
              brandSlug
            },
            'images': images[].asset->url,
          
          }
        `
  );
}
