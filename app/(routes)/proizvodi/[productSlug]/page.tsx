import getProduct from '@/actions/get-product';
import './style.scss';
import Container from '@/components/ui/container';
import getProducts from '@/actions/get-products';
import Gallery from '@/components/ui/gallery/Gallery';
import Link from 'next/link';

import Currency from '@/components/ui/currency';
import ProductList from '@/components/ui/ProductList/ProductList';

export const revalidate = 3;

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
            <p>{product?.description}</p>
          </div>
          <h3>Načini plaćanja: {product?.paymentMethod}</h3>
          <div className="contactButton">
            <a href="tel:+">Nazovite nas</a>
          </div>
        </div>
      </div>
      <Container>
        <ProductList title="Povezani proizvodi" items={suggestedProducts} />
      </Container>
    </div>
  );
};

export default ProductPage;