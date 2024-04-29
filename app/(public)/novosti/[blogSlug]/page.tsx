import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { Blog } from "@/types";
import getBlog from "@/sanity/actions/get-blog";
import { PortableText } from "next-sanity";

export const revalidate = 3;

interface ArticlePageProps {
  params: {
    blogSlug: string;
  };
}

const ArticlePage: React.FC<ArticlePageProps> = async ({
  params: { blogSlug },
}) => {
  const blog: Blog | null = await getBlog(blogSlug);

  if (!blog) {
    return <div>Članak nije pronađen</div>;
  }

  return (
    <div className="articlePage">
      <div className="articlePageHeader">
        <Link href="/novosti">
          <CircleRoundedIcon />
          Natrag
        </Link>
        <div className="headerImage">
          <Image fill src={blog?.imageUrl} alt={blog?.title} />
        </div>

        <h1>{blog?.title}</h1>
      </div>
      <div className="articleContent">
        <PortableText value={blog?.content} />
      </div>
      <div className="articleFooter">
        <Link href="/novosti">
          Više novosti <ArrowForwardIosRoundedIcon />
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;
