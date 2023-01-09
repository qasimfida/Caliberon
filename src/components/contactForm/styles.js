import styled from "@emotion/styled";
import { Typography, Box, Input, TextareaAutosize } from "@mui/material";

export const ContactWrapper = styled("div")({
  padding: "0 20px",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ContactMessage = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "32px",
  textAlign: "center",
  fontWeight: 600,
  color: theme?.palette?.primary?.main,
}));
export const ContactText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  display: "flex",
  marginTop: "20px",
  fontSize: "16px",
  color: theme?.palette?.primary?.main,
  textAlign: "center",
}));

export const FormWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  boxSizing: "border-box",
  padding: "40px 20px",
  borderRadius: "10px",
}));

export const InputWrapper = styled(Box)({
  display: "block",
  margin: "35px auto",
  width: "70%",
});

export const StyledInput = styled(Input)(({ theme }) => ({
  width: "100%",
  fontSize: "16px",
  marginBottom: "40px",
  fontFamily: "Poppins",
  "&:after": {
    display: "none",
  },
  "&:before": {
    display: "none",
  },
  "& input": {
    borderBottom: `1px solid ${theme?.palette?.lightGray?.main} !important`,
  },
  "& input:focus": {
    outline: "none",
    borderBottom: `2px solid ${theme?.palette?.primary?.main} !important`,
  },
}));
export const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  marginBottom: "20px",
  borderBottom: `1px solid ${theme?.palette?.lightGray?.main} !important`,
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  fontSize: "16px",
  fontFamily: "Poppins",
  color: "#000",
  "&:focus-visible": {
    outline: "none",
    borderBottom: `2px solid ${theme?.palette?.primary?.main} !important`,
  },
}));

export const ButtonWrapper = styled(Box)({
  fontSize: "16px",
  fontFamily: "Poppins",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& :first-of-type": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& svg": {
    marginLeft: "0.6rem",
  },
});
export const ContactDetails = styled(Box)({});
export const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& svg": {
    color: theme?.palette?.white?.main,
    fontSize: "2.3rem",
  },
}));
export const IconsWrapper = styled("div")(({ theme }) => ({
  marginTop: "80px",
  marginBottom: "3rem",
  display: "flex",
  paddingRight: "3rem",
  "& svg": {
    marginRight: "2rem",
    color: theme?.palette?.white?.main,
    cursor: "pointer",
  },
}));
