import getCategories from '@/actions/get-categories';

import './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './components/dropdown';
import MobileNavbar from './MobileNavbar';

export const revalidate = 3;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <>
      <div className="navbar">
        <nav>
          <div className="links">
            <Link href="/">Početna</Link>
            <Link href="/">Otkup</Link>
            <Link href="/">Zalog</Link>
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
            <Dropdown data={categories} />
            <Link href="/novosti">Novosti</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </nav>
      </div>

      <MobileNavbar data={categories}/>
    </>
  );
};

export default Navbar;
