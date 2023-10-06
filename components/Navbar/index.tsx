import getCategories from '@/actions/get-categories';

import './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './components/dropdown';
import MobileNavbar from './MobileNavbar';
import getFeaturedBrands from '@/actions/get-featured-brands';

export const revalidate = 3;

const Navbar = async () => {
  const categories = await getCategories();

  const brands = await getFeaturedBrands({isFeatured: true})

  return (
    <>
      <div className="navbar">
        <nav>
          <div className="links">
            <Link href="/">Početna</Link>
            <Link href="/otkup">Otkup</Link>
            <Link href="/zalog">Zalog</Link>
          </div>
          <Link href="/" className="logo">
            <Image
              priority
              src="/assets/logo_white.png"
              height={100}
              width={100}
              alt="Zagrebačka Zalagaonica"
            />
          </Link>
          <div className="links">
            <Dropdown data={categories} brands={brands} />
            <Link href="/novosti">Novosti</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </nav>
      </div>

      <MobileNavbar data={categories} />
    </>
  );
};

export default Navbar;
