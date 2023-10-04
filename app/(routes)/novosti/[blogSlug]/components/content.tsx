'use client';

import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

interface ArticleContentProps {
  content: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Markdown>{content}</Markdown>
    </>
  );
};

export default ArticleContent;
