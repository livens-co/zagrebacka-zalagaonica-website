"use client";

import getProducts from "@/actions/get-products";
import ProductList from "@/components/ui/ProductList/ProductList";
import Container from "@/components/ui/container";
import Image from "next/image";

import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";

import "./style.scss";
import Link from "next/link";
import ArticleList from "@/components/ui/ArticleList/ArticleList";
import getBlogs from "@/actions/get-blogs";

import PaymentIcon from "@mui/icons-material/Payment";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";

// export const revalidate = 3;

const HomePage = () => {
  // const products = await getProducts({ isFeatured: true });
  // const articles = await getBlogs();

  const [products, setProducts] = useState();
  const [articles, setArticles] = useState();

  useEffect(() => {
    const datafetch = async () => {
      const products = await (
        await fetch(
          "https://admin.zagrebacka-zalagaonica.hr/api/949fc294-94c5-4ba3-a6af-5c700afe5f04/products?isFeatured=true"
        )
      ).json();
      setProducts(products);

      const articles = await (
        await fetch(
          "https://admin.zagrebacka-zalagaonica.hr/api/949fc294-94c5-4ba3-a6af-5c700afe5f04/blog"
        )
      ).json();
      setArticles(articles);
    };
    datafetch();
  }, []);
  console.log(products);
  return (
    <div className="homePage">
      {/* HERO SECTION */}

      <div className="heroSection">
        
        <video autoPlay muted loop src="/2164973-preview.mp4" playsInline>
          <source src="/2164973-preview.mp4" type="video/mp4" />
        </video>
        <div className="videoOverlay"></div>
        
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
            <a href="tel:+385992173494" target="_blank">
              <span>099 2173 494</span>
              <div className="icon">
                <LocalPhoneRoundedIcon />
              </div>
              <div className="buttonAnimation" />
            </a>
            <a href="mailto:info@zagrebacka-zalagaonica.hr" target="_blank">
              <span>Kontaktirajte nas</span>
              <div className="icon">
                <MailRoundedIcon />
              </div>
              <div className="buttonAnimation" />
            </a>
            <a href="https://maps.app.goo.gl/zzsJvpo92Fsn8LscA" target="_blank">
              <span>Krapinska ulica 5</span>
              <div className="icon">
                <FmdGoodRoundedIcon />
              </div>
              <div className="buttonAnimation" />
            </a>
          </div>
      
      
      </div>

      {/* OTKUP ZALOG PRODAJA */}
      {/* <Container> */}
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
          <Link href="/otkup" className="serviceTitle">
            Otkup <ArrowForwardIcon />
          </Link>
        </div>
        <div className="service">
          <div className="serviceImage">
            <Image
              fill
              src="https://img.freepik.com/premium-photo/3d-rendering-shiny-gold-bars-stacked-black-background-with-copy-space-3-illustration_67155-13973.jpg"
              alt="Zalog"
            />
            <div className="overlay" />
          </div>
          <Link href="/zalog" className="serviceTitle">
            Zalog <ArrowForwardIcon />
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
          <Link href="/ponuda" className="serviceTitle">
            Prodaja <ArrowForwardIcon />
          </Link>
        </div>
      </div>
      {/* </Container> */}
      {/* O NAMA */}

      <div className="aboutUsSection">
        <div className="title">
          <h1>O nama</h1>
        </div>
        <div className="text">
          <p>
            Zagrebačka zalagaonica bavi se otkupom, zalogom i prodajom rabljene
            robe poput zlata, luksuznih satova, elektronike, nekretnina,
            automobila te ostalih predmeta na upit.
          </p>
          <p>
            Ako želite prodati svoje predmete, nudimo vam povoljne opcije
            prodaje. Naša zalagaonica ima široku mrežu kupaca i stručno znanje
            koje nam pomaže postići najbolje cijene za vaše predmete.
          </p>
          <p>
            Ako trebate hitan kratkoročni zajam, naša usluga zaloga je idealna
            za vas. Možete koristiti svoje predmete kao kolateral kako biste
            dobili novčani zajam, a mi ćemo se brinuti o sigurnom čuvanju vaših
            dragocjenosti dok ne otplatite zajam.
          </p>
        </div>
      </div>

      {/* IZDVOJENI PROIZVODI */}

      <div className="featuredProducts">
        <h1>Izdvojeni proizvodi</h1>
        {products && <ProductList title="" items={products} />}
      </div>

      {/* SLOGAN */}
      <div className="slogan">
        <h1>
          Zagrebačka zalagaonica - vaš put prema brzim financijskim rješenjima.
        </h1>
      </div>

      {/* NOVOSTI */}
      <div className="featuredArticles">
        <h1 className="articlesTitle">Novosti</h1>
        {articles && <ArticleList items={articles} />}
      </div>

      {/* GRID NACINI PLACANJA / PROVJERENI PROIZVODI  / ISKUSTVO I POVJERENJE */}
      <div className="paymentMethodsSection">
        <div className="gridItem">
          <PaymentIcon />
          <p>Mogućnost plaćanja karticama na rate i gotovinom</p>
        </div>
        <div className="gridItem">
          <VerifiedIcon />
          <p>Provjereni proizvodi</p>
        </div>
        <div className="gridItem">
          <HandshakeIcon />
          <p>Iskustvo i povjerenje</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
