import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { CartProvider } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import ItemsPagination from "../components/ItemsPagination";
import Grow from "@material-ui/core/Grow";
import { IconButton, ThemeProvider } from "@mui/material";
import lightTheme from "../theme";
import darkTheme from "../theme";

import Typography from "@mui/material/Typography";

import { useFilterContext } from "../context/FilterContext";
import Filters from "../components/Filters";
import CloseIcon from "@mui/icons-material/Close";

const Store = () => {
  const cart = useCart();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const [products, setProducts] = useState([]);

  const {
    filterState,
    handleSizeChange,
    handleHeightChange,
    handleLocationChange,
    handleCareLevelChange,
    handlePriceRangeChange,
    handleSearchTextChange,
    resetFilters,
  } = useFilterContext();

  const formatSelectedLocations = (locationFilter) => {
    let locations = [];
    for (let location in locationFilter) {
      if (locationFilter[location]) {
        locations.push(location);
      }
    }
    return locations.length > 0
      ? ` and in location(s) ${locations.join(", ")}`
      : "";
  };

  const formatSelectedCareLevels = (careLevelFilter) => {
    let careLevels = [];
    for (let careLevel in careLevelFilter) {
      if (careLevelFilter[careLevel]) {
        careLevels.push(careLevel);
      }
    }
    return careLevels.length > 0
      ? ` and with care level(s) ${careLevels.join(", ")}`
      : "";
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={2}>
            <Filters />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
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
              {filterState.searchText && (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  mb={1}
                  mt={1}
                  ml={6}
                  mr={6}
                >
                  <Typography variant="h6">
                    {`${totalCount} result(s) for (${filterState.searchText})`}

                    {filterState.sizeFilter.length > 0 &&
                      ` and with size ${filterState.sizeFilter.join(", ")}`}
                    {formatSelectedLocations(filterState.locationFilter)}
                    {filterState.heightFilter &&
                      ` and with height ${filterState.heightFilter}`}
                    {formatSelectedCareLevels(filterState.careLevelFilter)}
                    {filterState.priceRange &&
                      ` and with price range ${filterState.priceRange[0]} - ${filterState.priceRange[1]}`}
                  </Typography>
                  <IconButton onClick={resetFilters}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              )}
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
                      family={item.family}
                      title={item.name}
                      images={item.imgUrls}
                      dimentions={item.dimentions}
                      care_level={item.care_level}
                      location={item.location}
                      conditions={item.conditions}
                      soil={item.soil}
                      description={item.description}
                    />
                  </Box>
                </Grow>
              ))}
            </Box>
            {/* <Button onClick={toggleTheme}>Toggle Theme</Button> */}
            <ItemsPagination
              setPaginationData={(products, totalCount) => {
                setProducts(products);
                setTotalCount(totalCount);
              }}
            />
          </Grid>
          <Grid item xs={false} sm={false} md={2} />
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Store;
