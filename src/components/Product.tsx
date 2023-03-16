import React, { useState } from "react";
import { ACTIONS } from "../App";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, deepOrange, orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    height: 411,
  },
  media: {
    height: 300,
  },
  content: {
    width: 268,
    height: 79,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  button: {
    alignSelf: "right",
    bottom: 0,
  },
  price: {
    textAlign: "right",
  },
  h6: {
    textAlign: "left",
  },
}));

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Product = ({
  price,
  id,
  title,
  quantity,
  image,
  dimensions,
  care_level,
  location,
  conditions,
  dispatch,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title="uuuuuuu" />
      <CardContent className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="h6" className={classes.h6}>
                  {title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {location}
                </Typography>
                <Typography variant="body2">{care_level}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                component="div"
                className={classes.price}
              >
                € {price}
              </Typography>
              <br />
              <Button
                color="inherit"
                startIcon={<ShoppingCartIcon />}
                onClick={() =>
                  dispatch({
                    type: ACTIONS.ADD_PRODUCT_TO_CART,
                    payload: { price, title, image, id },
                  })
                }
              >
                Buy
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Product;

// import { ACTIONS } from "../App";
// import { useState } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import CardMedia from "@mui/material/CardMedia";
// import Tooltip from "@mui/material/Tooltip";

// export default function Product({
//   dispatch,
//   price,
//   title,
//   quantity,
//   image,
//   id,
//   dimensions,
//   care_level,
//   location,
//   conditions,
// }) {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <Card
//       sx={{ minWidth: 345 }}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <CardMedia component="img" height="140" image={image} alt={title} />
//       {isHovered && (
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             {/* Dimensions: {dimensions} */}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Care Level: {care_level}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Location: {location}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Light: {conditions.light_type}, {conditions.light_amount}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Water: {conditions.water}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Soil: {conditions.soil}
//           </Typography>
//         </CardContent>
//       )}
//       <CardActions>
//         <Tooltip title="Add to Cart">
//           <Button
//             size="small"
//             onClick={() =>
//               dispatch({
//                 type: ACTIONS.ADD_PRODUCT_TO_CART,
//                 payload: { price, title, image, id },
//               })
//             }
//           >
//             Buy
//           </Button>
//         </Tooltip>
//       </CardActions>
//     </Card>
//   );
// }
