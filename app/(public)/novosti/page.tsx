
import { Blog } from '@/types';
import './style.scss';
import ArticleList from '@/components/ui/ArticleList/ArticleList';
import getBlogs from '@/sanity/actions/get-blogs';

export const revalidate = 1;

const NewsPage = async () => {
const blogs: Blog[] = await getBlogs();

  return (
    <div className="newsPage">
      <div className="newsPageHeader">
        <h1>Novosti</h1>
        <p>
          Ovdje možete pronaći novosti iz naše zalagaonice.
        </p>
      </div>
      <div className="newsPageContent">
        {blogs.map((item) => (
          <ArticleList items={blogs} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
