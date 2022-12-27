import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
	font-family: Poppins;
	height: 44px;
	padding: 0 20px;
	margin-right: 10px;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
`;
