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
    width: 150,
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
  soilImage: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  productDetailsText: {
    width: 150,
    height: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Change this from "center" to "flex-start"
    marginLeft: 10, // Add 10px margin to the left
  },
  productText: {
    width: 270,
    height: 120,
  },
  detailsSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sectionTitle: {
    marginBottom: 0,
  },
}));
