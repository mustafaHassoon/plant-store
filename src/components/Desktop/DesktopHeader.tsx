import React from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Menu, MenuItem, Theme, Typography, styled } from "@mui/material";
import Logo from "../Logo";
import { useHeaderStyles } from "../Header.style";

type DesktopHeaderProps = {
  currentPath: string;
};

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ currentPath }) => {
  const classes = useHeaderStyles();

  return (
    <>
      <Logo color="secondary" />

      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
        }}
      >
        <Tabs value={currentPath} classes={{ indicator: classes.indicator }}>
          <Tab
            value="/"
            component={RouterLink}
            to="/"
            label={
              <Typography sx={{ fontFamily: "'Fjalla One', sans-serif" }}>
                Home
              </Typography>
            }
          />
          <Tab
            value="/about"
            component={RouterLink}
            to="/about"
            label={
              <Typography sx={{ fontFamily: "'Fjalla One', sans-serif" }}>
                About
              </Typography>
            }
          />
          <Tab
            value="/store"
            component={RouterLink}
            to="/store"
            label={
              <Typography sx={{ fontFamily: "'Fjalla One', sans-serif" }}>
                Store
              </Typography>
            }
          />
          <Tab
            value="/find-us"
            component={RouterLink}
            to="/find-us"
            label={
              <Typography sx={{ fontFamily: "'Fjalla One', sans-serif" }}>
                Find Us
              </Typography>
            }
          />
        </Tabs>
      </Box>
    </>
  );
};

export default DesktopHeader;
