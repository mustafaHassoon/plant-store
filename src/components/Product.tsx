// Product.tsx
import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import useStyles from "./Product.styles";
import { useCart, useCartDispatch } from "../context/CartContext";
import ProductDetails from "./ProductDetails";
import service from "../services";

const Product = ({
  price,
  id,
  title,
  images,
  dimentions,
  care_level,
  location,
  conditions,
  soil,
}) => {
  const dispatch = useCartDispatch();
  const cart = useCart();
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [imgSrc, setImgSrc] = useState(null);

  const productData = service.getProductById(id);

  const firstAvailableSize = Object.entries(productData.sizes).find(
    ([, sizeDetails]) => sizeDetails.available
  )?.[0];

  const hasAvailableSize = firstAvailableSize !== undefined;

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
      <Card className={classes.root}>
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
            title="uuuuuuu"
            onClick={handleOpenDetails}
            style={{ cursor: "pointer" }}
          />
          <IconButton
            className={`${classes.favoriteButton} ${
              hover ? classes.showFavoriteButton : ""
            }`}
            edge="end"
            color="inherit"
            aria-label="Favorite"
          >
            <FavoriteBorder />
          </IconButton>
          <Box
            className={`${classes.button} ${
              hover && hasAvailableSize ? classes.showButton : ""
            }`}
          >
            {hasAvailableSize ? (
              <Button
                size="small"
                color="inherit"
                onClick={() =>
                  dispatch({
                    type: "ADD_ITEM",
                    payload: {
                      id,
                      options: {
                        size: firstAvailableSize,
                        pot: "No Pot",
                      },
                    },
                  })
                }
              >
                Buy
              </Button>
            ) : null}
          </Box>
        </div>
        <CardContent className={classes.content}>
          <Typography variant="h6">{title}</Typography>
          <Typography
            className={!hasAvailableSize ? classes.hidePrice : ""}
            variant="subtitle1"
          >
            € {price}
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
          <Typography variant="body2">{location}</Typography>
          <Typography variant="body2">{care_level}</Typography>
        </CardContent>
      </Card>
      <ProductDetails
        open={showDetails}
        onClose={handleCloseDetails}
        product={{
          id,
          title,
          price,
          images,
          dimentions,
          care_level,
          location,
          conditions,
          soil,
          sizes: productData.sizes,
        }}
      />
    </React.Fragment>
  );
};

export default Product;
