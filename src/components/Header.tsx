import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";
import { useHeaderStyles } from "./Header.style";
import { Drawer, Box, IconButton } from "@material-ui/core";
import Cart from "./Cart";
import DropdownSearch from "./DropdownSearch";
import { useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import theme from "../theme";
import MobileHeader from "./Mobile/MobileHeader";
import DesktopHeader from "./Desktop/DesktopHeader";

const Header = () => {
  const classes = useHeaderStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Changed from "sm" to "md"
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
        {isMobile ? (
          <MobileHeader
            toggleNavDrawer={toggleNavDrawer}
            isNavDrawerOpen={isNavDrawerOpen}
          />
        ) : (
          <DesktopHeader currentPath={currentPath} />
        )}

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex" },
            justifyContent: "flex-end",
          }}
        >
          <DropdownSearch isMobile={isMobile} />

          <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
            <Badge badgeContent={cart.items.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>

        <Drawer
          anchor="right"
          open={isCartDrawerOpen}
          onClose={toggleCartDrawer(false)}
          PaperProps={{
            style: {
              display: "block",
              width: isMobile ? "100vw" : "520px",
            },
          }}
        >
          <Cart items={cart} onClose={toggleCartDrawer(false)} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
