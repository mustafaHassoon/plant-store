import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useProductDetailsMobileStyles = makeStyles((theme: Theme) => ({
  dialog: {
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      minWidth: "100%",
      minHeight: "100%",
    },
  },
  image: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
      maxHeight: 300,
      width: "auto",
      height: "auto",
    },

    [theme.breakpoints.up("sm")]: {
      maxWidth: 400,
      maxHeight: 400,
      width: "auto",
      height: "auto",
    },

    gridItem: {
      boxSizing: "border-box",
    },
    // formControl: {
    //   margin: theme.spacing(1),
    //   minWidth: 120,
    //   width: "90%",
    // },
  },
  productImage: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
      maxWidth: 300,
    },
  },

  gridItemCentered: {
    "&&": {
      display: "flex",
      flexDirection: "column", // Aligns children vertically
      justifyContent: "center", // Centers children vertically within the item
      alignItems: "center", // Centers children horizontally
      height: "100%",
      width: "100%", // Ensures the item takes the full width available
    },
  },

  buyButton: {
    "&&": {
      //backgroundColor: theme.palette.secondary.light,
      //padding: "10px 20px ",
      width: "100%",
      top: 10,
      padding: theme.spacing(1),
      borderRadius: "5px",
      textAlign: "center",
      //margin: theme.spacing(2),
    },
  },
  productDetails: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "100%",
      padding: theme.spacing(1),
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "100%",
      padding: theme.spacing(3),
    },
  },
  // productInfo: {
  //   [theme.breakpoints.down("md")]: {
  //     height: 200,
  //   },
  // },
  closeButtonContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: theme.palette.grey[700],
    borderRadius: 0,
    minWidth: 0,
    width: 36,
    height: 36,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.grey[800],
      cursor: "pointer",
    },
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  productDetailsTextContainer: {
    [theme.breakpoints.down("lg")]: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: theme.spacing(1),
      width: "100%",
      marginTop: theme.spacing(1),
    },
  },

  iconRow: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },

  productDescription: {
    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(9),
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  },

  customDimension: {
    height: "400px",
    width: "400px",
  },

  productDetailsText: {
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      marginBottom: theme.spacing(0),
      fontSize: "0.7rem",
    },
  },
  productButtons: {
    display: "flex",
    alignItems: "center", // Vertically centers the content

    height: "85px",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    zIndex: 2,
  },
  productTitleItem: {
    alignSelf: "flex-start",
    width: "100%",
  },

  productHeader: {
    flexDirection: "row", // Ensures horizontal layout
    justifyContent: "space-between", // Spaces out the children
    alignItems: "center", // Aligns items vertically
    display: "flex",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%",
    backgroundColor: "#fff",
    zIndex: 2,
  },

  productHeaderTitle: {
    paddingLeft: theme.spacing(3),
    flex: 3,
  },

  productHeaderPrice: {
    flex: 1,
    textAlign: "start",
    color: theme.palette.primary.main,
  },
}));
