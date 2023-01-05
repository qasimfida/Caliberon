import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "white" },
          style: {
            color: "#f54c0a",
            background: "#fff",
            textTransform: "none",
          },
        },
      ],
    },
  },

  palette: {
    primary: {
      main: "#f54c0a",
    },
    secondary: {
      main: "#edf2ff",
    },
    white: {
      main: "#fff",
    },
    lightGray: {
      main: "#748494"
    },
    black: {
      main: "#000000"
    }
  },
});
export default theme;
