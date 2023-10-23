import getProduct from '@/actions/get-product';
import './style.scss';
import Container from '@/components/ui/container';
import getProducts from '@/actions/get-products';
import Gallery from '@/components/ui/gallery/Gallery';
import Link from 'next/link';

import Currency from '@/components/ui/currency';
import ProductList from '@/components/ui/ProductList/ProductList';
import Markdown from 'react-markdown';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productSlug: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productSlug);
  const suggestedProducts = await getProducts({
    categorySlug: product?.category?.categorySlug,
  });

  if (!product) {
    return null;
  }

  

  return (
    <div className="productPage">
      <div className="productPageNav">
        <Link href="/ponuda">Ponuda</Link> /
        <Link href={`/ponuda/${product?.category?.categorySlug}`}>
          {product?.category?.name}
        </Link>{' '}
        /<p>{product?.name}</p>
      </div>
      <div className="productContainer">
        <div className="innerContainer">
          <Gallery images={product.images} />
        </div>
        <div className="innerContainer">
          <div className="infoContainer">
            <h1>{product?.name}</h1>
            <div className="priceContainer">
              <h2>
                <Currency value={product?.price} />
              </h2>
            </div>

            <p>{product?.brand?.name}</p>
          </div>
          <div className="description">
            <Markdown>{product?.description}</Markdown>
          </div>
          <h3>Načini plaćanja:</h3><Markdown>{product?.paymentMethod}</Markdown>
          <div className="contactButton">
            <a href="tel:+385992173494">Nazovite nas</a>
          </div>
        </div>
      </div>

      <div className="suggestedProducts">
        <h2>Povezani proizvodi</h2>
        <ProductList title="" items={suggestedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
