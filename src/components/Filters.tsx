// Filters.tsx
import React from "react";
import {
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFilterContext } from "../context/FilterContext"; // Import the useFilterContext hook

const useStyles = makeStyles({
  paper: {
    padding: "1rem",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
});

const Filters = () => {
  const classes = useStyles();
  const {
    sizeFilter,
    handleSizeChange,
    locationFilter,
    handleLocationChange,
    careLevelFilter,
    handleCareLevelChange,
  } = useFilterContext(); // Use the useFilterContext hook to access the state and handlers

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h6">Size</Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <ToggleButtonGroup
            value={sizeFilter}
            exclusive
            onChange={handleSizeChange}
            aria-label="Size filter"
          >
            <ToggleButton value="small" aria-label="Small">
              Small
            </ToggleButton>
            <ToggleButton value="medium" aria-label="Medium">
              Medium
            </ToggleButton>
            <ToggleButton value="large" aria-label="Large">
              Large
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h6">Location</Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={locationFilter.Indoor}
                  onChange={handleLocationChange}
                  name="Indoor"
                />
              }
              label="Indoor"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={locationFilter.outdoor}
                  onChange={handleLocationChange}
                  name="outdoor"
                />
              }
              label="Outdoor"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h6">Care Level</Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={careLevelFilter.easy}
                  onChange={handleCareLevelChange}
                  name="easy"
                />
              }
              label="Easy"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={careLevelFilter.moderate}
                  onChange={handleCareLevelChange}
                  name="moderate"
                />
              }
              label="Moderate"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={careLevelFilter.high}
                  onChange={handleCareLevelChange}
                  name="high"
                />
              }
              label="High"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Filters;
