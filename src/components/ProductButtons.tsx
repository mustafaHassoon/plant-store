import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { useProductDetailsDesktopStyles } from "./DesktopProductDetailsStyles";
import { useProductDetailsMobileStyles } from "./MobileProductDetailsStyles";

const ProductButtons = ({
  product,
  selectedSize,
  handleSizeChange,
  handleAddToCart,
  handleRemoveFromCart,
  isInCart,
  isMobile,
}) => {
  const desktopClasses = useProductDetailsDesktopStyles();
  const mobileClasses = useProductDetailsMobileStyles();
  const classes = (isMobile ? mobileClasses : desktopClasses) as any;

  return (
    <>
      <Grid container className={classes.productButtons} alignItems="center">
        {/* Add the size and pot selection */}
        {product && product.sizes && Object.keys(product.sizes).length > 0 && (
          <>
            <Grid
              item
              xs={5}
              component={Box}
              height="100%"
              width="100%"
              className={classes.gridItemCentered}
            >
              <FormControl
                size="medium"
                variant="outlined"
                className={classes.buyButton}
                // fullWidth
              >
                <InputLabel>Size</InputLabel>
                <Select
                  label="Size"
                  value={selectedSize}
                  onChange={handleSizeChange}
                >
                  {Object.entries(product.sizes)
                    .filter(
                      ([, sizeDetails]: [string, any]) => sizeDetails.available
                    )
                    .map(([size, _]: [string, any]) => (
                      <MenuItem key={size} value={size}>
                        {size}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={3}
              component={Box}
              height="100%"
              width="100%"
              className={classes.gridItemCentered}
            >
              <Button className={classes.buyButton} fullWidth>
                <FavoriteBorder />
              </Button>
            </Grid>
            <Grid
              item
              xs={4}
              component={Box}
              height="100%"
              width="100%"
              className={classes.gridItemCentered}
            >
              <Button
                className={classes.buyButton}
                onClick={isInCart() ? handleRemoveFromCart : handleAddToCart}
                disabled={!selectedSize} // Disable the button if no size is selected
                fullWidth
              >
                {isInCart() ? "Remove from cart" : "Buy"}
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default ProductButtons;
