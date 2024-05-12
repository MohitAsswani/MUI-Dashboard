import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  spacing: 5,
  palette: {
    primary: { main: "#5474A8", danger: "#e54040" },
    light: {
      primary: "#6979f8",
      white: "#fff",
      black: "#1a051d",
      blackLight: "#3f3356",
      grey: "#6b6c6f",
      placeholder: "#d0c9d6",
      lightGrey: "#9ca5b4",
      bgGrey: "#e4e8f0",
      backgroundGrey: "#f4f6fc",
      purpleLight: "#eaeeff",
      borderGrey: "#e5e7fa",
      fontGreyLight: "#8798ad",
      greenLight: "#ade610",
      redLight: "#fc7070",
      greenMedium: "#10e6e3",
    },
    dark: { primary: "#6979f8", white: "#fff", black: "#000", grey: "#d0c9d6" },
  },
  
  overrides: {
    
  },
});

const PlThemeProvider = (props) => <ThemeProvider theme={theme} {...props} />;

export default PlThemeProvider;
