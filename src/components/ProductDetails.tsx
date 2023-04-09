import React from "react";
import { Dialog, Typography, Box, Button } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import service from "../services";
import ImagesCarousel from "./ImagesCarousel";
import { useCartDispatch } from "../context/CartContext";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { FormControl, MenuItem } from "@material-ui/core";

import { RiPlantLine } from "react-icons/ri";
import { MdHeight } from "react-icons/md";
import { RxWidth } from "react-icons/rx";
import { GiPlantWatering } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsBrightnessLow } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiHandHeartLine } from "react-icons/ri";

import { SoilTypeText, useStyles } from "./ProductDetailsStyles";

const ProductDetails = ({ onClose, product, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [soilType, setSoilType] = useState(null);
  const dispatch = useCartDispatch();

  const [selectedSize, setSelectedSize] = useState(() => {
    if (product && product.sizes) {
      const firstAvailableSize = Object.keys(product.sizes).find(
        (size) => product.sizes[size].available
      );
      return firstAvailableSize || "";
    }
    return "";
  });

  const [selectedPot, setSelectedPot] = useState("No Pot");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  useEffect(() => {
    if (product) {
      try {
        const foundSoilType = service.getSoilTypeById(product.conditions.soil);
        setSoilType(foundSoilType);
      } catch (error) {
        console.error(error.message);
      }
    }
  }, [product]);

  const handlePotChange = (event) => {
    setSelectedPot(event.target.value);
  };
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        options: { size: selectedSize, pot: selectedPot },
      },
    });
    console.log("Added to cart with size:", selectedSize);
  };

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
            <Box
              className={`${classes.productDetailsText} ${classes.gridItem}`}
            >
              <RiPlantLine size={24} />
              <MdHeight size={24} />
              <RxWidth size={24} />
              <GiPlantWatering size={24} />
              <MdOutlineLightMode size={24} />
              <TbCircleDashed size={24} />
              <BsBrightnessLow size={24} />
              <BsBrightnessHigh size={24} />
              <HiOutlineLocationMarker size={24} />
              <RiHandHeartLine size={24} />
            </Box>
            <Box className={`${classes.productSoil} ${classes.gridItem}`}>
              {soilType && (
                <>
                  <img
                    className={classes.soilImage}
                    src={soilType.image_url}
                    alt={soilType.type}
                  />
                  <SoilTypeText>
                    <Typography variant="h6" component="div">
                      {soilType.type}
                    </Typography>
                  </SoilTypeText>
                </>
              )}
            </Box>
          </Box>
          <Box className={`${classes.productDescription} ${classes.gridItem}`}>
            <Box className={`${classes.productText} ${classes.gridItem}`}>
              description / price / quantity / add to cart
              {/* Add the size and pot selection */}
              {product &&
                product.sizes &&
                Object.keys(product.sizes).length > 0 && (
                  <>
                    <FormControl>
                      <InputLabel>Select Pot</InputLabel>
                      <Select value={selectedPot} onChange={handlePotChange}>
                        {/* Add your pot options here */}
                        <MenuItem value={"No Pot"}>No Pot</MenuItem>
                        <MenuItem value={"Standard Pot"}>Standard Pot</MenuItem>
                        <MenuItem value={"Deluxe Pot"}>Deluxe Pot</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <InputLabel>Select Size</InputLabel>
                      <Select value={selectedSize} onChange={handleSizeChange}>
                        {Object.entries(product.sizes)
                          .filter(
                            ([, sizeDetails]: [string, any]) =>
                              sizeDetails.available
                          )
                          .map(([size, _]: [string, any]) => (
                            <MenuItem key={size} value={size}>
                              {size}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </>
                )}
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};
export default ProductDetails;
