'use client';

import { Product } from '@/types';
import './style.scss'; 
// import Image from 'next/image';
// import Link from 'next/link';
// import Currency from '../currency';

// interface ProductCardProps {
//   data: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
//   return (
//     <Link href={`/proizvodi/${data?.productSlug}`} className="productCard">
//       <div className="productImage">
//         <Image src={data?.images?.[0]?.url} fill alt="Image" />
//       </div>
//       <div className="productInfo">
//         <p>{data?.category?.name}</p>
//         <h2>{data?.name}</h2>
//         <h3>
//           <Currency value={data?.price} />
//         </h3>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

import Image from 'next/image';
import Link from 'next/link';
import Currency from '../currency';

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  // Sort the images by incrementValue in ascending order
  const sortedImages = [...data.images].sort((a, b) => a.priority - b.priority);
  // Select the first image (the one with the lowest increment value)
  const lowestIncrementImage = sortedImages[0];

  return (
    <Link href={`/proizvodi/${data?.productSlug}`} className="productCard">
      <div className="productImage">
        <Image src={lowestIncrementImage?.url} fill alt="Image" />
      </div>
      <div className="productInfo">
        <p>{data?.category?.name}</p>
        <h2>{data?.name}</h2>
        <h3>
          <Currency value={data?.price} />
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;
