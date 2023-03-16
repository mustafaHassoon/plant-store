import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import service from "../services";

export default function ItemsPagination({ setProducts }) {
  const productsPerPage = 9; // for example
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: productsPerPage,
  });

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response: any) => {
        setPagination({ ...pagination, count: response.count });
        setProducts(response.data);
      });
  }, [pagination.from, pagination.to]);

  // const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const totalPages = Math.ceil(pagination.count / productsPerPage);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * productsPerPage;
    const to = (page - 1) * productsPerPage + productsPerPage;
    setPagination({ ...pagination, from: from, to: to });
    // setCurrentPageIndex(page);
  };
  return (
    <Box justifyContent={"center"} alignContent={"center"} display={"flex"}>
      <Pagination
        count={totalPages}
        // page={currentPageIndex}
        onChange={handlePageChange}
      />
    </Box>
  );
}
