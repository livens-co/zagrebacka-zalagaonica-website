import { createClient, groq } from "next-sanity";
import { Product } from "@/types";
import clientConfig from "../config/client-config";

export default async function getProduct(slug: string): Promise<Product> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "products" && slug.current == $slug][0]{
      _id,
      'slug': slug.current,
      title,
      'categories': categories[]->{
        _id,
        'categorySlug': categorySlug.current,
        title
      },
      price,
      description,
      paymentMethod,
      isFeatured,
      'brands': brands[]->{
        _id,
        title,
        'brandSlug': brandSlug.current,
      },
      'images': images[].asset->url,
    }
    `,
    { slug } 
  );
}
