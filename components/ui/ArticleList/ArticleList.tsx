'use client';

import { Blog } from '@/types';
import './style.scss';
import NoResults from '@/components/NoResults/NoResults';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleListProps {
  items: Blog[];
}

const ArticleList: React.FC<ArticleListProps> = ({ items }) => {
  return (
    <div className="articleList">
      {items.length === 0 && <NoResults />}

      {items
        .map((item) => (
          <Link
            href={`/novosti/${item.blogSlug}`}
            key={item._id}
            className="articleCard"
          >
            <div className="articleCardImage">
              <Image fill src={item.imageUrl} alt={item.title} />
            </div>
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
          </Link>
        ))
        .slice(0, 2)}
    </div>
  );
};

export default ArticleList;
