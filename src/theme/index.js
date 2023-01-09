import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "#fff",
            background: "#f54c0a",
            textTransform: "none",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: "#000",
            backgroundColor: "#fff",
            textTransform: "none",
            borderColor: "#fff",
            "&:hover": {
              borderColor: "#fff",
              color: "#fff",
            },
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
      main: "#748494",
    },
    black: {
      main: "#000000",
    },
  },
});
export default theme;
