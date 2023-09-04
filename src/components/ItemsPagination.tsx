import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import service from "../services";
import { useFilterContext } from "../context/FilterContext";

interface ItemsPaginationProps {
  setPaginationData: (products: any, totalCount: number) => void;
}

export default function ItemsPagination({ setPaginationData }) {
  const { filterState } = useFilterContext();

  const productsPerPage = 6;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: productsPerPage,
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const from = (currentPage - 1) * productsPerPage;
    const to = from + productsPerPage;

    service
      .getData(
        { from, to },
        filterState.locationFilter,
        filterState.careLevelFilter,
        filterState.sizeFilter,
        filterState.priceRange,
        filterState.searchText
      )
      .then((response: any) => {
        const data = response.data;

        setPaginationData(data, response.count); // Pass total count to setPaginationData
        setPagination({ ...pagination, count: response.count });
      });
  }, [
    currentPage,
    filterState.locationFilter,
    filterState.careLevelFilter,
    filterState.sizeFilter,
    filterState.priceRange,
    filterState.searchText,
  ]);

  useEffect(() => {
    setCurrentPage(1);
    setPagination((prevState) => ({
      ...prevState,
      from: 0,
      to: productsPerPage,
    }));
  }, [
    filterState.locationFilter,
    filterState.careLevelFilter,
    filterState.sizeFilter,
    filterState.searchText,
  ]);

  const totalPages = Math.ceil(pagination.count / productsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Box
      justifyContent={"center"}
      alignContent={"center"}
      display={"flex"}
      sx={{
        margin: "25px",
      }}
    >
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          onChange={handlePageChange}
          page={currentPage} // Add this to make sure the pagination component updates the selected page
        />
      )}
    </Box>
  );
}
