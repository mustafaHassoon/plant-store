import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Colors } from "../theme";
import service from "../services";
import { IconButton } from "@mui/material";
import { useCartDispatch } from "../context/CartContext";
import { Add, Remove } from "@mui/icons-material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Slide from "@mui/material/Slide";
import { useTheme } from "@mui/material/styles";
import fallbackImage from "../data/fallback.jpg";

import {
  CartItemContainer,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  ActionsContainer,
  CardMediaStyled,
} from "./CartItem.styles";
import React from "react";

const CartItem = (item) => {
  //console.log("Props received in CartItem:", item);
  const [product, setProduct] = useState(null);
  const dispatch = useCartDispatch();
  const [exitTransition, setExitTransition] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await service.getProductById(item.id);
        setProduct(product);
      } catch (error) {
        //console.error(`Error fetching product with id ${item.id}: ${error}`);
      }
    }
    fetchProduct();
  }, [item.id]);

  const [isLoading, setIsLoading] = useState(true);

  const [loadedImages, setLoadedImages] = useState<Array<string | null>>([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const product = service.getProductById(item.id);
        const images = product.imgUrls;

        const loadedImages = await Promise.all(
          images.map(async (image) => {
            const imagePath = await import(`../data${image}`);
            return imagePath.default;
          })
        );

        setLoadedImages(loadedImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, [item.id]);

  if (!product) {
    return null; // or some kind of placeholder
  }

  function handleIncrement(id) {
    //console.log("Incrementing quantity");
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  }

  function handleDecrement(id) {
    if (item.quantity === 1) {
      setExitTransition(true);
      setTimeout(() => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      }, theme.transitions.duration.complex);
    } else {
      dispatch({ type: "DECREMENT_QUANTITY", payload: id });
    }
  }

  return (
    <Slide
      direction="right"
      in={!exitTransition}
      mountOnEnter
      unmountOnExit
      timeout={theme.transitions.duration.complex}
    >
      <CartItemContainer container>
        <LeftColumn item>
          {/* Conditional rendering to ensure loadedImages[0] exists, otherwise use the fallback */}
          {loadedImages[0] ? (
            <CardMediaStyled image={loadedImages[0]} title={item.name} />
          ) : (
            <CardMediaStyled image={fallbackImage} title="Fallback Image" />
          )}
        </LeftColumn>

        <MiddleColumn item>
          <div>
            <Typography gutterBottom variant="h6">
              {item.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {item.options.size}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.location}
            </Typography>
          </div>
          <Typography variant="subtitle1" color="textSecondary">
            {`Price: $${(item.price * item.quantity).toFixed(2)}`}
          </Typography>
        </MiddleColumn>

        <RightColumn item>
          <ActionsContainer>
            <IconButton
              aria-label="add"
              onClick={() => handleIncrement(item.id)}
              size="small"
              sx={{
                borderRadius: "50%",
                borderColor: Colors.primary,
                color: Colors.primary,
                border: "1px solid",
                width: "24px",
                height: "24px",
              }}
            >
              <Add fontSize="small" />
            </IconButton>
            <Typography variant="body1">{item.quantity}</Typography>
            <IconButton
              aria-label="remove"
              onClick={() => handleDecrement(item.id)}
              size="small"
              sx={{
                borderRadius: "50%",
                borderColor: Colors.primary,
                color: Colors.primary,
                border: "1px solid",
                width: "24px",
                height: "24px",
              }}
            >
              {item.quantity === 1 ? (
                <DeleteOutlineIcon fontSize="small" />
              ) : (
                <Remove fontSize="small" />
              )}
            </IconButton>
          </ActionsContainer>
        </RightColumn>
      </CartItemContainer>
    </Slide>
  );
};

CartItem.whyDidYouRender = true;

export default React.memo(CartItem);
