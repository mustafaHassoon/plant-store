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
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Drawer } from "@material-ui/core";
import Cart from "./Cart";
import { useTheme } from "@mui/material/styles";
import DropdownSearch from "./DropdownSearch";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cart = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [state, setState] = React.useState({
    right: false,
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
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
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Cart
                items={cart}
                onClose={() => setState({ ...state, right: false })}
              />
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
        <DropdownSearch isMobile={isMobile} />
        <IconButton color="inherit" onClick={toggleDrawer(true)}>
          <Badge badgeContent={cart.items.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        {!isMobile && (
          <React.Fragment>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Cart
                items={cart}
                onClose={() => setState({ ...state, right: false })}
              />
            </Drawer>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
