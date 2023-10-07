import {
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@material-ui/core";
import { FavoriteBorder } from "@mui/icons-material";
import { useStyles } from "./ProductDetailsStyles";

const ProductButtons = ({
  product,
  selectedSize,
  selectedPot,
  handleSizeChange,
  handlePotChange,
  handleAddToCart,
  handleRemoveFromCart,
  isInCart,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.productButtons}>
        {/* Add the size and pot selection */}
        {product && product.sizes && Object.keys(product.sizes).length > 0 && (
          <>
            <Grid item xs={4}>
              <FormControl
                size="small"
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel>Pot</InputLabel>
                <Select
                  label="Pot"
                  value={selectedPot}
                  onChange={handlePotChange}
                >
                  {/* Add your pot options here */}
                  <MenuItem value={"No Pot"}>No Pot</MenuItem>
                  <MenuItem value={"Standard Pot"}>Standard Pot</MenuItem>
                  <MenuItem value={"Deluxe Pot"}>Deluxe Pot</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl
                size="small"
                variant="outlined"
                className={classes.formControl}
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
            <Grid item xs={2} component={Box} height="100%" width="100%">
              <Button className={classes.buyButton} fullWidth>
                <FavoriteBorder />
              </Button>
            </Grid>
            <Grid item xs={2} component={Box} height="100%" width="100%">
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
