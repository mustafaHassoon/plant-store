import React from "react";
import { useCart, useCartDispatch } from "../context/CartContext";

import {
  Dialog,
  Typography,
  Box,
  Button,
  Grid,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import service from "../services";
import ImagesCarousel from "./ImagesCarousel";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { FormControl, MenuItem } from "@material-ui/core";

import { MdHeight } from "react-icons/md";
import { RxWidth } from "react-icons/rx";
import { GiPlantWatering } from "react-icons/gi";
import { TbCircuitGround } from "react-icons/tb";
import { TbCircleDashed } from "react-icons/tb";
import { TbBrightnessUp } from "react-icons/tb";
import { TbBrightnessDown } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiHandHeartLine } from "react-icons/ri";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherPartlySunny } from "react-icons/ti";

import { useStyles } from "./ProductDetailsStyles";
import { FavoriteBorder } from "@mui/icons-material";

const ProductDetails = ({ onClose, product, open }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useCartDispatch();
  const cart = useCart();

  //console.log(cart);

  const isInCart = () => {
    return cart.items.some((item) => item.id === product.id);
  };

  const handleRemoveFromCart = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: product.id,
    });
    console.log("Removed from cart with size:", selectedSize);
  };

  const [selectedSize, setSelectedSize] = useState(() => {
    if (product && product.sizes) {
      const firstAvailableSize = Object.keys(product.sizes).find(
        (size) => product.sizes[size].available
      );
      //console.log(firstAvailableSize);
      return firstAvailableSize || "";
    }
    return "";
  });

  //console.log(selectedSize);

  const [selectedPot, setSelectedPot] = useState("No Pot");
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const renderBrightnessIcon = () => {
    if (
      product.conditions.light_amount === "Bright" ||
      product.conditions.light_amount === "Medium"
    ) {
      return <TbBrightnessUp size={24} />;
    } else if (product.conditions.light_amount === "Low") {
      return <TbBrightnessDown size={24} />;
    }
  };

  const renderLightTypeIcon = () => {
    if (product.conditions.light_type === "Direct") {
      return <TiWeatherSunny size={24} />;
    } else if (product.conditions.light_type === "Indirect") {
      return <TiWeatherPartlySunny size={24} />;
    }
  };

  const handlePotChange = (event) => {
    setSelectedPot(event.target.value);
  };
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        price: product.sizes[selectedSize].price,
        options: { size: selectedSize, pot: selectedPot },
      },
    });
    console.log("Added to cart with size:", selectedSize);
  };

  //console.log(product);

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
          <Box className={`${classes.productDescription} ${classes.gridItem}`}>
            <Box
              className={`${classes.productText} ${classes.gridItem}`}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Box className={classes.upperSection}>
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
              <Box className={classes.middleSection}>
                {/* Add your description here */}
                <Typography variant="body2">{product.description}</Typography>
              </Box>

              <Grid container className={classes.lowerSection}>
                {/* Add the size and pot selection */}
                {product &&
                  product.sizes &&
                  Object.keys(product.sizes).length > 0 && (
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
                            <MenuItem value={"Standard Pot"}>
                              Standard Pot
                            </MenuItem>
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
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        component={Box}
                        height="100%"
                        width="100%"
                      >
                        <Button className={classes.buyButton} fullWidth>
                          <FavoriteBorder />
                        </Button>
                      </Grid>
                      <Grid
                        item
                        xs={2}
                        component={Box}
                        height="100%"
                        width="100%"
                      >
                        <Button
                          className={classes.buyButton}
                          onClick={
                            isInCart() ? handleRemoveFromCart : handleAddToCart
                          }
                          disabled={!selectedSize} // Disable the button if no size is selected
                          fullWidth
                        >
                          {isInCart() ? "Remove from cart" : "Buy"}
                        </Button>
                      </Grid>
                    </>
                  )}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};
export default ProductDetails;
