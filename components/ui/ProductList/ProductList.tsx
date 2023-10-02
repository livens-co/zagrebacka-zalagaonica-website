import { Product } from '@/types';

import './style.scss';
import NoResults from '@/components/NoResults/NoResults';
import ProductCard from '../ProductCard/ProductCard';

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className='productList'>
      <h3>{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className='products'>
        {items.map((item) => (
          <ProductCard key={item.id} data={item}/>
        )).slice(0,4)}
      </div>
    </div>
  );
};

export default ProductList;
