import getProducts from "@/actions/get-products";
import getCategory from "@/actions/get-category";
import getBrands from "@/actions/get-brands";
import Billboard from "@/components/ui/Billboard/Billboard";

import "./style.scss";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/ProductCard/ProductCard";
import NoResults from "@/components/NoResults/NoResults";
import Filter from "./components/filter";
import SortProducts from "./components/sort";
import { sortProducts } from "@/lib/utils";

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
  const brands = await getBrands();

  return (
    <>
      <div className="collectionPage">
        <Container>
          <div className="categoryHeader">
            <h1>{category?.name}</h1>
            <p>{category?.description}</p>
          </div>
          {/* FILTERS */}
          <div className="filterRow">
            <Filter
              valueKey="brandSlug"
              name="Brendovi"
              data={brands}
              categorySlug={category?.categorySlug}
            />
            <p>
              {products.length}{" "}
              {products.length === 1 ? "proizvod" : "proizvoda"}
            </p>
          </div>
        </Container>

        <Container>
          {products.length === 0 && <NoResults />}
          <div className="productList">
            {products.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default CategoryPage;
