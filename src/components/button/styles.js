import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
`;
