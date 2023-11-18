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
    // h1: {
    //   fontFamily: '"Fjalla One", sans-serif',
    //   //... other styles specific to h1
    // },
    // h2: {
    //   fontFamily: '"Fjalla One", sans-serif',
    //   //... other styles specific to h2
    // },
    // h3: {
    //   fontFamily: '"Fjalla One", sans-serif',
    //   //... other styles specific to h3
    // },
    // h4: {
    //   fontFamily: '"Fjalla One", sans-serif',
    //   //... other styles specific to h4
    // },
    // h5: {
    //   fontFamily: '"Fjalla One", sans-serif',
    //   //... other styles specific to h5
    // },
    // h6: {
    //   fontFamily: '"Fjalla One", sans-serif',
    //   //... other styles specific to h6
    // },
    // subtitle1: {
    //   fontFamily: '"Fjalla One", sans-serif',
    //   //... other styles specific to subtitle1
    // },
    // ... continue for other typography variants
  },

  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     body: {
    //       fontFamily: '"Fjalla One", sans-serif',
    //     },
    //   },
    // },
    // MuiButtonBase: {
    //   styleOverrides: {
    //     root: {
    //       fontFamily: "'Fjalla One', sans-serif",
    //     },
    //   },
    // },
    // MuiTab: {
    //   styleOverrides: {
    //     root: {
    //       "&.MuiTab-root": {
    //         // Increase specificity by repeating the class
    //         fontFamily: '"Fjalla One", sans-serif ',
    //       },
    //       wrapper: {
    //         fontFamily: "Fjalla One, sans-serif ",
    //       },
    //     },
    //   },
    // },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       "&.MuiTypography-h6": {
    //         fontFamily: '"Fjalla One", sans-serif ',
    //       },
    //     },
    //   },
    // },
  },
});

export default theme;
