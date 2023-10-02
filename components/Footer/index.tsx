import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import FooterLinks from './components/links';
import getCategories from '@/actions/get-categories';

import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import CircleIcon from '@mui/icons-material/Circle';
import FooterMobile from './FooterMobile';

export const revalidate = 3;

const Footer = async () => {
  const categories = await getCategories();

  return (
    <footer>
      <div className="footer">
        <div className="footerRow">
          <div className="logo">
            <Image
              height={114}
              width={263}
              src="/assets/logo_white.png"
              alt="Zagrebačka zalagaonica"
            />
          </div>
          <div className="info">
            <h3>Zagrebačka zalagaonica</h3>
            <p>Krapinska 8, 10 000 Zagreb</p>
            <p>099 2137 494</p>
            <p>otkup@zagrebacka-zalagaonica.hr</p>
          </div>
          <div className="column">
            <h3>Korisni linkovi</h3>
            <Link href="/">Početna</Link>
            <Link href="/">Otkup</Link>
            <Link href="/">Zalog</Link>
            <Link href="/novosti">Novosti</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
          <div className="column">
            <h3>Ponuda</h3>
            <FooterLinks data={categories} />
          </div>
        </div>
        <div className="social">
          <h2>Pratite nas:</h2>
          <div className="links">
            <a href="/">
              <InstagramIcon />
            </a>

            <a href="/">
              <PetsRoundedIcon />
            </a>
          </div>
        </div>
        <div className="legal">
          <p>
            Developed by
            <Link href="//www.mintlime.hr"> mint&lime</Link>
          </p>
          <p className="copy">
            &copy; 2023 <CircleIcon /> Zagrebačaka zalagaonica
          </p>
          <p>
            <Link href="/zastita-podataka">Zaštita podataka</Link>
          </p>
        </div>
      </div>
      <FooterMobile/>
    </footer>
  );
};

export default Footer;
