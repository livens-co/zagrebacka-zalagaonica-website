'use client'

import { Product } from "@/types"
import { useState } from "react";

interface SortProductsProps {
  data: Product[];

}

const SortProducts:React.FC<SortProductsProps> = ({data}) => {

  const [products, setProducts] = useState<Product[]>([]);

  const sortProductsByPrice = () => {
    const sortedProducts = [...data].sort((a, b) =>
      b.price - a.price
    );
    setProducts(sortedProducts);
  };
  console.log(products)

  return (
    <div onClick={()=> sortProductsByPrice()}>SortProducts</div>
  )
}

export default SortProducts