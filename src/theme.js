import { createMuiTheme } from "@material-ui/core";
require("typeface-cooper-hewitt");

// A custom theme for this app
const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: [
      "Cooper Hewitt",
      "Helvetica Neue",
      "Helvetica",
      "-apple-system",
      "san-serif",
    ],
    button: {
      textTransform: "none",
      fontSize: "1.125em",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "700",
      fontFamily: "Lato,Helvetica neue,helvetica,sans-serif",
      lineHeight: "2rem",
      letterSpacing: "-0.05rem",
    },
    h6: {
      fontSize: "1.45rem",
      fontWeight: "400",
      fontFamily: "Lato,Helvetica neue,helvetica,sans-serif",
      lineHeight: "2rem",
      "& a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
    body2: {
      fontSize: "1rem",
      fontWeight: "400",
    },
  },
  palette: {
    primary: {
      main: `#df1317`,
    },
    secondary: {
      main: `#607d8b`,
    },
    text: {
      primary: "#263238",
      secondary: "#90a4ae",
    },
    error: {
      main: "#00897b",
    },
    background: {
      default: `rgba(224, 224, 224 , 0.95)`,
      dark: "#546e7a"
    },
  },
});
export default theme;
