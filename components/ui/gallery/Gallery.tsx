"use client";

// import Image from "next/image";
// import { Tab } from "@headlessui/react";

// import { Image as ImageType } from "@/types";

// import "./style.scss";
// import GalleryTab from "./GalleryTab";

// interface GalleryProps {
//   images: ImageType[];
// }

// const Gallery: React.FC<GalleryProps> = ({ images }) => {
//   return (
//     <Tab.Group as="div" className="gallery">
//       <Tab.Panels className="featuredImage">
//         {images.map((image) => (
//           <Tab.Panel key={image.id}>
//             <Image fill src={image.url} alt="Image" />
//           </Tab.Panel>
//         ))}
//       </Tab.Panels>

//       <Tab.List className="imageSelector">
//         {images.map((image) => (
//           <GalleryTab key={image.id} image={image} />
//         ))}
//       </Tab.List>
//     </Tab.Group>
//   );
// };

// export default Gallery;

import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import "./style.scss";
import GalleryTab from "./GalleryTab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const sortedImages = [...images].sort((a, b) => a.priority - b.priority);

  return (
    <Tab.Group as="div" className="gallery">
      <Tab.Panels className="featuredImage">
        {sortedImages.map((image) => (
          <Tab.Panel key={image.id}>
            <Image fill src={image.url} alt="Image" />
          </Tab.Panel>
        ))}
      </Tab.Panels>

      <Tab.List className="imageSelector">
        {sortedImages.map((image) => (
          <GalleryTab key={image.id} image={image} />
        ))}
      </Tab.List>
    </Tab.Group>
  );
};

export default Gallery;
