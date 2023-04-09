import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    height: 390,
    borderRadius: 0,
    boxShadow: "0px 0px 0px 0px",
  },
  media: {
    marginTop: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    height: 270,
    width: 270,
    transitions: {
      duration: theme.transitions.duration.standard,
    },
    borderRadius: 0,
  },
  favoriteButton: {
    position: "absolute",
    top: 25,
    right: 20,
    color: "rgba(255, 255, 255, 0.7)",
    display: "none",
    "&:hover": {
      color: "rgba(255, 255, 255, 1)",
    },
  },

  showFavoriteButton: {
    display: "flex",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0px",
  },
  button: {
    display: "none",
    position: "absolute",
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 252,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
  showButton: {
    display: "inline-flex",
  },

  imageContainer: {
    marginTop: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 320,
  },
  imageContainerHover: {
    "& $media": {
      boxShadow: "0px 3px 5px 5px rgba(0, 0, 0, .2)",
      backgroundColor: theme.palette.background.paper,
      transform: "scale(1.05)",
    },
  },

  fadedImage: {
    opacity: 0.5,
  },

  hidePrice: {
    display: "none",
  },
}));

export default useStyles;
