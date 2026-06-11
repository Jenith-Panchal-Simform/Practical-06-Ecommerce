import { useState } from 'react';

type ProductImagesProps = {
  images: string[];
};
export const ProductImages = ({ images }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  console.log(images);
  return (
    <div>
      {/* Main Image */}
      <div className="group aspect-4/5 overflow-hidden bg-white">
        <img
          src={selectedImage}
          alt={selectedImage}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-4 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`shrink-0 overflow-hidden border-2 transition-all ${
              selectedImage === image ? 'border-primary' : 'border-transparent'
            } `}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} className="h-24 w-20 object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
