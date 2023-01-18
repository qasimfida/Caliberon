import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledTypo = styled(Typography)(({  theme: {
  palette: { white },
}, }) => ({
  color: white?.main,
  fontSize: "4.375rem",
  lineHeight: "80px",
  width: "45%",
  fontWeight: "800",
  paddingTop: "65px",
}));

export const ButtonWrapper = styled("div")({
  marginTop: "50px",
  "& :first-of-type": {
    marginRight: "10px",
  },
});
