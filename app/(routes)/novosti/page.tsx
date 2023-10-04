import getBlogs from '@/actions/get-blogs';
import './style.scss';

const NewsPage = async () => {
  const blogs = await getBlogs();


  return <div>NewsPage</div>;
};

export default NewsPage;
