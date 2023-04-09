import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import React from "react";
import { CartProvider } from "./context/CartContext";
import { useCart } from "./context/CartContext";
import ItemsPagination from "./components/ItemsPagination";
import Grow from "@material-ui/core/Grow";
import { Button, ThemeProvider } from "@mui/material";
import theme from "./theme";
import lightTheme from "./theme";
import darkTheme from "./theme";

export const App = () => {
  const cart = useCart();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [state, setState] = React.useState({
    right: false,
  });

  const [products, setProducts] = useState([]);
  console.log(products);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CartProvider>
        <Header></Header>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  p: 1,
                  m: 1,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                {products.map((item, index) => (
                  <Grow
                    key={item.id}
                    in={true}
                    style={{ transformOrigin: "0 0 0" }}
                    timeout={500 + 100 * index}
                  >
                    <Box>
                      <Product
                        price={item.price}
                        id={item.id}
                        title={item.name}
                        images={item.imgUrls}
                        dimentions={item.dimentions}
                        care_level={item.care_level}
                        location={item.location}
                        conditions={item.conditions}
                        soil={item.soil}
                      />
                    </Box>
                  </Grow>
                ))}
              </Box>
              <Button onClick={toggleTheme}>Toggle Theme</Button>
              <ItemsPagination
                setProducts={(products) => setProducts(products)}
              ></ItemsPagination>
            </Grid>
            <Drawer>
              <Cart
                items={cart}
                onClose={() => setState({ ...state, right: false })}
              />
            </Drawer>
          </Grid>
        </Container>
        <Footer></Footer>
      </CartProvider>
    </ThemeProvider>
  );
};
