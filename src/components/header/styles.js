import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

export const LogoWrapper = styled.div`
  & img {
    height: 55px;
  }
`;
export const ToolbarBox = styled(Toolbar)(({ theme }) => ({
  position: "relative",
  transition: "0.3s all ease",
  "& .MuiBox-root .btn.MuiButtonBase-root.MuiButton-root": {
    transition: "0.3s all ease",
    borderBottom: `2px solid ${theme?.palette?.white?.main}`,
    color: "#444",
    margin: "0 10px",
  },

  "& .MuiBox-root .btn:hover": {
    color: theme?.palette?.primary?.main,
  },
  ".btn.MuiButtonBase-root.MuiButton-root.active": {
    fontWeight: "bold",
    borderBottomColor: theme?.palette?.primary?.main,
    borderRadius: "0",
  },
}));
