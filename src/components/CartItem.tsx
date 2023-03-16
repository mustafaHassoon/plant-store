import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Increment from "./Increment";
import { useReducer, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import service from "../services";

export default function CartItem({ id, quantity }) {
  const theme = useTheme();
  const [product, setProduct] = useState(null);

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

  if (!product) {
    return null; // or some kind of placeholder
  }

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia component="img" sx={{ width: 150 }} image={product.imgUrl} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {product.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {product.price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
