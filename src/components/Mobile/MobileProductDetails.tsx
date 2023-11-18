import useProductDetails from "../../hooks/useProductDetails";

import { Dialog, Box } from "@material-ui/core";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ImagesCarousel from "../ImagesCarousel";

import { useProductDetailsMobileStyles } from "../MobileProductDetailsStyles";
import ProductButtons from "../ProductButtons";
import ProductTitle from "../ProductTitle";
import ProductDescription from "../ProductDescription";

import ProductDetailsSpecifications from "../ProductDetailsSpecifications";
import { Grid } from "@mui/material";

const MobileProductDetails = ({ product, onClose, open, isMobile }) => {
  const classes = useProductDetailsMobileStyles();
  const theme = useTheme();
  //const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isFullScreen = useMediaQuery("(max-width: 999px)");

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
      fullScreen={isFullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <Grid container spacing={2} direction="column" alignItems="center">
        {" "}
        {/* Main container grid */}
        <Grid item className={classes.productTitleItem}>
          <ProductTitle
            product={product}
            onClose={onClose}
            isMobile={isMobile}
            selectedSize={selectedSize}
          />
        </Grid>
        <Grid item className={classes.customDimension}>
          <ImagesCarousel productId={product.id} />
        </Grid>
        <Grid item>
          <ProductDetailsSpecifications
            product={product}
            selectedSize={selectedSize}
            isMobile={isMobile}
          />
        </Grid>
        <Grid item>
          <ProductDescription product={product} isMobile={isMobile} />
        </Grid>
        <Grid item>
          <ProductButtons
            product={product}
            selectedSize={selectedSize}
            handleSizeChange={handleSizeChange}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            isInCart={isInCart}
            isMobile={isMobile}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default MobileProductDetails;
