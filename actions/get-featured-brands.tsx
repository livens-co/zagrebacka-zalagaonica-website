import { Brand } from '@/types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/brands`;

interface Query {
  isFeatured?: boolean;
}

const getFeaturedBrands = async (query: Query): Promise<Brand[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getFeaturedBrands;
