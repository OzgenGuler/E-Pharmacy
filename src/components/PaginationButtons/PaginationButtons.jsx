import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalPages } from "../../redux/pharmacy/selectors";
import { setCurrentPage } from "../../redux/pharmacy/reducer";
import { useMediaQuery } from "react-responsive";

const PaginationButtons = () => {
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const mobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleChange = (e, p) => {
    dispatch(setCurrentPage(p));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        showFirstButton
        showLastButton
        defaultPage={1}
        siblingCount={0}
        boundaryCount={mobile ? 0 : 1}
        onChange={handleChange}
        variant="outlined"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#1D1E21",
            backgroundColor: "#transparent",
          },
          "& .Mui-selected": {
            backgroundColor: "#59B17A !important",
            color: "white",
            borderColor: "#59B17A",
          },
        }}
      />
    </Stack>
  );
};

export default PaginationButtons;
