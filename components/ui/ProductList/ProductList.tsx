import { Product } from '@/types';

import './style.scss';
import NoResults from '@/components/NoResults/NoResults';
import ProductCard from '../ProductCard/ProductCard';
import category from '@/sanity/schemas/category-schema';

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="productList">
      {items.length === 0 && <NoResults />}
      {items
        .map((item) => <ProductCard key={item._id} data={item}  />)
        .slice(0, 6)}
    </div>
  );
};

export default ProductList;
