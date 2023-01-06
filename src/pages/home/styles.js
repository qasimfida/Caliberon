import styled from "@emotion/styled";
import { Paper, Box } from "@mui/material";

export const Item = styled(Paper)({
  boxShadow: "none",
  borderBottomLeftRadius: "none",
  borderTopLeftRadius: "none",
});

export const SeeMore = styled("div")`
display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  
  }
  `;
export const SponsorsWrapper = styled(Box)({
  backgroundColor: "#f54c0a",
  backgroundImage: "linear-gradient(74deg, #f54c0a 40%, #e7cf285c 100%)",
  margin: "4rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& img": {
    width: "100px",
    height: "100%",
    padding: "3rem",
  },
});
