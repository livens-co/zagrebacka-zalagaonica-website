import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import FooterLinks from './components/links';
 

import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import CircleIcon from '@mui/icons-material/Circle';
import FooterMobile from './FooterMobile';
import getCategories from '@/sanity/actions/get-categories';
import { Category } from '@/types';

export const revalidate = 3;

const Footer = async () => {
  const categories: Category[] = await getCategories();

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
            <p>Krapinska 5, 10 000 Zagreb</p>
            <p>099 2173 494</p>
            <p>info@zagrebacka-zalagaonica.hr</p>
          </div>
          <div className="column">
            <h3>Korisni linkovi</h3>
            <Link href="/">Početna</Link>
            <Link href="/otkup">Otkup</Link>
            <Link href="/zalog">Zalog</Link>
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
            <a href="https://www.instagram.com/zagrebacka_zalagaonica/" target='_blank'>
              <InstagramIcon />
            </a>

            <a href="https://www.njuskalo.hr/trgovina/ZagrebackaZalagaonica" target='_blank'>
              <PetsRoundedIcon />
            </a>
          </div>
        </div>
        <div className="legal">
          <p>
          Developed with 💙 by
            <Link href="//www.livens.co" target='_blank'>&#160;livens</Link>
          </p>
          <p className="copy">
            &copy; 2024 <CircleIcon /> Zagrebačaka zalagaonica
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
