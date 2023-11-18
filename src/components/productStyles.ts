import { makeStyles } from "@mui/styles";
import { Colors } from "../theme";

const useStyles = makeStyles((theme) => ({
  myRoot: {
    width: 300,
    height: 390,
    marginTop: 55,
    // top: 100,
    // right: 100,
    borderRadius: 0,
    boxShadow: "0px 0px 0px 0px",
  },
  root: {
    "&&": {
      position: "absolute",
      zIndex: 2, // Ensure it's above the image

      color: "rgba(255, 255, 255, 0.7)",
      display: "none ",
      "&:hover": {
        color: "rgba(255, 255, 255, 1)",
      },
    },
  },

  media: {
    cursor: "default !important",
    position: "relative", // This establishes a new positioning context
    objectFit: "cover", // cover the container without stretching
    marginTop: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    height: 270,
    width: 270,

    borderRadius: 0,
  },
  favoriteButton: {
    "&&": {
      position: "absolute",
      zIndex: 2, // Ensure it's above the image
      top: 0,
      right: 0,
      color: Colors.primary,
      display: "none ",
      "&:hover": {
        color: Colors.primary,
      },
    },
  },

  favorited: {
    "&&": {
      color: Colors.primary,
      "&:hover": {
        color: Colors.primary, // This ensures that the hover color remains consistent with the primary color.
      },
    },
  },

  showFavoriteButton: {
    "&&": {
      display: "flex",
    },
  },

  content: {
    borderRadius: 0,
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
    height: 35,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    borderRadius: 0,

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    "&:active": {
      //transform: "scale(0.95)",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      transform: "translateY(1px)", // Slightly moves the button down
      boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)", // Inner shadow for an indented look
      // Optional: Adjust color or other properties for the active state
      //transform: "scale(0.95) translateY(2px)",
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
    "imageContainer & $favoriteButton": {
      display: "none",
    },
  },
  imageContainerHover: {
    "&:hover $media": {
      boxShadow: "0px 3px 5px 5px rgba(0, 0, 0, .2)",
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
