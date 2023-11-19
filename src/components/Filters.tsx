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

const Filters = React.memo(() => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const Paper = styled(MuiPaper)(({ theme }) => ({
    padding: 0,
    margin: "10px auto",
    width: "100%",
  }));

  const { filterState } = useFilterContext();

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
        width: isSmallScreen ? "100%" : "250px",
        paddingTop: isSmallScreen ? "5%" : "15%",
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
