import getBlog from '@/actions/get-blog';
import './style.scss';
import ArticleContent from './components/content';

export const revalidate = 3;

interface ArticlePageProps{
  params:{
    blogSlug: string
  }
}

const ArticlePage: React.FC<ArticlePageProps> = async({
  params
}) => {
const blog = await getBlog(params.blogSlug)

if (!blog) {
  return null;
}

  return <div>
    <ArticleContent content={blog.content}/>
  </div>; 
};

export default ArticlePage;
