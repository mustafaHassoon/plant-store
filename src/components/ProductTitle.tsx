import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./ProductDetailsStyles";
import { HiOutlineLocationMarker } from "react-icons/hi";
import CloseIcon from "@mui/icons-material/Close";

const ProductTitle = ({
  product,

  onClose,
}) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.productTitle}>
        {/* Add your title, subtitle, and caption here */}
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="subtitle1">{product.family}</Typography>
        <Typography variant="caption">
          {" "}
          <HiOutlineLocationMarker size={12} /> {product.location}
        </Typography>
        <Box className={classes.closeButtonContainer} onClick={onClose}>
          <CloseIcon style={{ color: "white" }} />
        </Box>
      </Box>
    </>
  );
};

export default ProductTitle;
