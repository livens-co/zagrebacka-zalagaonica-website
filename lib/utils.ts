import { Product } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

export enum SortBy {
  NAME = 'name',
  PRICE = 'price',
}

export function sortProducts(products: Product[], sortBy: SortBy): Product[] {
  switch (sortBy) {
    case SortBy.NAME:
      return products.slice().sort((a, b) => a.name.localeCompare(b.name));
    case SortBy.PRICE:
      return products.slice().sort((a, b) => a.price - b.price);
    default:
      return products;
  }
}