import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import logoImage from "../data/greenerizer-logo-yellow.png";
import { makeStyles, useTheme } from "@mui/styles";

type LogoProps = {
  color?: "primary" | "secondary";
};

const useStyles = makeStyles({
  logo: (props: LogoProps) => ({
    filter: props.color === "primary" ? "invert(0)" : "invert(1)",
  }),
  title: {
    fontSize: "18px",
    marginTop: "0",
    marginBottom: "0",
  },
});

const Logo: React.FC<LogoProps> = ({ color = "primary" }) => {
  const title = "GEENERIZER";
  const classes = useStyles({ color });
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Avatar
        src={logoImage}
        alt={title}
        sx={{ width: 50, height: 50 }}
        className={classes.logo}
      />
      <Typography variant="body1" className={classes.title} color={color}>
        {title}
      </Typography>
    </Box>
  );
};

export default Logo;
