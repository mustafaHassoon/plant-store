import { Typography, Box } from "@material-ui/core";

import { MdHeight } from "react-icons/md";
import { RxWidth } from "react-icons/rx";
import { GiPlantWatering } from "react-icons/gi";
import { TbCircuitGround } from "react-icons/tb";
import { TbCircleDashed } from "react-icons/tb";
import { TbBrightnessUp } from "react-icons/tb";
import { TbBrightnessDown } from "react-icons/tb";
import { RiHandHeartLine } from "react-icons/ri";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherPartlySunny } from "react-icons/ti";

import { useStyles } from "./ProductDetailsStyles";

interface ProductDetailsSpecificationsProps {
  product: any;
  selectedSize: string;
}

const ProductDetailsSpecifications: React.FC<
  ProductDetailsSpecificationsProps
> = ({ product, selectedSize }) => {
  const classes = useStyles();
  const renderBrightnessIcon = () => {
    if (
      product.conditions.light_amount === "Bright" ||
      product.conditions.light_amount === "Medium"
    ) {
      return <TbBrightnessUp size={24} />;
    } else if (product.conditions.light_amount === "Low") {
      return <TbBrightnessDown size={24} />;
    }
    return null;
  };

  const renderLightTypeIcon = () => {
    if (product.conditions.light_type === "Direct") {
      return <TiWeatherSunny size={24} />;
    } else if (product.conditions.light_type === "Indirect") {
      return <TiWeatherPartlySunny size={24} />;
    }
    return null;
  };

  return (
    <Box className={`${classes.productDetails} ${classes.gridItem}`}>
      <Box
        className={`${classes.productDetailsTextContainer} ${classes.gridItem}`}
      >
        <Box className={classes.iconRow}>
          <TbCircleDashed size={24} />
          <Typography
            variant="body2"
            className={classes.productDetailsText}
            gutterBottom
          >
            {selectedSize && product.sizes[selectedSize].potSize} ⌀ cm
          </Typography>
        </Box>
        <Box className={classes.iconRow}>
          <MdHeight size={24} />
          <Typography
            variant="body2"
            className={classes.productDetailsText}
            gutterBottom
          >
            {selectedSize && product.sizes[selectedSize].dimensions.h} cm
          </Typography>
        </Box>
        <Box className={classes.iconRow}>
          <RxWidth size={24} />
          <Typography
            variant="body2"
            className={classes.productDetailsText}
            gutterBottom
          >
            {selectedSize && product.sizes[selectedSize].dimensions.w} cm
          </Typography>
        </Box>
        <Box className={classes.iconRow}>
          <GiPlantWatering size={24} />
          <Typography
            variant="body2"
            className={classes.productDetailsText}
            gutterBottom
          >
            {product.conditions.water}
          </Typography>
        </Box>
        <Box className={classes.iconRow}>
          {renderLightTypeIcon()}
          <Typography
            variant="body2"
            className={classes.productDetailsText}
            gutterBottom
          >
            {product.conditions.light_type}
          </Typography>
        </Box>
        <Box className={classes.iconRow}>
          {renderBrightnessIcon()}
          <Typography
            variant="body2"
            className={classes.productDetailsText}
            gutterBottom
          >
            {product.conditions.light_amount}
          </Typography>
        </Box>
        <Box className={classes.iconRow}>
          <RiHandHeartLine size={24} />
          <Typography
            variant="body2"
            className={classes.productDetailsText}
            gutterBottom
          >
            {product.care_level}
          </Typography>
        </Box>
        <Box className={classes.iconRow}>
          <TbCircuitGround size={24} />
          <Typography
            variant="body2"
            className={classes.productDetailsText}
            gutterBottom
          >
            {product.conditions.soil}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailsSpecifications;
