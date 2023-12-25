import React, { useState } from "react";
import {
  Button,
  Popover,
  TextField,
  Box,
  useTheme,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useFilterContext } from "../context/FilterContext";

interface DropdownSearchProps {
  isMobile?: boolean;
}

const DropdownSearch: React.FC<DropdownSearchProps> = ({ isMobile }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchInput, setSearchInput] = useState("");
  const { handleSearchTextChange } = useFilterContext();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchTextChange(e.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const anchorOrigin = {
    vertical: isMobile ? "bottom" : "center",
    horizontal: isMobile ? "center" : "left",
  };

  const transformOrigin = {
    vertical: isMobile ? "top" : "center",
    horizontal: isMobile ? "center" : "right",
  };

  const popoverStyle = {
    ...(isMobile
      ? {
          top: 0,
          left: 0,
          right: 0,
          maxWidth: "90%",
          minWidth: "50%",
        }
      : {}),
  };

  const handleSearchClick = () => {
    handleSearchTextChange(searchInput);
    handleClose();
  };
  return (
    <React.Fragment>
      <Button aria-describedby={id} color="inherit" onClick={handleClick}>
        <SearchIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: isMobile ? "center" : "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: isMobile ? "center" : "left",
        }}
        PaperProps={{ style: popoverStyle }}
      >
        <Box p={0.5}>
          <TextField
            fullWidth
            variant="outlined"
            autoFocus
            placeholder="Search…"
            size="small"
            onChange={(e) => setSearchInput(e.target.value)}
            InputProps={{
              startAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  color="primary"
                  onClick={handleSearchClick}
                >
                  <SearchIcon />
                </IconButton>
              ),
              sx: {
                paddingLeft: 1,
                paddingBottom: 0,
                paddingTop: 0,
              },
            }}
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                // Call handleSearchClick function when Enter is pressed
                handleSearchClick();
                ev.preventDefault();
              }
            }}
          />
        </Box>
      </Popover>
    </React.Fragment>
  );
};

export default DropdownSearch;
