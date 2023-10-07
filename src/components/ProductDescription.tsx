import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./ProductDetailsStyles";

const ProductDescription = ({ product }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.productDescription}>
        {/* Add your description here */}
        <Typography variant="body2">{product.description}</Typography>
      </Box>
    </>
  );
};

export default ProductDescription;
