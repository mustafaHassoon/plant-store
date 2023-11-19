import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useProductDetailsDesktopStyles = makeStyles((theme: Theme) => ({
  content: {
    overflowX: "hidden",
  },
  dialog: {
    minWidth: 1000,
    minHeight: 450,
    overflowX: "hidden",
    overflowY: "hidden",
  },

  productDescription: {
    width: 350,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

    fontFamily: "'Fjalla One', sans-serif !important",
  },

  productButtons: {
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  hidePrice: {
    display: "none",
  },

  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  productHeaderTitle: {
    flex: 3,
  },

  productHeaderPrice: {
    flex: 1,
    textAlign: "start",
    color: theme.palette.primary.main,
  },

  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
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
  productInfo: {
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
}));
