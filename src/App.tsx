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
import { Button, FormControl, FormGroup, ThemeProvider } from "@mui/material";
import theme from "./theme";
import lightTheme from "./theme";
import darkTheme from "./theme";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const App = () => {
  const cart = useCart();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);

  const [heightFilter, setHeightFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState({
    Indoor: false,
    outdoor: false,
  });
  const [priceRange, setPriceRange] = useState([0, 30]); // Adjust the initial range as needed

  const handleSizeChange = (
    event: React.MouseEvent<HTMLElement>,
    newSize: string[]
  ) => {
    setSizeFilter(newSize);
  };

  const [careLevelFilter, setCareLevelFilter] = useState({
    easy: false,
    moderate: false,
    high: false,
  });

  const handleHeightChange = (event, newHeight) => {
    setHeightFilter(newHeight);
  };

  const handleLocationChange = (event) => {
    setLocationFilter({
      ...locationFilter,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCareLevelChange = (event) => {
    setCareLevelFilter({
      ...careLevelFilter,
      [event.target.name]: event.target.checked,
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [state, setState] = React.useState({
    right: false,
  });

  const [products, setProducts] = useState([]);
  console.log(products);
  const marks = [
    { value: priceRange[0], label: `$${priceRange[0]}` },
    { value: priceRange[1], label: `$${priceRange[1]}` },
  ];

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CartProvider>
        <Header></Header>

        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} md={2}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  margin: "10px auto",
                  maxWidth: "100%",
                  minWidth: "250px",
                  width: "100%",
                }}
              >
                <Grid container spacing={1} direction="column">
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography gutterBottom>Size</Typography>
                  </Grid>
                  <Grid item sx={{ width: "300px", justifyContent: "center" }}>
                    {/* Size filter */}
                    <ToggleButtonGroup
                      value={sizeFilter}
                      onChange={handleSizeChange}
                      aria-label="size filter"
                    >
                      <ToggleButton
                        value="small"
                        aria-label="small"
                        sx={{ width: "60px" }}
                      >
                        S
                      </ToggleButton>
                      <ToggleButton
                        value="medium"
                        aria-label="medium"
                        sx={{ width: "60px" }}
                      >
                        M
                      </ToggleButton>
                      <ToggleButton
                        value="large"
                        aria-label="large"
                        sx={{ width: "60px" }}
                      >
                        L
                      </ToggleButton>
                      <ToggleButton
                        value="extraLarge"
                        aria-label="extra-large"
                        sx={{ width: "60px" }}
                      >
                        XL
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography gutterBottom>Location</Typography>
                  </Grid>
                  <Grid item container sx={{ width: "100%" }}>
                    {/* Location filter */}
                    <Grid
                      item
                      xs={6}
                      container
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Typography>Indoor</Typography>
                      <Checkbox
                        checked={locationFilter.Indoor}
                        onChange={handleLocationChange}
                        name="Indoor"
                        color="primary"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      container
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Typography>Outdoor</Typography>
                      <Checkbox
                        checked={locationFilter.outdoor}
                        onChange={handleLocationChange}
                        name="outdoor"
                        color="primary"
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    sx={{
                      width: "100%",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography gutterBottom>Care Level</Typography>
                  </Grid>
                  <Grid item container sx={{ width: "100%" }}>
                    {/* Care Level filter */}
                    <Grid
                      item
                      xs={4}
                      container
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Typography>Easy</Typography>
                      <Checkbox
                        checked={careLevelFilter.easy}
                        onChange={handleCareLevelChange}
                        name="easy"
                        color="primary"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      container
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Typography>Moderate</Typography>
                      <Checkbox
                        checked={careLevelFilter.moderate}
                        onChange={handleCareLevelChange}
                        name="moderate"
                        color="primary"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      container
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Typography>High</Typography>
                      <Checkbox
                        checked={careLevelFilter.high}
                        onChange={handleCareLevelChange}
                        name="high"
                        color="primary"
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    <Typography id="range-slider" gutterBottom>
                      Price Range
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      width: "100%",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    {/* Price Range filter */}
                    <Slider
                      value={priceRange}
                      onChangeCommitted={(event, newValue) =>
                        setPriceRange(newValue as number[])
                      }
                      min={0} // Replace with the actual minimum price if needed
                      max={100} // Replace with the actual maximum price if needed
                      marks={marks}
                      getAriaValueText={(value) => `$${value}`}
                    />
                  </Grid>
                </Grid>
              </Paper>
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
                {products
                  .filter((item) => {
                    const hasSize =
                      sizeFilter.length === 0 ||
                      sizeFilter.some((size) => item.sizes[size]?.available);
                    const hasLocation =
                      (!locationFilter.Indoor && !locationFilter.outdoor) ||
                      locationFilter[item.location];
                    const hasCareLevel =
                      (!careLevelFilter.easy &&
                        !careLevelFilter.moderate &&
                        !careLevelFilter.high) ||
                      careLevelFilter[item.care_level.toLowerCase()];

                    return hasSize && hasLocation && hasCareLevel;
                  })
                  .map((item, index) => (
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
              <Button onClick={toggleTheme}>Toggle Theme</Button>
              <ItemsPagination
                setProducts={(products) => setProducts(products)}
                heightFilter={heightFilter}
                locationFilter={locationFilter}
                careLevelFilter={careLevelFilter}
                sizeFilter={sizeFilter}
                priceRange={priceRange}
              />
            </Grid>

            <Grid item xs={false} sm={false} md={2} />
          </Grid>
        </Container>
        <Footer></Footer>
      </CartProvider>
    </ThemeProvider>
  );
};
