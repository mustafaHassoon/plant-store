import * as React from "react";
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import CartItem from "./CartItem";
import { useCart, useCartDispatch } from "../context/CartContext";
import { Colors } from "../theme";
import CloseIcon from "@mui/icons-material/Close";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { useCartStyles } from "./cart.Styles";

const CloseButtonContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: theme.palette.grey[700],
  borderRadius: 0,
  minWidth: 0,
  width: 36,
  height: 36,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: theme.palette.grey[800],
    cursor: "pointer",
  },
}));

const Cart = ({ items, onClose }) => {
  const dispatch = useCartDispatch();
  const cart = useCart();
  const classes = useCartStyles();
  const [showItems, setShowItems] = React.useState(true);

  React.useEffect(() => {
    console.log("Cart component mounted. Items:", items);

    if (items) dispatch({ type: "SET_ITEMS", payload: items });
  }, []);

  function handleEmptyCart() {
    setShowItems(false);
    setTimeout(() => {
      dispatch({ type: "EMPTY_CART" });
    }, 500);
  }

  return (
    <>
      <Box position="relative">
        <CloseButtonContainer onClick={onClose}>
          <CloseIcon style={{ color: "white" }} />
        </CloseButtonContainer>
      </Box>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          overflow="none"
          height="100%"
          maxHeight="calc(100% - 56px)"
          maxWidth="500px"
        >
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: Colors.primary, textAlign: "center" }}
              >
                Shopping Cart
              </Typography>
            </Grid>
          </Grid>
          <Collapse in={showItems}>
            <Grid container spacing={1}>
              {cart.items.map((item, index) => (
                <React.Fragment key={item.id}>
                  {index !== 0 && (
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                  )}
                  <Grid
                    item
                    xs={12}
                    sx={
                      index === cart.items.length - 1
                        ? { marginBottom: "64px" }
                        : {}
                    }
                  >
                    <CartItem {...item} />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Collapse>
          <Grid container spacing={1}>
            {cart.items.length === 0 && (
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: Colors.primary, textAlign: "center" }}
                >
                  Your cart is empty.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Box>
        <Box
          overflow="none"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding={1}
          width="100%"
          bottom={0}
          height={156}
        >
          <Box
            sx={{
              position: "fixed",
              bottom: 0,

              width: "inherit",
              maxWidth: "500px",

              height: "64px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 3,
              backgroundColor: "white",
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleEmptyCart}
              startIcon={<ClearAllIcon />}
              sx={{ margin: "0 8px" }}
            >
              Empty Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onClose}
              sx={{ backgroundColor: Colors.primary, margin: "0 8px" }}
            >
              Continue Shopping
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Cart;
