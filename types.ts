export interface Billboard {
  label: string;
  id: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  categorySlug: string;
  name: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
}

export interface Product {
  date: string | number | Date;
  id: string;
  category: Category;
  name: string;
  price: number;
  productSlug: string;
  description: string;
  paymentMethod: string;
  isFeatured: boolean;
  brand: Brand;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
  priority: number;
}

export interface Brand {
  id: string;
  brandSlug: string;
  name: string;
  category: Category;
  isActive: boolean;
  isFeatured: boolean;
}

export interface Blog {
  id: string;
  blogSlug: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  description: string;
} 