import React, { useState } from "react";
import { useRef, useEffect } from "react";

import {
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Checkbox,
  Slider,
  Grid,
  Paper as MuiPaper,
  Button,
  Collapse,
} from "@mui/material";

import { RxExit } from "react-icons/rx";
import { RxEnter } from "react-icons/rx";
import TuneIcon from "@mui/icons-material/Tune";

import useFiltersHook from "../../hooks/filtersHook";
import { useFilterStyles } from "../filterStyles";

const MobileFilters: React.FC<{
  isOpened: boolean;
  toggleOpen: () => void;
}> = ({ isOpened, toggleOpen }) => {
  console.log("MobileFilters rendered");

  const classes = useFilterStyles();

  const {
    filterState,
    handleSizeChange,
    handleLocationChange,
    handleCareLevelChange,
    handlePriceRangeChange,
  } = useFiltersHook();

  const [tempPriceRange, setTempPriceRange] = useState<number[]>(
    filterState.priceRange
  );

  return (
    <div className={classes.mobileRoot}>
      <Button onClick={toggleOpen} sx={{ width: "100%" }}>
        <TuneIcon className={classes.icon} />
        Filters
      </Button>

      <Collapse in={isOpened}>
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
              onChange={(event, newValue) => {
                // This line wraps the event and value before passing to handleLocationChange
                handleSizeChange(event as any, newValue);
              }}
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
            <Grid item m={0} sx={{ width: "100%", justifyContent: "center" }}>
              {/* Location filter */}
              <ToggleButtonGroup
                value={filterState.locationFilter}
                onChange={(event, newValue) => {
                  // This line wraps the event and value before passing to handleLocationChange
                  handleLocationChange(event as any, newValue);
                }}
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
                onChange={(event, newValue) => {
                  // This line wraps the event and value before passing to handleLocationChange
                  handleCareLevelChange(event as any, newValue);
                }}
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
                onChange={(event, newValue) => {
                  // This line wraps the event and value before passing to handleLocationChange
                  handleCareLevelChange(event as any, newValue);
                }}
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
                onChange={(event, newValue) => {
                  // This line wraps the event and value before passing to handleLocationChange
                  handleCareLevelChange(event as any, newValue);
                }}
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
              value={tempPriceRange}
              valueLabelDisplay="auto"
              onChange={(event, newValue) => {
                setTempPriceRange(newValue as number[]);
              }}
              onChangeCommitted={(event, newValue) => {
                // Using the CombinedEvent type for handlePriceRangeChange
                handlePriceRangeChange(
                  event as unknown as Event,
                  newValue as number[]
                );
              }}
              min={0}
              max={100}
              getAriaValueText={(value) => `$${value}`}
            />
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
};

export default MobileFilters;
