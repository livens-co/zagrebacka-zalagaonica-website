'use client';

import { Category } from '@/types';
import '../style.scss';
import { useState } from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Link from 'next/link';

interface MobileDropdownProps {
  data: Category[];
  closeNavbar: () => void;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({
  data,
  closeNavbar,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const routes = data.map((route) => ({
    href: `/ponuda/${route.categorySlug}`,
    label: route.title,
  }));

  const handleClick = () => {
    closeNavbar();
  };

  return (
    <div
      className="mobileMenuDropdown"
      onClick={() => setModalOpen(!modalOpen)}
    >
      <p
        style={modalOpen ? { marginBottom: '0.25rem' } : { marginBottom: '0' }}
      >
        Ponuda{' '}
        <span style={modalOpen ? { rotate: '180deg' } : { rotate: '0deg' }}>
          <ExpandMoreRoundedIcon />
        </span>
      </p>
      <div
        className="dropdownLinks"
        style={modalOpen ? { display: 'flex' } : { display: 'none' }}
      >
        {routes.map((route) => (
          <Link key={route.href} href={route.href} onClick={handleClick}>
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileDropdown;
