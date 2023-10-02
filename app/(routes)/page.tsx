import getProducts from '@/actions/get-products';
import ProductList from '@/components/ui/ProductList/ProductList';
import Container from '@/components/ui/container';
import Image from 'next/image';

import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';

import './style.scss';
import Link from 'next/link';

export const revalidate = 3;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  // console.log(products);

  return (
    <div className="homePage">
      {/* HERO SECTION */}
      <Container>
        <div className="heroSection">
          <div className="heroImage">
            <Image
              priority
              src="/assets/logo_white.png"
              height={456}
              width={1050}
              alt="Zagrebačka zalagaonica"
            />
          </div>
          <p>
            Zagrebačka zalagaonica bavi se otkupom, zalogom i prodajom rabljene
            robe poput zlata, luksuznih satova, elektronike, te ostalih predmeta
            na upit.
          </p>
          <div className="contact">
            <a href="tel:+">
              <span>099 2137 494</span>
              <div className="icon">
                <LocalPhoneRoundedIcon />
              </div>
              <div className="buttonAnimation" />
            </a>
            <a href="mailto:">
              <span>Kontaktirajte nas</span>
              <div className="icon">
                <MailRoundedIcon />
              </div>
              <div className="buttonAnimation" />
            </a>
            <a href="/">
              <span>Krapinska ulica 5</span>
              <div className="icon">
                <FmdGoodRoundedIcon />
              </div>
              <div className="buttonAnimation" />
            </a>
          </div>
        </div>
      </Container>

      {/* OTKUP ZALOG PRODAJA */}
      <Container>
        <div className="servicesSection">
          <div className="service">
            <div className="serviceImage">
              <Image
                fill
                src="https://www.notebookcheck.biz/uploads/tx_nbc2/AppleiPhone14Pro__1__01.JPG"
                alt="Otkup"
              />
              <div className="overlay" />
            </div>
            <Link href="/" className="serviceTitle">
              Otkup
            </Link>
          </div>
          <div className="service">
            <div className="serviceImage">
              <Image
                fill
                src="https://img.freepik.com/premium-photo/3d-rendering-shiny-gold-bars-stacked-black-background-with-copy-space-3-illustration_67155-13973.jpg"
                alt="Otkup"
              />
              <div className="overlay" />
            </div>
            <Link href="/" className="serviceTitle">
              Zalog
            </Link>
          </div>
          <div className="service">
            <div className="serviceImage">
              <Image
                fill
                src="https://lidermedia.hr/images/slike/2022/01/04/o_393279_1024.jpg"
                alt="Otkup"
              />
              <div className="overlay" />
            </div>
            <Link href="/" className="serviceTitle">
              Prodaja
            </Link>
          </div>
        </div>
      </Container>
      {/* O NAMA */}
      <Container>
        <div className="aboutUsSection">
          <div className="title">
            <h1>O nama</h1>
          </div>
          <div className="text">
            <p>
              Zagrebačka zalagaonica bavi se otkupom, zalogom i prodajom
              rabljene robe poput zlata, luksuznih satova, elektronike,
              nekretnina, automobila te ostalih predmeta na upit.
            </p>
            <p>
              Ako želite prodati svoje predmete, nudimo vam povoljne opcije
              prodaje. Naša zalagaonica ima široku mrežu kupaca i stručno znanje
              koje nam pomaže postići najbolje cijene za vaše predmete.
            </p>
            <p>
              Ako trebate hitan kratkoročni zajam, naša usluga zaloga je idealna
              za vas. Možete koristiti svoje predmete kao kolateral kako biste
              dobili novčani zajam, a mi ćemo se brinuti o sigurnom čuvanju
              vaših dragocjenosti dok ne otplatite zajam.
            </p>
          </div>
        </div>
      </Container>

      {/* IZDVOJENI PROIZVODI */}
      <Container>
        <div className="featuredProducts">
          <h1>Izdvojeni proizvodi</h1>
          <ProductList title="" items={products} />
        </div>
      </Container>

      {/* SLOGAN */}

      {/* NOVOSTI */}
    </div>
  );
};

export default HomePage;
