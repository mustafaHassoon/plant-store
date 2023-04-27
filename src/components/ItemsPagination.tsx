import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import service from "../services";

export default function ItemsPagination({
  setProducts,
  heightFilter,
  locationFilter,
  careLevelFilter,
  sizeFilter,
  priceRange,
}) {
  const productsPerPage = 6;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: productsPerPage,
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [heightFilter, locationFilter, careLevelFilter, sizeFilter]);

  useEffect(() => {
    const from = (currentPage - 1) * productsPerPage;
    const to = from + productsPerPage;

    service
      .getData(
        { from, to },
        heightFilter,
        locationFilter,
        careLevelFilter,
        sizeFilter,
        priceRange
      )
      .then((response: any) => {
        const data = response.data;

        setProducts(data);
        setPagination({ ...pagination, count: response.count });
      });
  }, [
    currentPage,
    heightFilter,
    locationFilter,
    careLevelFilter,
    sizeFilter,
    priceRange,
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
