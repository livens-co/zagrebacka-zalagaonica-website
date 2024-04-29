import { PortableTextBlock } from "next-sanity";

export interface Billboard {
  label: string;
  id: string;
  imageUrl: string;
}



export interface Product {
  _id: string;
  date: string;
  categories: Category[];
  title: string;
  price: number;
  slug: string;
  description: PortableTextBlock[];
  paymentMethod: PortableTextBlock[];
  isFeatured: boolean;
  brands: Brand[];
  images: string[];
  
}

export interface Category {
  _id: string;
  categorySlug: string;
  title: string;
  description: PortableTextBlock[];
  imageUrl: string;
  isActive: boolean;
  products: Product[];
}

// export interface Image {
//   id: string;
//   url: string;
//   priority: number;
// }

export interface Brand {
  _id: string;
  brandSlug: string;
  title: string;
  category: Category;
  isActive: boolean;
  isFeatured: boolean;
}

export interface Blog {
  _id: string;
  blogSlug: string;
  title: string;
  content:  PortableTextBlock[];
  imageUrl: string;
  date: string;
  description: string;
} 