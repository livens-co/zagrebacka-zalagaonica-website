import Image from 'next/image';
import { Tab } from '@headlessui/react';

import { Image as ImageType } from '@/types';

import './style.scss';

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="galleryTab">
      {({ selected }) => <Image fill src={image.url} alt="Image" />}
    </Tab>
  );
};

export default GalleryTab;
