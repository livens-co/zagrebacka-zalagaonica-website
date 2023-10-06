import Link from 'next/link';
import './style.scss';

import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';

import MobileDropdown from './components/mobileDropdown';
import getCategories from '@/actions/get-categories';
import BackToTop from '../ui/backToTop';

const FooterMobile = async () => {
  const categories = await getCategories();

  return (
    <div className="footerMobile">
      <BackToTop />
      <div className="links">
        <Link href="/">Početna</Link>
        <Link href="/otkup">Otkup</Link>
        <Link href="/zakup">Zakup</Link>
        <MobileDropdown data={categories} />
        <Link href="/novosti">Novosti</Link>
        <Link href="/kontakt">Kontakt</Link>
        <Link href="/zastita-podataka">Zaštita privatnosti</Link>
      </div>
      <div className="social">
        <h3>Pratite nas:</h3>
        <div className="socialLinks">
          <a href="/">
            <InstagramIcon />
          </a>

          <a href="/">
            <PetsRoundedIcon />
          </a>
        </div>
      </div>
      <div className="logo">
        <Image
          src="/assets/logo_black.png"
          height={114}
          width={263}
          alt="Zagrebačka zalagaonica"
        />
      </div>
      <div className="legal">
        <p>
          &copy; 2023 <CircleIcon /> Zagrebačaka zalagaonica
        </p>
        <p>
          Developed with 💙 by
          <Link href="//www.livens.co">&#160;livens</Link>
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
