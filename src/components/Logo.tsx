import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

type LogoProps = {
  color?: "primary" | "secondary";
  showText?: boolean; // added this new prop
};

const Logo: React.FC<LogoProps> = ({ color = "primary", showText = true }) => {
  // set default value for showText to true
  const theme = useTheme();

  const colorMapping = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
  };

  const fillColor = colorMapping[color];

  const titleStyles = {
    fontSize: "18px",
    marginTop: 0,
    marginBottom: 0,
    color: theme.palette[color].main,
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="50px"
        height="50px"
        viewBox="0 0 1849.000000 1849.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1849.000000) scale(0.100000,-0.100000)"
          fill={fillColor}
          stroke="none"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M8550 14983 c-121 -6 -404 -34 -540 -54 -2198 -318 -4021 -1944 -4599 -4099 -84 -316 -141 -646 -172 -1005 -13 -158 -13 -605 1 -810 117 -1718 1002 -3262 2440 -4257 213 -147 553 -340 800 -454 571 -262 1162 -421 1825 -491 146 -15 429 -17 3143 -20 l2982 -4 0 3256 c0 3253 0 3256 -20 3245 -11 -6 -20 -17 -20 -26 0 -37 -58 -124 -134 -199 -126 -126 -318 -246 -606 -378 -72 -33 -242 -104 -305 -126 -457 -166 -642 -238 -885 -348 -151 -68 -407 -198 -472 -239 -21 -13 -41 -24 -45 -24 -4 0 -23 -11 -42 -24 -20 -13 -61 -38 -91 -57 -530 -329 -877 -708 -1038 -1134 -65 -172 -99 -320 -116 -499 -6 -75 12 -61 38 29 49 169 182 408 335 600 171 215 415 444 666 626 323 234 731 458 1150 634 88 37 169 71 180 76 109 49 594 214 820 279 17 5 51 15 78 23 l47 14 18 -56 c25 -81 25 -515 0 -611 -9 -36 -22 -90 -29 -120 -14 -68 -86 -256 -110 -291 -10 -15 -23 -38 -29 -53 -16 -44 -103 -166 -182 -256 -179 -205 -408 -359 -773 -521 -159 -70 -187 -81 -425 -171 -133 -49 -689 -242 -760 -263 -44 -13 -201 -67 -415 -143 -348 -124 -682 -276 -850 -387 -105 -69 -243 -202 -275 -265 -22 -43 -23 -44 -32 -21 -16 43 -48 292 -69 537 -8 99 -8 163 0 255 15 164 50 438 61 480 5 19 16 63 25 99 30 126 110 336 176 465 192 376 476 667 882 907 26 15 53 33 60 39 7 6 725 406 1597 888 l1585 878 3 2041 2 2042 -2907 -2 c-1600 -1 -2937 -3 -2973 -5z"
          />
        </g>
      </svg>

      {showText && ( // conditionally render text based on showText value
        <Typography variant="body1" sx={titleStyles}>
          GREENERIZER
        </Typography>
      )}
    </Box>
  );
};

export default Logo;
