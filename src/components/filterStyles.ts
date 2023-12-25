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
    left: 0,
    top: "10%",
    width: "250px",
    zIndex: 1000,
  },
  mobileRoot: {
    width: "100%",
    margin: "auto",
    marginTop: theme.spacing(2),
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  },
}));
