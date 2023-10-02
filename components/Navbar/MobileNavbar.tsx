'use client';

import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import { useState } from 'react';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

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
        // style={isOpen ? { display: 'flex' } : { display: 'none' }}
        style={{
          right: isOpen ? '0' : '-20rem',
          transitionDelay: isOpen ? '0s' : '0.2s',
        }}
      >
        <div className="closeButton" onClick={() => setIsOpen(!isOpen)}>
          <div className="line"/>
          <div className="line"/>
        </div>
        <div className="menuLinks">
          <Link href="/">Početna</Link>
          <Link href="/">Otkup</Link>
          <Link href="/">Zalog</Link>
          <Link href="/">Ponuda</Link>
          <Link href="/">Novosti</Link>
          <Link href="/">Kontakt</Link>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
