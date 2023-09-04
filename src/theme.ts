import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#D78B30", // Rustic Amber
  secondary: "#F5E6C5", // Creamy Beig
  success: "#F5E6C5", // Green Pea
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
    fontFamily: '"Fjalla One", sans-serif !important',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Fjalla One", sans-serif !important',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Fjalla One', sans-serif !important",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiTab-root": {
            // Increase specificity by repeating the class
            fontFamily: '"Fjalla One", sans-serif !important',
          },
          wrapper: {
            fontFamily: "Fjalla One, sans-serif !important",
          },
        },
      },
    },
  },
});

export default theme;

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    background: {
      default: Colors.light,
      paper: Colors.gray100,
    },
    text: {
      primary: Colors.gray900,
      secondary: Colors.gray600,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    background: {
      default: Colors.dark, // Set the default background color to Colors.dark
      paper: Colors.gray900, // Set the paper background color to a darker gray
    },
    text: {
      primary: Colors.light, // Set the primary text color to Colors.light
      secondary: Colors.gray300, // Set the secondary text color to a lighter gray
    },
  },
});

export { lightTheme, darkTheme };
