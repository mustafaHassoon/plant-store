import React from "react";
import ImagesCarousel from "./ImagesCarousel";

interface CarouselGalleryProps {
  productId: number;
}

const CarouselGallery: React.FC<CarouselGalleryProps> = ({ productId }) => {
  return <ImagesCarousel productId={productId} />;
};

export default CarouselGallery;
