'use client';

import { useState } from 'react';
import '../style.scss';

import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Category } from '@/types';
import Link from 'next/link';

interface MobileDropdownProps {
  data: Category[];
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = data.map((route) => ({
    href: `/ponuda/${route.categorySlug}`,
    label: route.title,
  }));

  return (
    <>
      <div className="mobileDropdown" onClick={() => setIsOpen(!isOpen)}>
        <p style={isOpen ? { marginBottom: '0.25rem' } : { marginBottom: '0' }}>
          Ponuda{' '}
          <span style={isOpen ? { rotate: '180deg' } : { rotate: '0deg' }}>
            <ExpandMoreRoundedIcon />
          </span>
        </p>
        <div
          className="dropdownLinks"
          style={isOpen ? { display: 'flex' } : { display: 'none' }}
        >
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileDropdown;
