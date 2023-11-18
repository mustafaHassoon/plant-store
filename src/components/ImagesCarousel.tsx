import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";
import service from "../services";

const sizes = {
  mobile: 500,
  tablet: 900,
};

const device = {
  mobile: `(max-width: ${sizes.mobile}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
};

const CarouselContainer = styled.div`
  max-width: 600px; // Ensure the width is no more than 600px
  max-height: 600px; // Ensure the height is no more than 600px
  width: 100%;
  height: 100%;
  padding-bottom: 100%; // This will make the height equal to the width, ensuring a square aspect ratio
  position: relative;
  overflow: hidden;
`;

const OuterContainer = styled.div`
  width: 100%;
  max-height: 600px;
  overflow: hidden;
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const DotWrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 10px;
  objectfit: "cover";
`;

const Dot = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${({ active }) =>
    active ? "rgba(0, 191, 255, 0.5)" : "rgba(255, 255, 255, 0.3)"};
  transition: background-color 200ms;
  cursor: pointer;
  pointer-events: all;
`;

interface ImagesCarouselProps {
  productId: number;
  duration?: number;
  autoSlideInterval?: number;
}

const ImagesCarousel: React.FC<ImagesCarouselProps> = ({
  productId,
  duration = 1000,
  autoSlideInterval = 3000,
}) => {
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Array<string | null>>([]);

  const windowWidth = window.innerWidth;

  useEffect(() => {
    const loadImages = async () => {
      try {
        const product = service.getProductById(productId);
        const images = product.imgUrls;

        const loadedImages = await Promise.all(
          images.map(async (image) => {
            const imagePath = await import(`../data${image}`);
            return imagePath.default;
          })
        );

        setLoadedImages(loadedImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, [productId]);

  const handleNext = () => {
    setActive((prevState) => (prevState + 1) % loadedImages.length);
  };

  const handlePrev = () => {
    setActive((prevState) =>
      prevState === 0 ? loadedImages.length - 1 : prevState - 1
    );
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, autoSlideInterval);

    return () => {
      clearInterval(timer);
    };
  }, [productId, handleNext, autoSlideInterval]);

  return (
    <CarouselContainer>
      {isLoading && (
        <LoaderWrapper>
          <BeatLoader color="#00BFFF" loading={isLoading} size={15} />
        </LoaderWrapper>
      )}
      {loadedImages.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`carousel-item-${index}`}
          onLoad={handleImageLoad}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "cover",
            opacity: index === active && !isLoading ? 1 : 0,
            transition: `opacity ${duration}ms`,
          }}
        />
      ))}
      <DotWrapperContainer>
        {loadedImages.map((_, index) => (
          <Dot
            key={index}
            active={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </DotWrapperContainer>
    </CarouselContainer>
  );
};

export default ImagesCarousel;
