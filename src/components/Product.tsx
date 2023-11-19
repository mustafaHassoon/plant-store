// Product.tsx
import React, { useEffect, useState } from "react";

import { CardMedia, CardContent, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import useStyles from "./productStyles";
import { useCartDispatch } from "../context/CartContext";
import ProductDetails from "./ProductDetails";
import service from "../services";

const Product = ({
  price,
  id,
  family,
  title,
  images,
  dimentions,
  care_level,
  location,
  conditions,
  soil,
  description,
}) => {
  const dispatch = useCartDispatch();
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const productData = service.getProductById(id);

  const firstAvailableSize = Object.entries(productData.sizes).find(
    ([, sizeDetails]) => sizeDetails.available
  )?.[0];

  const firstAvailableSizePrice = productData.sizes[firstAvailableSize]?.price;

  const hasAvailableSize = firstAvailableSize !== undefined;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      const imagePath = await import(`../data${images[0]}`);
      setImgSrc(imagePath.default);
    };

    loadImage();
  }, [images]);

  const handleOpenDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };
  return (
    <React.Fragment>
      <Box className={classes.myRoot}>
        <div
          className={`${classes.imageContainer} ${
            hover ? classes.imageContainerHover : ""
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <CardMedia
            className={`${classes.media} ${
              !hasAvailableSize ? classes.fadedImage : ""
            }`}
            image={imgSrc}
            title={title}
            onClick={handleOpenDetails}
            style={{ cursor: "pointer" }}
          >
            <IconButton
              classes={{
                root: `${classes.favoriteButton} ${
                  isFavorite || hover ? classes.showFavoriteButton : ""
                }`,
              }}
              aria-label="Add to favorites"
              onClick={(event) => {
                event.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
            >
              {isFavorite ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </CardMedia>

          <Box
            className={`${classes.button} ${
              hover && hasAvailableSize ? classes.showButton : ""
            }`}
            onClick={() => {
              if (hasAvailableSize) {
                dispatch({
                  type: "ADD_ITEM",
                  payload: {
                    price: firstAvailableSizePrice,
                    id,
                    options: {
                      size: firstAvailableSize,
                      pot: "No Pot",
                    },
                  },
                });
              }
            }}
          >
            {hasAvailableSize ? "Buy" : null}
          </Box>
        </div>
        <CardContent className={classes.content}>
          <Typography variant="h6">{title}</Typography>
          <Typography
            className={!hasAvailableSize ? classes.hidePrice : ""}
            variant="subtitle1"
          >
            € {firstAvailableSizePrice}
          </Typography>
          {!hasAvailableSize && (
            <Typography
              gutterBottom
              variant="body1"
              component="p"
              color="error"
            >
              Out of Stock
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {care_level}
          </Typography>
        </CardContent>
      </Box>
      <ProductDetails
        open={showDetails}
        onClose={handleCloseDetails}
        product={{
          id,
          title,
          family,
          price,
          images,
          dimentions,
          care_level,
          location,
          conditions,
          soil,
          sizes: productData.sizes,
          description,
        }}
      />
    </React.Fragment>
  );
};

export default Product;
