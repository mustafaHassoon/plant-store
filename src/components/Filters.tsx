import React, { useRef, useState } from "react";
import {
  Paper as MuiPaper,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";

import { useFilterContext } from "../context/FilterContext";

import DesktopFilters from "./Desktop/DesktopFilters";
import MobileFilters from "./Mobile/MobileFilters";
import { useFilterStyles } from "./filterStyles";

const Filters = React.memo(() => {
  console.log("Filters component rendered");
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
  const isOpenedRef = useRef(false);
  const [, forceUpdate] = useState({});

  const toggleOpen = () => {
    isOpenedRef.current = !isOpenedRef.current;
    forceUpdate({});
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        width: isSmallScreen ? "100%" : "250px", // conditional width
        paddingTop: isSmallScreen ? "5%" : "15%", // conditional padding-top
        zIndex: 1000,
      }}
    >
      <Paper>
        {!isSmallScreen ? (
          // Render accordion components for medium and large screens
          <DesktopFilters />
        ) : (
          // Render layout for small screens
          <MobileFilters
            isOpened={isOpenedRef.current}
            toggleOpen={toggleOpen}
          />
        )}
      </Paper>
    </div>
  );
});

export default Filters;
