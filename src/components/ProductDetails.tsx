import { Dialog } from "@material-ui/core";
import DesktopProductDetails from "./Desktop/DesktopProductDetails";
import MobileProductDetails from "./Mobile/MobileProductDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useStyles } from "./ProductDetailsStyles";

const ProductDetails = ({ onClose, product, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        PaperProps={{ className: classes.dialog }}
        fullScreen={isMobile}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        {isMobile ? (
          <MobileProductDetails
            product={product}
            onClose={onClose}
            open={open}
          />
        ) : (
          <DesktopProductDetails
            product={product}
            onClose={onClose}
            open={open}
          />
        )}
      </Dialog>
    </div>
  );
};
export default ProductDetails;
