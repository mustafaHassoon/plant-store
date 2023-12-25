import React from "react";
import { Tabs, Tab, Box, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Badge, IconButton, Theme, Typography } from "@mui/material";
import Logo from "../Logo";
import { useHeaderStyles } from "../Header.style";
import DropdownSearch from "../DropdownSearch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

type DesktopHeaderProps = {
  currentPath: string;
  cart: any;
  toggleCartDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  isMobile: boolean;
};

const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  currentPath,
  cart,
  toggleCartDrawer,
  isMobile,
}) => {
  const classes = useHeaderStyles();

  return (
    <Grid container alignItems="center">
      <Grid item xs={1}>
        {/* Left grid item is empty */}
      </Grid>
      <Grid item xs={1}>
        <Logo color="secondary" />
      </Grid>
      <Grid item xs={8}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
          }}
        >
          <Tabs
            value={currentPath}
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab
              value="/"
              component={RouterLink}
              to="/"
              label={<Typography>Home</Typography>}
            />
            <Tab
              value="/about"
              component={RouterLink}
              to="/about"
              label={<Typography>About</Typography>}
            />
            <Tab
              value="/store"
              component={RouterLink}
              to="/store"
              label={<Typography>Store</Typography>}
            />
            <Tab
              value="/find-us"
              component={RouterLink}
              to="/find-us"
              label={<Typography>Find Us</Typography>}
            />
          </Tabs>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex" },
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <DropdownSearch isMobile={isMobile} />
          <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
            <Badge badgeContent={cart.items.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DesktopHeader;
