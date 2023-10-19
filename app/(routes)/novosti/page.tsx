import getBlogs from '@/actions/get-blogs';
import './style.scss';
import ArticleList from '@/components/ui/ArticleList/ArticleList';

export const revalidate = 3;

const NewsPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className="newsPage">
      <div className="newsPageHeader">
        <h1>Novosti</h1>
        <p>
          Ovdje možete pronaći aktualne ponude i novosti iz naše zalagaonice.
        </p>
      </div>
      <div className="newsPageContent">
        {blogs.map((item) => (
          <ArticleList items={blogs} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
