import { Box, Typography } from "@mui/material";
import { useProductDetailsDesktopStyles } from "./DesktopProductDetailsStyles";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CloseIcon from "@mui/icons-material/Close";
import { useProductDetailsMobileStyles } from "./MobileProductDetailsStyles";
import service from "../services";

const ProductTitle = ({ product, isMobile, onClose, selectedSize }) => {
  const desktopClasses = useProductDetailsDesktopStyles();
  const mobileClasses = useProductDetailsMobileStyles();
  const productData = service.getProductById(product.id);

  const classes = (isMobile ? mobileClasses : desktopClasses) as any;

  const firstAvailableSize = Object.entries(productData.sizes).find(
    ([, sizeDetails]) => sizeDetails.available
  )?.[0];

  const firstAvailableSizePrice = productData.sizes[firstAvailableSize]?.price;
  const hasAvailableSize = firstAvailableSize !== undefined;

  return (
    <Box className={classes.productHeader}>
      <Box className={classes.productHeaderTitle}>
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="subtitle1">{product.family}</Typography>
        <Typography variant="caption">
          <HiOutlineLocationMarker size={12} /> {product.location}
        </Typography>
      </Box>
      <Box className={classes.productHeaderPrice}>
        <Typography
          className={!hasAvailableSize ? classes.hidePrice : ""}
          style={{ textShadow: "2px 2px 7px rgba(0, 0, 0, 0.4)" }}
          variant="h5"
        >
          € {selectedSize && product.sizes[selectedSize].potSize}
        </Typography>
      </Box>
      <Box className={classes.closeButtonContainer} onClick={onClose}>
        <CloseIcon style={{ color: "white" }} />
      </Box>
    </Box>
  );
};

export default ProductTitle;
