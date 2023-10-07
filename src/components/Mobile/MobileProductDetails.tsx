import useProductDetails from "../../hooks/useProductDetails";

import { Dialog, Box } from "@material-ui/core";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ImagesCarousel from "../ImagesCarousel";

import { useStyles } from "../ProductDetailsStyles";
import ProductButtons from "../ProductButtons";
import ProductTitle from "../ProductTitle";
import ProductDescription from "../ProductDescription";

import ProductDetailsSpecifications from "../ProductDetailsSpecifications";

const MobileProductDetails = ({ product, onClose, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    selectedSize,
    selectedPot,
    isInCart,
    handleRemoveFromCart,
    handleSizeChange,
    handleAddToCart,
  } = useProductDetails(product);

  return (
    <Dialog
      PaperProps={{ className: classes.dialog }}
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <Box className={classes.mobileContainer}>
        <ProductTitle product={product} onClose={onClose} />
        <ImagesCarousel productId={product.id} />
        <ProductDetailsSpecifications
          product={product}
          selectedSize={selectedSize}
        />
        <ProductDescription product={product} />
        <ProductButtons
          product={product}
          selectedSize={selectedSize}
          selectedPot={selectedPot}
          handleSizeChange={handleSizeChange}
          handlePotChange={selectedPot}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          isInCart={isInCart}
        />
      </Box>
    </Dialog>
  );
};

export default MobileProductDetails;
