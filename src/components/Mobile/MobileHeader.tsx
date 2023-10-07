import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../Logo"; // Make sure this import works in your setup
import { Badge, Grid } from "@mui/material";
import DropdownSearch from "../DropdownSearch"; // Make sure this import works in your setup
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type MobileHeaderProps = {
  cart: any;
  isMobile: boolean;
  toggleCartDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  toggleNavDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  isNavDrawerOpen: boolean;
};

const MobileHeader: React.FC<MobileHeaderProps> = ({
  toggleNavDrawer,
  toggleCartDrawer,
  isMobile,
  cart,
  isNavDrawerOpen,
}) => {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleNavDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <Logo color="secondary" showText={false} />
        </Grid>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <DropdownSearch isMobile={isMobile} />
          <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
            <Badge badgeContent={cart.items.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>

      <Drawer
        anchor="left"
        open={isNavDrawerOpen}
        onClose={toggleNavDrawer(false)}
        PaperProps={{
          style: {
            width: "60vw",
          },
          sx: {
            "& .MuiMenuItem-root": {
              justifyContent: "center",
            },
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
    </>
  );
};

export default MobileHeader;
