import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const SoilTypeText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.97), 0 0 5px rgba(0, 0, 0, 0.9),
    0 0 10px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.7),
    0 0 25px rgba(0, 0, 0, 0.6), 0 0 35px rgba(0, 0, 0, 0.5),
    0 0 50px rgba(0, 0, 0, 0.4), 0 0 75px rgba(0, 0, 0, 0.2);
  z-index: 2;
  text-align: center;
  width: 100%;
`;

export const useStyles = makeStyles((theme) => ({
  content: {
    overflowX: "hidden",
  },
  dialog: {
    minWidth: 1000,
    minHeight: 450,
    overflowX: "hidden",
    overflowY: "hidden",
    [theme.breakpoints.down("md")]: {
      minWidth: "100%",
      minHeight: "100%",
    },
  },
  combinedSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexGrow: 1,
    overflowY: "auto",
    marginRight: theme.spacing(2),
    height: "80px",
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  image: {
    width: "auto%",
    height: "100%",
  },
  gridItem: {
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
  },
  productImage: {
    width: 450,
    height: 450,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
      maxWidth: 300,
    },
  },
  productDetails: {
    width: 200,
    height: 450,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      flexDirection: "row", // change to row for mobile view
      flexWrap: "wrap", // allow wrapping for the list of specifications
      justifyContent: "space-between", // evenly space items on the horizontal axis
      width: "100%",
      padding: theme.spacing(0),
      height: 200,
    },
  },
  productInfo: {
    width: 200,
    height: 450,
    [theme.breakpoints.down("md")]: {
      height: 200,
    },
  },
  productSoil: {
    width: 150,
    height: 150,
    position: "relative",
  },
  productDetailsTextContainer: {
    width: 150,
    height: 450,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    fontFamily: "'Fjalla One', sans-serif !important",
    [theme.breakpoints.down("md")]: {
      width: "100%", // occupy full width
      height: 150,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      flexDirection: "row", // layout children horizontally
      flexWrap: "wrap", // allow them to wrap
      justifyContent: "space-between", // space out children
    },
  },
  productText: {
    width: 350,
    height: "100%",
    fontFamily: "'Fjalla One', sans-serif !important",
  },
  detailsSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: "'Fjalla One', sans-serif !important",
  },
  sectionTitle: {
    marginBottom: 0,
    fontFamily: "'Fjalla One', sans-serif !important",
  },
  iconRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },

  productTitle: {
    // Add any desired styling for the upper section
    //height: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      // Desktop styles
      height: "80px",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },

    [theme.breakpoints.down("md")]: {
      // Mobile styles
      position: "fixed",
      top: 0,
      width: "100%",
      backgroundColor: "#fff", // Or whatever background you want for better visibility
      zIndex: 2, // Ensuring it stays on top
    },
  },
  productDescription: {
    // Add any desired styling for the middle section
    flexGrow: 1,
    //overflowY: "auto",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(0), // adjust based on your actual height of productTitle
      paddingBottom: "60px", // adjust based on your actual height of productButtons
    },
  },
  productButtons: {
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      // Desktop styles
      height: "60px",
    },

    [theme.breakpoints.down("md")]: {
      // Mobile styles
      position: "fixed",
      bottom: 0,
      width: "100%",
      backgroundColor: "#fff",
      zIndex: 2,
    },
  },

  formControl: {
    width: "90%",
  },

  buttonWrapper: {
    height: "100%",
    width: "100%",
  },

  buyButton: {
    height: "100%",
    width: "100%",
  },

  titleSubtitleCaption: {
    marginBottom: theme.spacing(2),
  },
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
  productDetailsText: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    fontFamily: "'Fjalla One', sans-serif !important",
    [theme.breakpoints.down("md")]: {
      width: "13%", // This gives a bit of room in case of any margin/padding you want to add.
      marginBottom: theme.spacing(1), // Adjust accordingly for spacing between rows.
      fontSize: "0.7rem",
    },
  },

  mobileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between", // ensure components are spread out
    height: "100%", // occupy full height
    padding: theme.spacing(2),
  },
}));
