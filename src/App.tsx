/* eslint-disable default-case */
import Product from "./components/Product";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useReducer, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, green, deepOrange, amber } from "@mui/material/colors";
import Drawer from "@mui/material/Drawer";
import React from "react";
import { CartButton } from "./context/appContext";
import Badge from "@mui/material/Badge";
import ItemsPagination from "./components/ItemsPagination";

const theme = createTheme({
  palette: {
    primary: {
      main: amber[500],
    },
    secondary: {
      main: deepOrange[500],
    },
    background: {
      default: orange[50],
    },
  },
});

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  ...theme.typography.body2,
  borderRadius: 1,
  "&:hover": {
    backgroundColor: theme.palette.background.paper,
    transform: "translateY(-5px)",
    boxShadow: "3px 3px 10px ${green[300]}",
  },

  margin: 20,
}));

export const ACTIONS = {
  ADD_PRODUCT_TO_CART: "Add-product-to-cart",
  EMPTY_CART: "empty-cart",
  TOGGLE_DRAWER: "toggle-cart",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_PRODUCT_TO_CART:
      const existingItem = state.currentBascket.find(
        (i) => i.id === payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        return {
          currentBascket: [...state.currentBascket],
        };
      } else {
        let newObject = {
          quantity: 1,
          id: payload.id,
        };
        return {
          ...state,
          currentBascket: [...state.currentBascket, newObject],
        };
      }
    case ACTIONS.EMPTY_CART:
      return {
        currentBascket: [],
      };
  }
}

export const App = () => {
  const [{ currentBascket }, dispatch] = useReducer(reducer, {
    currentBascket: [],
  });
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const [products, setProducts] = useState([]);

  console.log(products);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header></Header>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                p: 1,
                m: 1,
                borderRadius: 2,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {products.map((item) => (
                <Item key={item.id}>
                  <Product
                    price={item.price}
                    id={item.id}
                    title={item.name}
                    quantity="1"
                    image={item.imgUrl}
                    dimensions={item.dimentions}
                    care_level={item.care_level}
                    location={item.location}
                    conditions={item.conditions}
                    dispatch={dispatch}
                  />
                </Item>
              ))}
            </Box>
            <ItemsPagination
              setProducts={(products) => setProducts(products)}
            ></ItemsPagination>
          </Grid>

          <CartButton onClick={toggleDrawer(true)}>
            <Badge badgeContent={currentBascket.length} color="error"></Badge>
          </CartButton>
          <Drawer open={state.right} onClose={toggleDrawer(false)}>
            <Cart
              items={currentBascket}
              onClose={() => setState({ ...state, right: false })}
            />
          </Drawer>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
