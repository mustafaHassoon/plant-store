import { createContext, useContext, useState } from "react";

interface FilterContextType {
  filterState: {
    sizeFilter: any[];
    heightFilter: number | null;
    locationFilter: string;
    careLevelFilter: { [key: string]: boolean };
    priceRange: number[];
    searchText: any;
  };
  resetFilters: () => void;
  setFilterState: (state: any) => void;
  handleSizeChange: (
    event: React.MouseEvent<HTMLElement>,
    newSize: string[]
  ) => void;
  handleHeightChange: (
    event: React.MouseEvent<HTMLElement>,
    newHeight: number | null
  ) => void;
  handleLocationChange: (
    event: React.MouseEvent<HTMLElement>,
    newLocation: string[]
  ) => void;
  handleCareLevelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceRangeChange: (
    event: Event,
    newPriceRange: number | number[]
  ) => void;
  handleSearchTextChange: (newSearchText: string) => void;
}

const FilterContext = createContext<FilterContextType>({} as FilterContextType);

//: React.FC

const FilterProvider = ({ children }) => {
  const [filterState, setFilterState] = useState({
    sizeFilter: [],
    heightFilter: null,
    locationFilter: "",
    careLevelFilter: {
      easy: false,
      moderate: false,
      high: false,
    },
    priceRange: [0, 30],
    searchText: "",
  });

  const resetFilters = () => {
    setFilterState({
      sizeFilter: [],
      heightFilter: null,
      locationFilter: "",
      careLevelFilter: {
        easy: false,
        moderate: false,
        high: false,
      },
      priceRange: [0, 30],
      searchText: "",
    });
  };

  // FilterContext.tsx
  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    if (Array.isArray(newValue)) {
      setFilterState((prevState) => ({
        ...prevState,
        priceRange: newValue,
      }));
    }
  };

  const handleSizeChange = (
    event: React.MouseEvent<HTMLElement>,
    newSize: string[]
  ) => {
    setFilterState((prevState) => ({ ...prevState, sizeFilter: newSize }));
  };

  const handleHeightChange = (
    event: React.MouseEvent<HTMLElement>,
    newHeight: number | null
  ) => {
    setFilterState((prevState) => ({ ...prevState, heightFilter: newHeight }));
  };

  const handleLocationChange = (event, newValues) => {
    // Assuming newValues is an array of selected locations
    setFilterState((prevState) => ({
      ...prevState,
      locationFilter: newValues,
    }));
  };

  const handleCareLevelChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterState((prevState) => ({
      ...prevState,
      careLevelFilter: {
        ...prevState.careLevelFilter,
        [event.target.name]: event.target.checked,
      },
    }));
  };

  const handleSearchTextChange = (newSearchText: string) => {
    setFilterState((prevState) => ({
      ...prevState,
      searchText: newSearchText,
    }));
  };

  return (
    <FilterContext.Provider
      value={{
        filterState,
        setFilterState,
        handleSizeChange,
        handleHeightChange,
        handleLocationChange,
        handleCareLevelChange,
        handlePriceRangeChange,
        handleSearchTextChange,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterProvider, useFilterContext };
