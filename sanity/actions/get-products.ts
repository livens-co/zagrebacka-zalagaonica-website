import { createClient, groq } from "next-sanity";
import { Category, Product } from "@/types";
import clientConfig from "../config/client-config";

export default async function getProducts(
  categorySlug: string): Promise<Product[]>{
    try {
      const response: Category = await createClient(clientConfig).fetch(
        groq`*[_type == "category" && categorySlug.current == $categorySlug][0] {
          title,
          'categorySlug': categorySlug.current,
          'products': *[_type == "products" && references(^._id)] | order(_createdAt desc) {
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
        }`,
        { categorySlug }
      );
  
      const products: Product[] = response?.products || [];
  
      return products;
    } catch (error) {
      console.error("Error fetching products by category:", error);
      // Handle the error or throw it if you want to propagate it
      throw error;
    }
  }
// ): Promise<Product[]> {
//   try {
//     return createClient(clientConfig).fetch(
      // groq`*[_type == "category" && categorySlug.current == $categorySlug][0] {
      //   title,
      //   'categorySlug': categorySlug.current,
      //   'products': *[_type == "products" && references(^._id)] | order(_createdAt desc) {
      //   _id,
      //   'slug': slug.current,
      //    title,
      //   'categories': categories[]->{
      //         _id,
      //         categorySlug,
      //        title
      //              },
      //     price,
      //     description,
      //     paymentMethod,
      //     isFeatured,
      //     'brands': brands[]->{
      //       _id,
      //       title,
      //       brandSlug
      //     },
      //     'images': images[].asset->url,
        
      //   }
      // }`,
//       { categorySlug }
//     );


//   }catch (error) {
//     console.error("Error fetching products by category:", error);
//     // Handle the error or throw it if you want to propagate it
    
  
// }

// *[_type == "products"] | order(_createdAt desc) {
// _id,
// 'slug': slug.current,
// title,
// 'categories': categories[]->{
//   _id,
//   categorySlug,
//   title
// },
// price,
// description,
// paymentMethod,
// isFeatured,
// 'brands': brands[]->{
//   _id,
//   title,
//   brandSlug
// },
// 'images': images[].asset->url,
// }
