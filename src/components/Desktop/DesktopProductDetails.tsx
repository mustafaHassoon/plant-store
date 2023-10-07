import useProductDetails from "../../hooks/useProductDetails";

import { Dialog, Box, Grid } from "@material-ui/core";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ImagesCarousel from "../ImagesCarousel";

import { useStyles } from "../ProductDetailsStyles";
import ProductButtons from "../ProductButtons";
import ProductDetailsSpecifications from "../ProductDetailsSpecifications";
import ProductTitle from "../ProductTitle";
import ProductDescription from "../ProductDescription";

const DesktopProductDetails = ({ onClose, product, open }) => {
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
    <div>
      <Dialog
        PaperProps={{ className: classes.dialog }}
        fullScreen={fullScreen}
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
              <ProductTitle product={product} onClose={onClose} />
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
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};
export default DesktopProductDetails;
