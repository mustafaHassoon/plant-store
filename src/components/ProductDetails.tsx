import { Dialog } from "@mui/material";
import DesktopProductDetails from "./Desktop/DesktopProductDetails";
import MobileProductDetails from "./Mobile/MobileProductDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000, // custom value for md
      lg: 1280,
      xl: 1920,
    },
  },
});

const ProductDetails = ({ onClose, product, open }) => {
  console.log(theme.breakpoints.values.sm);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        {useMediaQuery(theme.breakpoints.down("md")) ? (
          <MobileProductDetails
            product={product}
            onClose={onClose}
            open={open}
            isMobile={isMobile}
          />
        ) : (
          <DesktopProductDetails
            product={product}
            onClose={onClose}
            open={open}
            isMobile={isMobile}
          />
        )}
      </Dialog>
    </div>
  );
};
export default ProductDetails;
