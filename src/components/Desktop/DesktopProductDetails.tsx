import useProductDetails from "../../hooks/useProductDetails";

import { Dialog, Box, Grid } from "@material-ui/core";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ImagesCarousel from "../ImagesCarousel";

import { useProductDetailsDesktopStyles } from "../DesktopProductDetailsStyles";
import ProductButtons from "../ProductButtons";
import ProductDetailsSpecifications from "../ProductDetailsSpecifications";
import ProductTitle from "../ProductTitle";
import ProductDescription from "../ProductDescription";

const DesktopProductDetails = ({ onClose, product, open, isMobile }) => {
  const classes = useProductDetailsDesktopStyles();
  const theme = useTheme();
  //const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    selectedSize,
    selectedPot,
    isInCart,
    handleRemoveFromCart,
    handleSizeChange,
    handleAddToCart,
  } = useProductDetails(product);

  return (
    <div>
      <Dialog
        PaperProps={{ className: classes.dialog }}
        //fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box className={classes.container}>
          <Box className={`${classes.productImage} ${classes.gridItem}`}>
            <ImagesCarousel productId={product.id} />
          </Box>
          <Box className={`${classes.productDetails} ${classes.gridItem}`}>
            <ProductDetailsSpecifications
              product={product}
              selectedSize={selectedSize}
              isMobile={isMobile}
            />
          </Box>

          <Box className={`${classes.productDescription} ${classes.gridItem}`}>
            <Box
              className={`${classes.productText} ${classes.gridItem}`}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <ProductTitle
                product={product}
                onClose={onClose}
                isMobile={isMobile}
                selectedSize={selectedSize}
              />
              <ProductDescription product={product} isMobile={isMobile} />
              <ProductButtons
                product={product}
                selectedSize={selectedSize}
                handleSizeChange={handleSizeChange}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                isInCart={isInCart}
                isMobile={isMobile}
              />
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};
export default DesktopProductDetails;
