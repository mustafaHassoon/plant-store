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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useFiltersHook from "../../hooks/filtersHook";

import { RxExit } from "react-icons/rx";
import { RxEnter } from "react-icons/rx";
import TuneIcon from "@mui/icons-material/Tune";
import { useFilterStyles } from "../filterStyles";

const DesktopFilters: React.FC = () => {
  const classes = useFilterStyles();
  const {
    open,
    handleClick,
    filterState,
    handleSizeChange,
    handleLocationChange,
    handleCareLevelChange,
    handlePriceRangeChange,
  } = useFiltersHook();
  return (
    <>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Size</Typography>
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
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid m={0} item container sx={{ width: "100%" }}>
            {/* Location filter */}

            <Grid item m={1} sx={{ width: "250px", justifyContent: "center" }}>
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
          <Typography>Care Level</Typography>
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
          <Typography id="range-slider">Price Range</Typography>
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
            getAriaValueText={(value) => `$${value}`}
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DesktopFilters;
