import React, {
  createContext,
  useContext,
  useState,
  ChangeEvent,
  MouseEvent,
  useCallback,
} from "react";

type CombinedEvent = ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>;

interface FilterContextType {
  filterState: {
    sizeFilter: string[];
    heightFilter: number | null;
    locationFilter: string;
    careLevelFilter: { [key: string]: boolean };
    priceRange: number[];
    searchText: string;
  };
  resetFilters: () => void;
  setFilterState: (state: any) => void;
  handleSizeChange: (event: CombinedEvent, newSize: string[]) => void;
  handleHeightChange: (
    event: MouseEvent<HTMLElement>,
    newHeight: number | null
  ) => void;
  handleLocationChange: (event: CombinedEvent, newLocation: string) => void;
  handleCareLevelChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: boolean
  ) => void;
  handlePriceRangeChange: (
    event: Event,
    newPriceRange: number | number[]
  ) => void;
  handleSearchTextChange: (newSearchText: string) => void;
}

const FilterContext = createContext<FilterContextType>({} as FilterContextType);

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

  const resetFilters = useCallback(() => {
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
  }, []);

  const handlePriceRangeChange = useCallback(
    (event: any, newValue: number | number[]) => {
      if (Array.isArray(newValue)) {
        setFilterState((prevState) => ({
          ...prevState,
          priceRange: newValue,
        }));
      }
    },
    []
  );

  const handleSizeChange = useCallback(
    (event: CombinedEvent, newSize: string[]) => {
      setFilterState((prevState) => ({ ...prevState, sizeFilter: newSize }));
    },
    []
  );

  const handleHeightChange = useCallback(
    (event: MouseEvent<HTMLElement>, newHeight: number | null) => {
      setFilterState((prevState) => ({
        ...prevState,
        heightFilter: newHeight,
      }));
    },
    []
  );

  const handleLocationChange = useCallback(
    (event: CombinedEvent, newValues: string) => {
      setFilterState((prevState) => ({
        ...prevState,
        locationFilter: newValues,
      }));
    },
    []
  );

  const handleCareLevelChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFilterState((prevState) => ({
        ...prevState,
        careLevelFilter: {
          ...prevState.careLevelFilter,
          [event.target.name]: event.target.checked,
        },
      }));
    },
    []
  );

  const handleSearchTextChange = useCallback((newSearchText: string) => {
    setFilterState((prevState) => ({
      ...prevState,
      searchText: newSearchText,
    }));
  }, []);

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
