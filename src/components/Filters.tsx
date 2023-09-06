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
import DesktopFilters from "./Desktop/DesktopFilters";
import MobileFilters from "./Mobile/MobileFilters";
import { useFilterStyles } from "./filterStyles";
import useFiltersHook from ".././hooks/filtersHook";

const Filters = () => {
  const classes = useFilterStyles();
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
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "10px",
        zIndex: 1000,
        width: "250px",
      }}
    >
      <Paper
        className={!isSmallScreen ? classes.fixedAndCentered : ""}
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
          <DesktopFilters />
        ) : (
          // Render layout for small screens
          <MobileFilters />
        )}
      </Paper>
    </div>
  );
};

export default Filters;
