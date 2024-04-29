"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import "./style.scss";
import GalleryTab from "./GalleryTab";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="gallery">
      <Tab.Panels className="featuredImage">
        {images.map((image) => (
          <Tab.Panel key={image}>
            <Image fill src={image} alt="Image" />
          </Tab.Panel>
        ))}
      </Tab.Panels>

      <Tab.List className="imageSelector">
        {images.map((image) => (
          <GalleryTab key={image} image={image} />
        ))}
      </Tab.List>
    </Tab.Group>
  );
};

export default Gallery;
