import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCart } from "../context/CartContext";

import { Drawer, Tab, Tabs } from "@material-ui/core";
import Cart from "./Cart";
import { useTheme } from "@mui/material/styles";
import DropdownSearch from "./DropdownSearch";
import { Menu, MenuItem } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cart = useCart();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleCartDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsCartDrawerOpen(open);
  };

  const toggleNavDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsNavDrawerOpen(open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <React.Fragment>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleNavDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isNavDrawerOpen}
              onClose={toggleNavDrawer(false)}
              PaperProps={{
                style: {
                  display: "block",
                  width: "auto",
                },
              }}
            >
              <MenuItem
                component={RouterLink}
                to="/"
                onClick={toggleNavDrawer(false)}
              >
                Home
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/about"
                onClick={toggleNavDrawer(false)}
              >
                About
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/store"
                onClick={toggleNavDrawer(false)}
              >
                Store
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/find-us"
                onClick={toggleNavDrawer(false)}
              >
                Find Us
              </MenuItem>
            </Drawer>
          </React.Fragment>
        )}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Plant Store
        </Typography>
        {!isMobile && (
          <React.Fragment>
            <Tabs value={currentPath}>
              <Tab label="Home" value="/" component={RouterLink} to="/" />
              <Tab
                label="About"
                value="/about"
                component={RouterLink}
                to="/about"
              />
              <Tab
                label="Store"
                value="/store"
                component={RouterLink}
                to="/store"
              />
              <Tab
                label="Find Us"
                value="/find-us"
                component={RouterLink}
                to="/find-us"
              />
            </Tabs>
          </React.Fragment>
        )}
        <DropdownSearch isMobile={isMobile} />

        <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
          <Badge badgeContent={cart.items.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <Drawer
          anchor="right"
          open={isCartDrawerOpen}
          onClose={toggleCartDrawer(false)}
          PaperProps={{
            style: {
              display: "block",
              width: "520px",
            },
          }}
        >
          <Cart items={cart} onClose={() => setIsCartDrawerOpen(false)} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
