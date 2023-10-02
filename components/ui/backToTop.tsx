'use client'

import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

const BackToTop = () => {
  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="backToTop" onClick={scrollToTop}>
      <ArrowUpwardRoundedIcon />
      <p>Povratak na vrh</p>
    </div>
  );
};

export default BackToTop;
