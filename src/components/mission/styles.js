import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";

export const MissionHeading = styled(Typography)({
	fontFamily: "Poppins",
	fontSize: "44px",
	color: "#000000",
	fontWeight: "bold",
	lineHeight: "1",
});
export const TeamSubHeading = styled(Typography)({
	fontFamily: "Poppins",
	fontSize: "20px",
	color: "#f54c0a",
	lineHeight: "4",
});

export const MissionDesc = styled(Typography)({
	fontFamily: "Poppins",
	letterSpacing: "0.22px",
	fontSize: "15px",
	color: "#748494",
	lineHeight: "1.5",
	marginTop: "40px",
	marginBottom: "40px",
});

export const StyledBox = styled(Box)({
	padding: "80px 0",
	backgroundColor: "#ffffff",
	position: "relative",
});
export const ImagesBox = styled(Box)({
	padding: "80px 0px",
	display: "flex",
	justifyContent: "center",
	position: "relative",
	img: {
		borderRadius: "5px 5px 5px 5px",
	},

	"& .absolatedImage": {
		position: "absolute",
		"& :first-of-type": {
			width: "280px",
			height: "278px",
			textAlign: "center",
			top: "218px",
			left: "-430px",
			position: "absolute",
		},
		"& :last-child": {
			left: "170px",
			top: "160px",
			width: "320px",
			textAlign: "center",
			position: "absolute",
		},
		"@media (max-width: 900px)": {
			display: "none !important",
		},
	},
	".anime-1": {
		"@keyframes zoomIn": {
			"0%": {
				transform: "scale(1)",
			},
			"50%": {
				transform: "scale(1.2)",
			},
			"100%": {
				transform: "scale(1)",
			},
		},
		animation: "zoomIn 12s infinite ease",
	},
	".anime-2": {
		"@keyframes slideRight": {
			"0%": {
				transform: "translateX(0)",
			},
			"50%": {
				transform: "translateX(60px)",
			},
			"100%": {
				transform: "translateX(0px)",
			},
		},
		animation: "slideRight 12s infinite ease",
	},
	".anime-3": {
		"@keyframes slideLeft": {
			"0%": {
				transform: "translateX(0)",
			},
			"50%": {
				transform: "translateX(-60px)",
			},
			"100%": {
				transform: "translateX(0px)",
			},
		},
		animation: "slideLeft 12s infinite ease",
	},
});
export const TeamBox = styled(Box)({
	padding: "40px 0px 35px 0px",
	backgroundColor: "#ffffff",
	position: "relative",
	textAlign: "center",
});
export const TeamCards = styled(Box)({
	marginTop: "8rem",
});
