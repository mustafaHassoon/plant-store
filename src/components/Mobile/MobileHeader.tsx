import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../Logo";
import { Box } from "@mui/material";

type MobileHeaderProps = {
  toggleNavDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  isNavDrawerOpen: boolean;
};

const MobileHeader: React.FC<MobileHeaderProps> = ({
  toggleNavDrawer,
  isNavDrawerOpen,
}) => {
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleNavDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Logo color="secondary" showText={false} />
      </Box>
      <Drawer
        anchor="right"
        open={isNavDrawerOpen}
        onClose={toggleNavDrawer(false)}
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
