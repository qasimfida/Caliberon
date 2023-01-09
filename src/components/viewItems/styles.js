import styled from "@emotion/styled";

export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const ViewedWrapper = styled("div")(({ theme }) => ({
  background: theme?.palette?.white?.main,
}));
export const UserRole = styled("h4")(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "24px",
  fontWeight: "400",
  color: theme?.palette?.primary?.main,
  margin: "0 0 5px 0",
  letterSpacing: "1px",
}));

export const ViewedContentWrapper = styled.div`
  padding: 5px 20px 20px 20px;
`;
