import React, { useState } from "react";
import {
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Checkbox,
  Slider,
  Grid,
  Paper as MuiPaper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  styled,
  Button,
  Collapse,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFilterContext } from "../context/FilterContext";
import { RxExit } from "react-icons/rx";
import { RxEnter } from "react-icons/rx";
import TuneIcon from "@mui/icons-material/Tune";

const useStyles = makeStyles((theme: Theme) => ({
  toggleButton: {
    textTransform: "none",
    fontSize: "0.8rem",
    flex: 1, // make the button fill available space evenly
  },
  icon: {
    fontSize: "1.5em",
    marginRight: "10px",
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));

const Filters = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleToggleButtonChange = (event, newValue) => {
    // create a synthetic event to match what handleLocationChange expects
    const syntheticEvent = {
      target: {
        name: event.currentTarget.name,
        checked: newValue,
      },
    } as React.ChangeEvent<HTMLInputElement>;
  };

  const Paper = styled(MuiPaper)(({ theme }) => ({
    padding: 0,
    margin: "10px auto",
    maxWidth: "100%",
    minWidth: "250px",
    width: "100%",
  }));

  const {
    filterState,
    handleSizeChange,
    handleLocationChange,
    handleCareLevelChange,
    handlePriceRangeChange,
  } = useFilterContext();

  const marks = [
    {
      value: filterState.priceRange[0],
      label: `$${filterState.priceRange[0]}`,
    },
    {
      value: filterState.priceRange[1],
      label: `$${filterState.priceRange[1]}`,
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 0,
        margin: "10px auto",
        maxWidth: "100%",
        minWidth: "250px",
        width: "100%",
      }}
    >
      {!isSmallScreen ? (
        // Render accordion components for medium and large screens
        <>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography gutterBottom>Size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ToggleButtonGroup
                value={filterState.sizeFilter}
                onChange={handleSizeChange}
                aria-label="size filter"
              >
                <ToggleButton
                  value="small"
                  aria-label="small"
                  sx={{ width: "55px" }}
                >
                  S
                </ToggleButton>
                <ToggleButton
                  value="medium"
                  aria-label="medium"
                  sx={{ width: "55px" }}
                >
                  M
                </ToggleButton>
                <ToggleButton
                  value="large"
                  aria-label="large"
                  sx={{ width: "55px" }}
                >
                  L
                </ToggleButton>
                <ToggleButton
                  value="extraLarge"
                  aria-label="extra-large"
                  sx={{ width: "55px" }}
                >
                  XL
                </ToggleButton>
              </ToggleButtonGroup>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography gutterBottom>Location</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid m={1} item container sx={{ width: "100%" }}>
                {/* Location filter */}

                <Grid
                  item
                  m={1}
                  sx={{ width: "250px", justifyContent: "center" }}
                >
                  {/* Location filter */}
                  <ToggleButtonGroup
                    value={filterState.locationFilter}
                    onChange={handleLocationChange}
                    aria-label="location filter"
                  >
                    <ToggleButton
                      value="Indoor"
                      aria-label="indoor"
                      style={{ textTransform: "none", fontSize: "0.8rem" }}
                      className={classes.toggleButton}
                    >
                      <RxEnter className={classes.icon} />
                      Indoor
                    </ToggleButton>
                    <ToggleButton
                      value="Outdoor"
                      aria-label="outdoor"
                      style={{ textTransform: "none", fontSize: "0.8rem" }}
                      className={classes.toggleButton}
                    >
                      <RxExit className={classes.icon} />
                      Outdoor
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography gutterBottom>Care Level</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid item container sx={{ width: "100%" }}>
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
                    checked={filterState.careLevelFilter.easy}
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
                    checked={filterState.careLevelFilter.moderate}
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
                    checked={filterState.careLevelFilter.high}
                    onChange={handleCareLevelChange}
                    name="high"
                    color="primary"
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography id="range-slider" gutterBottom>
                Price Range
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Price Range filter */}
              <Slider
                value={filterState.priceRange}
                onChange={(event, newValue) => {
                  handlePriceRangeChange(event, newValue as number[]);
                }}
                min={0}
                max={100}
                marks={marks}
                getAriaValueText={(value) => `$${value}`}
              />
            </AccordionDetails>
          </Accordion>
        </>
      ) : (
        // Render layout for small screens
        <div>
          <Button onClick={handleClick} sx={{ width: "100%" }}>
            <TuneIcon className={classes.icon} />
            Filters
          </Button>
          <Collapse in={open}>
            <Grid container spacing={1} direction="column">
              <Grid
                item
                m={1}
                sx={{
                  width: "100%",
                  wordWrap: "break-word",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                <Typography gutterBottom>Size</Typography>
              </Grid>
              <Grid item m={0} sx={{ width: "100%", justifyContent: "center" }}>
                {/* Size filter */}
                <ToggleButtonGroup
                  value={filterState.sizeFilter}
                  onChange={handleSizeChange}
                  aria-label="size filter"
                  sx={{ width: "100%" }}
                >
                  <ToggleButton
                    value="small"
                    aria-label="small"
                    className={classes.toggleButton}
                  >
                    S
                  </ToggleButton>
                  <ToggleButton
                    value="medium"
                    aria-label="medium"
                    className={classes.toggleButton}
                  >
                    M
                  </ToggleButton>
                  <ToggleButton
                    value="large"
                    aria-label="large"
                    className={classes.toggleButton}
                  >
                    L
                  </ToggleButton>
                  <ToggleButton
                    value="extraLarge"
                    aria-label="extra-large"
                    className={classes.toggleButton}
                  >
                    XL
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid m={0} item container sx={{ width: "100%" }}>
                {/* Location filter */}
                <Grid
                  item
                  m={1}
                  sx={{
                    width: "100%",
                    wordWrap: "break-word",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  <Typography gutterBottom>Location</Typography>
                </Grid>
                <Grid
                  item
                  m={0}
                  sx={{ width: "100%", justifyContent: "center" }}
                >
                  {/* Location filter */}
                  <ToggleButtonGroup
                    value={filterState.locationFilter}
                    onChange={handleLocationChange}
                    aria-label="location filter"
                    sx={{ width: "100%" }}
                  >
                    <ToggleButton
                      value="Indoor"
                      aria-label="indoor"
                      className={classes.toggleButton}
                    >
                      <RxEnter className={classes.icon} />
                      Indoor
                    </ToggleButton>
                    <ToggleButton
                      value="Outdoor"
                      aria-label="outdoor"
                      className={classes.toggleButton}
                    >
                      <RxExit className={classes.icon} />
                      Outdoor
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
              </Grid>
              <Grid
                item
                m={1}
                sx={{
                  width: "100%",
                  wordWrap: "break-word",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                <Typography gutterBottom>Care Level</Typography>
              </Grid>
              <Grid item m={1} container sx={{ width: "100%" }}>
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
                    checked={filterState.careLevelFilter.easy}
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
                    checked={filterState.careLevelFilter.moderate}
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
                    checked={filterState.careLevelFilter.high}
                    onChange={handleCareLevelChange}
                    name="high"
                    color="primary"
                  />
                </Grid>
              </Grid>
              <Grid item m={2} sx={{ padding: "20px" }}>
                <Typography id="range-slider" gutterBottom>
                  Price Range
                </Typography>
                <Slider
                  value={filterState.priceRange}
                  onChange={(event, newValue) => {
                    handlePriceRangeChange(event, newValue as number[]);
                  }}
                  min={0}
                  max={100}
                  marks={marks}
                  getAriaValueText={(value) => `$${value}`}
                />
              </Grid>
            </Grid>
          </Collapse>
        </div>
      )}
    </Paper>
  );
};

export default Filters;
