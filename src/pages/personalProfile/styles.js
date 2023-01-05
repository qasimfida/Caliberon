import styled from "@emotion/styled";
import { Typography, Box, Accordion } from "@mui/material";

export const UserTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "44px",
  color: theme?.palette?.primary?.main,
  fontWeight: "bold",
}));

export const AboutDesc = styled(Typography)({
  fontFamily: "Poppins",
  letterSpacing: "0.5px",
  fontSize: (props) => (props.fontSize === "36px" ? "36px" : "24px"),
  color: (props) => (props.color === "#ffffff" ? "#ffffff" : "#333333"),
});

export const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme?.palette?.white?.main,
  position: "relative",
  paddingBottom: "90px",
  "& .MuiAccordion-root": {
    paddingBottom: "50px",
    "& .MuiAccordionSummary-root": {
      padding: "0",
    },
    "& .MuiAccordionSummary-expandIconWrapper ": {
      color: theme?.palette?.primary?.main,
      "& svg": {
        fontSize: "2rem",
      },
    },
    "& .MuiAccordionSummary-content p": {
      fontWeight: "bold",
      fontSize: "20px",
    },
  },
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  padding: "100px 0px 100px 0px",
  backgroundColor: theme?.palette?.white?.main,
  display: "flex",
  position: "relative",
}));
export const ContactDetailsBox = styled(Box)(({ theme }) => ({
  padding: "100px 0px 100px 0px",
  backgroundColor: theme?.palette?.white?.main,
  display: "flex",
  position: "relative",
}));
export const DiscriptionBox = styled(Box)({
  padding: "100px 0px 50px 0px",
});
export const UserImage = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: 3px solid #fffff;
`;
export const UserContent = styled.div`
  display: flex;
  align-items: center;
`;
export const UserData = styled.div`
  margin-left: 2rem;
`;
export const UserSocialIcons = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  "& svg": {
    cursor: "pointer",
    color: theme?.palette?.white?.main,
    fontSize: "34px",
  },
}));
export const CustomizeAccordion = styled(Accordion)({
  boxShadow:
    "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 0px 0px rgb(0 0 0 / 12%)",
  "&.MuiAccordion-root:first-of-type": {
    borderTopLeftRadius: "0 !important",
    borderTopRightRadius: "0 !important",
  },
  "&.MuiAccordion-root:last-of-type": {
    borderBottomLeftRadius: "0 !important",
    borderBottomRightRadius: "0 !important",
  },
});
