import { Blog } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/blog`;

const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getBlogs;
