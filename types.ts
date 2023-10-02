export interface Billboard {
  label: string;
  id: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  categorySlug: string;
  name: string;
  billboardId: any;
  billboard: Billboard;
}

export interface Product {
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
}

export interface Brand {
  id: string;
  brandSlug: string;
  name: string;
}