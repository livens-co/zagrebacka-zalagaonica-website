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
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// export const revalidate = 3;

type SectionProps = {
  children: React.ReactNode;
};

function Section({ children }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-100vw)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s ",
     
        }}
       
      >
        {children}
      </div>
    </div>
  );
}

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
 

  return (
    <div className="homePage">
      {/* HERO SECTION */}

      <div className="heroSection">
        <video autoPlay muted loop src="/intro.mp4" playsInline>
          <source src="/intro.mp4" type="video/mp4" />
        </video>
        <div className="videoOverlay" />

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
      <Section>
        <div className="servicesSection">
          <div className="service">
            <div className="serviceImage">
              <Image
                fill
                src="/mobitel.webp"
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
                src="/gold.avif"
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
                src="/sat.jpeg"
                alt="Otkup"
              />
              <div className="overlay" />
            </div>
            <Link href="/ponuda" className="serviceTitle">
              Prodaja <ArrowForwardIcon />
            </Link>
          </div>
        </div>
      </Section>
      {/* </Container> */}
      {/* O NAMA */}
      <Section>
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
      </Section>
      {/* IZDVOJENI PROIZVODI */}
      <Section>
        <div className="featuredProducts">
          <h1>Izdvojeni proizvodi</h1>
          {products && <ProductList title="" items={products} />}
        </div>
      </Section>
      {/* SLOGAN */}
      <Section>
        <div className="slogan">
          <h1>
            Zagrebačka zalagaonica - vaš put prema brzim financijskim
            rješenjima.
          </h1>
        </div>
      {/* </Section> */}

      {/* NOVOSTI */}
      {/* <Section> */}
        <div className="featuredArticles">
          <h1 className="articlesTitle">Novosti</h1>
          {articles && <ArticleList items={articles} />}
        </div>
      </Section>

      {/* GRID NACINI PLACANJA / PROVJERENI PROIZVODI  / ISKUSTVO I POVJERENJE */}
      <Section>
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
      </Section>
    </div>
  );
};

export default HomePage;
