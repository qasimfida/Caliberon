import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

export const LogoWrapper = styled.div`
	& img {
		height: 55px;
	}
`;
export const ToolbarBox = styled(Toolbar)({
	position: "relative",
	transition: "0.3s all ease",
	"& .MuiBox-root .btn.MuiButtonBase-root.MuiButton-root": {
		transition: "0.3s all ease",
		borderBottom: "2px solid #fff",
		color: "#444",
		margin: "0 10px",
	},

	"& .MuiBox-root .btn:hover": {
		color: "#f54c0a",
	},
	".btn.MuiButtonBase-root.MuiButton-root.active": {
		fontWeight: "bold",
		borderBottomColor: "#f54c0a",
		borderRadius: "0",
	},
});
