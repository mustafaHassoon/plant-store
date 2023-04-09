import React, { useState } from "react";
import {
  Button,
  Popover,
  TextField,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// const useStyles = makeStyles((theme) => ({
//     searchButton: {
//       borderRadius: 0,
//       borderColor: "transparent",
//       "&:hover": {
//         backgroundColor: "transparent",
//       },
//       "& .MuiButton-label": {
//         display: "flex",
//         justifyContent: "center",
//       },
//       "& .MuiButton-startIcon": {
//         color: theme.palette.primary.main,
//         "&:hover": {
//           color: theme.palette.primary.dark,
//           backgroundColor: "transparent",
//         },
//       },
//     },
//   }));

interface DropdownSearchProps {
  isMobile?: boolean;
}

const DropdownSearch: React.FC<DropdownSearchProps> = ({ isMobile }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
    // Handle search click
    console.log("Search button clicked");
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
            placeholder="Search…"
            InputProps={{
              startAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleSearchClick}
                  color="primary"
                >
                  <SearchIcon />
                </IconButton>
              ),
              sx: {
                paddingLeft: 1, // Remove left padding from the input field
                paddingBottom: 0,
                paddingTop: 0,
              },
            }}
          />
        </Box>
      </Popover>
    </React.Fragment>
  );
};

export default DropdownSearch;
