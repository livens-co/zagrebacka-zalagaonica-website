'use client';

import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import { useState } from 'react';
import { Category } from '@/types';
import MobileDropdown from './components/mobileDropdown';

interface MobileNavbarProps {
  data: any;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbarMobile">
        <Link href="/" className="logo">
          <Image
            priority
            src="/assets/logo_white.png"
            height={50}
            width={110}
            alt="Zagrebačka Zalagaonica"
          />
        </Link>
        <div className="menuButton" onClick={() => setIsOpen(!isOpen)}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
      <div
        className="sideMenu"
        style={{
          right: isOpen ? '0' : '-90vw',
          transitionDelay: isOpen ? '0s' : '0.2s',
        }}
      >
        <div className="mobileHeader">
          <div className="closeButton" onClick={() => setIsOpen(!isOpen)}>
            <div className="line" />
            <div className="line" />
          </div>
        </div>
        <div className="innerContainer">
          <div className="menuLinks">
            <Link href="/">Početna</Link>
            <Link href="/">Otkup</Link>
            <Link href="/">Zalog</Link>
            <MobileDropdown data={data} />
            <Link href="/novosti">Novosti</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
          <div className="featuredCategories">
            <div className="featuredCategory">
              <div className="categoryImage">
                <Image
                  priority
                  height={400}
                  width={400}
                  src="https://www.notebookcheck.biz/uploads/tx_nbc2/AppleiPhone14Pro__1__01.JPG"
                  alt="Category name"
                />
              </div>
              <p>Apple proizvodi</p>
            </div>
            <div className="featuredCategory">
              <div className="categoryImage">
                <Image
                  priority
                  height={400}
                  width={400}
                  src="https://lidermedia.hr/images/slike/2022/01/04/o_393279_1024.jpg"
                  alt="Category name"
                />
              </div>
              <p>Rolex satovi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
