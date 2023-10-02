'use client';

import '../style.scss';
import { useState } from 'react';
import Link from 'next/link';
import { Category } from '@/types';
import Image from 'next/image';

interface DropdownProps {
  data: Category[];
}

const Dropdown: React.FC<DropdownProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = data.map((route) => ({
    href: `/ponuda/${route.categorySlug}`,
    label: route.name,
  }));

  return (
    <>
      <div className="dropdown"  >
        <Link
          href="/ponuda"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(true)}
        >
          Ponuda
        </Link>
      </div>
      <div
        className="menu"
        style={isOpen ? { display: 'flex' } : { display: 'none' }}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="dropdownLinks">
          <div className="dropdownColumn">
            <h3>Proizvodi</h3>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(!isOpen)}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="dropdownColumn">
            <h3>Marke</h3>
            <Link href='/'>Apple</Link>
            <Link href='/'>Samsung</Link>
            <Link href='/'>Xiaomi</Link>
            <Link href='/'>Huawei</Link>
          </div>
        </div>
        <div className="dropdownCollections">
          <div className="featuredCollection">
            <div className="collectionImage">
              <Image
                priority
                width={1000}
                height={1000}
                src="https://www.notebookcheck.biz/uploads/tx_nbc2/AppleiPhone14Pro__1__01.JPG"
                alt="Collection"
              />
            </div>
            <p>Apple mobiteli</p>
          </div>
          <div className="featuredCollection">
            <div className="collectionImage">
              <Image
                priority
                width={1000}
                height={1000}
                src="https://lidermedia.hr/images/slike/2022/01/04/o_393279_1024.jpg"
                alt="Collection"
              />
            </div>
            <p>Rolex Satovi</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
