// src/hooks/filtersHook.ts
import { useState } from "react";
import { useFilterContext } from "../context/FilterContext";

const useFiltersHook = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const {
    filterState,
    handleSizeChange,
    handleLocationChange,
    handleCareLevelChange,
    handlePriceRangeChange,
  } = useFilterContext();

  return {
    open,
    handleClick,
    filterState,
    handleSizeChange,
    handleLocationChange,
    handleCareLevelChange,
    handlePriceRangeChange,
  };
};

export default useFiltersHook;
