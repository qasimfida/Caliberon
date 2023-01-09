import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

export const AboutHeading = styled(Typography)(({ theme }) => ({
  position: "relative",
  fontFamily: "Poppins",
  fontSize: "70px",
  color: theme?.palette?.white?.main,
  fontWeight: "bold",
  lineHeight: 1,
  margin: "20px 0",
  textAlign: "center",
  textTransform: "capitalize",
  "&:before": {
    content: `' '`,
    position: "absolute",
    display: "block",
    top: 0,
    backgroundColor: theme?.palette?.white?.main,
    borderRadius: "5px 5px 5px 5px !important",
    width: "3px",
    height: "40px",
    marginTop: "-57px",
    left: "50%",
  },
}));

export const MainBox = styled(Box)(({ theme }) => ({
  paddingTop: "105px",
  paddingBottom: "70px",
  backgroundColor: theme?.palette?.primary?.main,
  backgroundImage: "linear-gradient(74deg, #f54c0a 40%, #e7cf285c 100%)",
  display: "flex",
  alignItems: "center",
  position: "relative",
}));

export const Details = styled(Box)(({ theme }) => ({
  textAlign: "center",
  "& ol": {
    justifyContent: "center",
  },
  "& li": {
    color: "#d6d6d7",
    "& a": {
      fontSize: "16px",
      "&:hover": {
        color: theme?.palette?.white?.main,
        textDecoration: "none",
        fontWeight: "bold",
      },
    },
  },
  "& p": {
    color: theme?.palette?.white?.main,
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
}));
