'use client';

import { Category } from '@/types';
import Link from 'next/link';

interface FooterLinkProps {
  data: Category[];
}

const FooterLinks: React.FC<FooterLinkProps> = ({ data }) => {
  const routes = data.map((route) => ({
    href: `/ponuda/${route.categorySlug}`,
    label: route.name,
  }));

  return (
    <>
      {routes.map((route) => (
        <Link key={route.href} href={route.href}>
          {route.label}
        </Link>
      ))}
    </>
  );
};

export default FooterLinks;
