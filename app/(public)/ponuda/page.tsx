
import getCategories from '@/sanity/actions/get-categories';
import './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/types';

export const revalidate = 1; 

const CategoriesPage = async () => {
  const categories: Category[] = await getCategories();

  return (
    <div className="categoriesPage">
      <h1>Ponuda</h1>
      <div className="categoriesList">
        {categories.map((item) => (
          <Link
            href={`/ponuda/${item?.categorySlug}`}
            key={item._id}
            className="categoryCard"
          >
            <Image src={item?.imageUrl} alt={item?.title} fill />
            <div className="imageOverlay" />
            <h2>{item?.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
