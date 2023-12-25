import { Box, Typography } from "@mui/material";
import { useProductDetailsDesktopStyles } from "./DesktopProductDetailsStyles";
import { useProductDetailsMobileStyles } from "./MobileProductDetailsStyles";

const ProductDescription = ({ product, isMobile }) => {
  const desktopClasses = useProductDetailsDesktopStyles();
  const mobileClasses = useProductDetailsMobileStyles();
  const classes = (isMobile ? mobileClasses : desktopClasses) as any;

  return (
    <>
      <Box className={classes.productDescription}>
        <Typography variant="body2" sx={{ marginLeft: 2, marginRight: 2 }}>
          {product.description}
        </Typography>
      </Box>
    </>
  );
};

export default ProductDescription;
