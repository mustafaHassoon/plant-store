import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@mui/styles";

export const useCartStyles = makeStyles((theme: Theme) =>
  createStyles({
    lastCartItem: {
      marginBottom: "64px",
    },
    // ...
    "@global": {
      ".cart-item-enter": {
        opacity: 0,
        transform: "translateY(-20px)",
      },
      ".cart-item-enter-active": {
        opacity: 1,
        transform: "translateY(0)",
        transition: "opacity 500ms, transform 500ms",
      },
      ".cart-item-exit": {
        opacity: 1,
        transform: "translateY(0)",
      },
      ".cart-item-exit-active": {
        opacity: 0,
        transform: "translateY(-20px)",
        transition: "opacity 500ms, transform 500ms",
      },
      lastCartItem: {
        marginBottom: "64px",
      },
    },
  })
);
