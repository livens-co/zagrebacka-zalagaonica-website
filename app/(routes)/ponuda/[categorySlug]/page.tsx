import getProducts from '@/actions/get-products';
import getCategory from '@/actions/get-category';
import getBrands from '@/actions/get-brands';
import Billboard from '@/components/ui/Billboard/Billboard';

import './style.scss';
import Container from '@/components/ui/container';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import NoResults from '@/components/NoResults/NoResults';

export const revalidate = 3;

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
  searchParams: {
    brandSlug: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categorySlug: params.categorySlug,
    brandSlug: searchParams.brandSlug,
  });
  const category = await getCategory(params.categorySlug);
  const brand = await getBrands();

  return (
    <div className="collectionPage">
      <Billboard data={category.billboard} />
      <Container>
        {products.length === 0 && <NoResults />}
        <div className="collectionGrid">
          {products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
