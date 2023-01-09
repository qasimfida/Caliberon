import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

export const AboutHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "70px",
  color: theme?.palette?.white?.main,
  fontWeight: "bold",
  lineHeight: "1",
}));

export const AboutDesc = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  letterSpacing: "0.22px",
  fontSize: "22px",
  color: theme?.palette?.white?.main,
  lineHeight: "1.5",
  marginTop: "40px",
  marginBottom: "40px",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  padding: "200px 0px 150px 0px",
  backgroundColor: theme?.palette?.primary?.main,
  display: "flex",
  position: "relative",
}));
export const MainBox = styled(Box)({});
export const ImgBox = styled(Box)({
  "& img": {
    width: "100%",
    height: "100%",
  },
});
