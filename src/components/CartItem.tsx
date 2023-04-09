import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { Colors } from "../theme";
import service from "../services";
import { Box, Grid, IconButton } from "@mui/material";
import { useCartDispatch } from "../context/CartContext";
import { Add, Remove } from "@mui/icons-material";
import { styled } from "@mui/system";
import {
  CartItemContainer,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  ActionsContainer,
  CardMediaStyled,
} from "./CartItem.styles";

export default function CartItem({ id, options, quantity }) {
  const [product, setProduct] = useState(null);
  const dispatch = useCartDispatch();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await service.getProductById(id);
        setProduct(product);
      } catch (error) {
        console.error(`Error fetching product with id ${id}: ${error}`);
      }
    }
    fetchProduct();
  }, [id]);

  const [isLoading, setIsLoading] = useState(true);

  const [loadedImages, setLoadedImages] = useState<Array<string | null>>([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const product = service.getProductById(id);
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
  }, [id]);

  if (!product) {
    return null; // or some kind of placeholder
  }

  function handleIncrement(id) {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  }

  function handleDecrement(id) {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  }
  console.log(product.imgUrl);
  return (
    <CartItemContainer container>
      <LeftColumn item>
        <CardMediaStyled image={loadedImages[0]} title={product.title} />
      </LeftColumn>
      <MiddleColumn item>
        <div>
          <Typography gutterBottom variant="h6">
            {product.name}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {product.dimentions.h} * {product.dimentions.w}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {id}
          </Typography>
        </div>
        <Typography variant="subtitle1" color="textSecondary">
          {`Price: $${(product.price * quantity).toFixed(2)}`}
        </Typography>
      </MiddleColumn>
      <RightColumn item>
        <ActionsContainer>
          <IconButton
            aria-label="add"
            onClick={() => handleIncrement(id)}
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
          <Typography variant="body1">{quantity}</Typography>
          <IconButton
            aria-label="remove"
            onClick={() => handleDecrement(id)}
            disabled={quantity === 1}
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
            <Remove fontSize="small" />
          </IconButton>
        </ActionsContainer>
      </RightColumn>
    </CartItemContainer>
  );
}
