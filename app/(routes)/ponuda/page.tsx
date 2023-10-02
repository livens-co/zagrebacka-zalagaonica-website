import getCategories from '@/actions/get-categories';
import './style.scss';

export const revalidate = 3;

const CategoriesPage = async () => {
  const categories = await getCategories();

  // console.log(categories)

  return <div>CategoriesPage</div>;
};

export default CategoriesPage;
