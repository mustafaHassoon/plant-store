// FilterContext.tsx
import React, { createContext, useContext, useState } from "react";

interface FilterContextProps {
  sizeFilter: string;
  handleSizeChange: (
    event: React.MouseEvent<HTMLElement>,
    newSize: string
  ) => void;
  locationFilter: Record<string, boolean>;
  handleLocationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  careLevelFilter: Record<string, boolean>;
  handleCareLevelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

type FilterProviderProps = {
  children: React.ReactNode;
};

const FilterContext = createContext<FilterContextProps | null>(null);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [sizeFilter, setSizeFilter] = useState("small");
  const [locationFilter, setLocationFilter] = useState({
    Indoor: false,
    outdoor: false,
  });
  const [careLevelFilter, setCareLevelFilter] = useState({
    easy: false,
    moderate: false,
    high: false,
  });

  const handleSizeChange = (
    event: React.MouseEvent<HTMLElement>,
    newSize: string
  ) => {
    setSizeFilter(newSize);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocationFilter({
      ...locationFilter,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCareLevelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCareLevelFilter({
      ...careLevelFilter,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FilterContext.Provider
      value={{
        sizeFilter,
        handleSizeChange,
        locationFilter,
        handleLocationChange,
        careLevelFilter,
        handleCareLevelChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
