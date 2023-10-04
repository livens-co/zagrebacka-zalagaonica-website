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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ut
          ducimus necessitatibus perferendis vero? Ipsum pariatur quae debitis
          numquam animi?
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
