'use client';

import '../style.scss';

import { Brand } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { useState } from 'react';

import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface FilterProps {
  data: Brand[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const [openModal, setOpenModal] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (brandSlug: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: brandSlug,
    };

    if (current[valueKey] === brandSlug) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
    setOpenModal(false);
  };

  const removeFilters = () => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: null,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
    setOpenModal(false);
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)} className="filterButton">
        <TuneRoundedIcon />
        Prikaži filtere
      </button>

      <div
        className="filterModal"
        style={openModal ? { left: '0' } : { left: '-15rem' }}
      >
        <div className="header">
          <h3>Filteri</h3>
          <button onClick={() => setOpenModal(false)} className="filterButton">
            <CloseRoundedIcon style={{ marginRight: '0rem' }} />
          </button>
        </div>
        <div className="filterList">
          {data.map((filter) => (
            <button
              onClick={() => onClick(filter.brandSlug)}
              key={filter.brandSlug}
              className="filterButton"
              style={
                filter.brandSlug === selectedValue
                  ? { color: 'var(--secondary)' }
                  : { color: 'var(--primary)' }
              }
            >
              {filter.name}
            </button>
          ))}
        </div>
        <button className="removeFiltersButton" onClick={removeFilters}>
          Ukloni filtere
        </button>
      </div>
    </>
  );
};

export default Filter;
