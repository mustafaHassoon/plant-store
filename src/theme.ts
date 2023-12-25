import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#D78B30", // Rustic Amber
  secondary: "#F5E6C5", // Creamy Beig
  success: "#F5E6C5", // Green Peas
  info: "#7CB45C", // Chelsea Cucumber
  danger: "#F5E6C5", // Coriander
  warning: "#F5E6C5", // Sunflower Yellow
  dark: "#006400", // Deep Forest
  light: "#F5F5DC", // Soft Beige
  muted: "#77896C", // Willow Green
  border: "#A9A9A9", // River Stone
  inverse: "#191970", // Midnight Sky
  shaft: "#6B4423", // Rich Soil
  gray100: "#F8F9FA", // Lightest Gray
  gray200: "#E9ECEF",
  gray300: "#DEE2E6",
  gray400: "#CED4DA",
  gray500: "#ADB5BD",
  gray600: "#6C757D",
  gray700: "#495057",
  gray800: "#343A40",
  gray900: "#212529", // Darkest Gray
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  typography: {
    fontFamily: '"Fjalla One", sans-serif', // Set the global font family
  },

  components: {},
});

export default theme;
