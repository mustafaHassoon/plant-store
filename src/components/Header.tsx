import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCart } from "../context/CartContext";
import { Grid, Drawer } from "@mui/material";
import { useLocation } from "react-router-dom";
import theme from "../theme";
import MobileHeader from "./Mobile/MobileHeader";
import DesktopHeader from "./Desktop/DesktopHeader";
import { useHeaderStyles } from "./Header.style";
import Cart from "./Cart";

const Header = () => {
  const classes = useHeaderStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const cart = useCart();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleCartDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsCartDrawerOpen(open);
    };

  const toggleNavDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsNavDrawerOpen(open);
    };

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            {isMobile ? (
              <MobileHeader
                toggleNavDrawer={toggleNavDrawer}
                isNavDrawerOpen={isNavDrawerOpen}
                toggleCartDrawer={toggleCartDrawer}
                cart={cart}
                isMobile={isMobile}
              />
            ) : (
              <DesktopHeader
                currentPath={currentPath}
                cart={cart}
                toggleCartDrawer={toggleCartDrawer}
                isMobile={isMobile}
              />
            )}
          </Grid>
        </Grid>
      </Toolbar>
      <Drawer
        anchor="right"
        open={isCartDrawerOpen}
        onClose={toggleCartDrawer(false)}
        PaperProps={{
          style: {
            display: "block",
            maxWidth: isMobile ? "100%" : "520px",
            minWidth: isMobile ? "100%" : "520px",
            boxSizing: "border-box",
            overflowX: "hidden",
          },
        }}
      >
        <Cart items={cart} onClose={toggleCartDrawer(false)} />
      </Drawer>
    </AppBar>
  );
};

export default Header;
