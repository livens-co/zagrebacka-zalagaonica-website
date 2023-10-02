import Container from '@/components/ui/container';
import getCategories from '@/actions/get-categories';
 
import './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './components/dropdown';

export const revalidate = 3;

const Navbar = async () => {
  const categories = await getCategories();

  // console.log(categories);

  return (
    <>
      <div className="navbar">
        <nav>
          <div className="links">
            <Link href="/">Početna</Link>
            <Dropdown data={categories} />
            <Link href="/novosti">Novosti</Link>
            <Link href="/kontakt">Kontakt</Link>
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
          <div className="links"></div>
        </nav>
      </div>

      <div className="navbarMobile">
        <h1>logo</h1>
        <h1>X</h1>
      </div>
    </>
  );
};

export default Navbar;
