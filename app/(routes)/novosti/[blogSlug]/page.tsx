import getBlog from '@/actions/get-blog';
import './style.scss';
import ArticleContent from './components/content';
import Image from 'next/image';
import Link from 'next/link';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';

export const revalidate = 3;

interface ArticlePageProps {
  params: {
    blogSlug: string;
  };
}

const ArticlePage: React.FC<ArticlePageProps> = async ({ params }) => {
  const blog = await getBlog(params.blogSlug);

  if (!blog) {
    return null;
  }

  return (
    <div className="articlePage">
      <div className="articlePageHeader">
      <Link href='/novosti'><CircleRoundedIcon/>Natrag</Link>
        <div className="headerImage">
          <Image fill src={blog.imageUrl} alt={blog.title} />
        </div>

        <h1>{blog.title}</h1>
      </div>
      <div className="articleContent">
        <ArticleContent content={blog.content} />
      </div>
      <div className="articleFooter">
        <Link href='/novosti'>Više novosti <ArrowForwardIosRoundedIcon/></Link>
      </div>
    </div>
  );
};

export default ArticlePage;
