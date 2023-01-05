import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Button from "../../components/button";

export const StyledTypo = styled(Typography)(({ theme }) => ({
  color: theme?.palette?.white?.main,
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
export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme?.palette?.white?.main,
  borderColor: theme?.palette?.white?.main,
  marginLeft: "20px",
  "&:hover": {
    background: "#fff6f6",
  },
}));
