// ProductFilter.tsx
import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProductFilter = ({ updateFilters }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFilters({ [name]: value });
  };

  return (
    <div>
      {/* Height filter */}
      <FormControl>
        <InputLabel>Height</InputLabel>
        <Select name="height" onChange={handleChange}>
          <MenuItem value={null}>All</MenuItem>
          <MenuItem value="small">Small</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="large">Large</MenuItem>
          <MenuItem value="extra-large">Extra Large</MenuItem>
        </Select>
      </FormControl>

      {/* Location filter */}
      <FormControl>
        <InputLabel>Location</InputLabel>
        <Select name="location" onChange={handleChange}>
          <MenuItem value={null}>All</MenuItem>
          <MenuItem value="indoor">Indoor</MenuItem>
          <MenuItem value="outdoor">Outdoor</MenuItem>
        </Select>
      </FormControl>

      {/* Care level filter */}
      <FormControl>
        <InputLabel>Care Level</InputLabel>
        <Select name="careLevel" onChange={handleChange}>
          <MenuItem value={null}>All</MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="moderate">Moderate</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ProductFilter;
