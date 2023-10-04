import getCategories from '@/actions/get-categories';
import './style.scss';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 3;

const CategoriesPage = async () => {
  const categories = await getCategories();

  return (
    <div className="categoriesPage">
      <h1>Ponuda</h1>
      <div className="categoriesList">
        {categories.map((item) => (
          <Link
            href={`/ponuda/${item.categorySlug}`}
            key={item.id}
            className="categoryCard"
          >
            <Image src={item.billboard?.imageUrl} alt={item.name} fill />
            <div className="imageOverlay" />
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
