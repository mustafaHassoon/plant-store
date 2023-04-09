import * as React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CartItem from "./CartItem";
import { useCart, useCartDispatch } from "../context/CartContext";
import { Colors } from "../theme";

export default function Cart({ items, onClose }) {
  const dispatch = useCartDispatch();
  const cart = useCart();

  React.useEffect(() => {
    if (items) dispatch({ type: "SET_ITEMS", payload: items });
  }, []);

  function handleEmptyCart() {
    dispatch({ type: "EMPTY_CART" });
  }

  return (
    <Container maxWidth="xs">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom sx={{ color: Colors.primary }}>
            Shopping Cart
          </Typography>
        </Grid>
        {cart.items.map((item) => (
          <React.Fragment key={item.id}>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <CartItem {...item} />
            </Grid>
          </React.Fragment>
        ))}
        {cart.items.length === 0 && (
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: Colors.muted }}>
              Your cart is empty.
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop={2}
            padding={1}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onClose}
              sx={{ backgroundColor: Colors.primary }}
            >
              Continue Shopping
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Typography variant="caption" sx={{ color: Colors.gray700 }}>
              Total:
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
