// src/styles/filterStyles.ts
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useFilterStyles = makeStyles((theme: Theme) => ({
  toggleButton: {
    textTransform: "none",
    fontSize: "0.8rem",
    flex: 1,
  },
  icon: {
    fontSize: "1.5em",
    marginRight: "10px",
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  fixedAndCentered: {
    top: "50%",
    transform: "translateY(-50%)",
    right: "10px",
    zIndex: 1000,
  },
  // ... add any other styles you need
}));
