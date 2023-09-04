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
  },
  productDetails: {
    width: 200,
    height: 450,
    display: "flex",
    flexDirection: "column",
  },
  productDescription: {
    width: 200,
    height: 450,
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

  upperSection: {
    // Add any desired styling for the upper section
    height: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  middleSection: {
    // Add any desired styling for the middle section
    flexGrow: 1,
    overflowY: "auto",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),

    marginBottom: theme.spacing(2),
  },
  lowerSection: {
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    fontFamily: "'Fjalla One', sans-serif !important",
  },
}));
