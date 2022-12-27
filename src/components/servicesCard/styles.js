import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
	margin-top: 20px;
	display: inline-block;
`;
export const DetailsWrapper = styled.div`
	margin-top: 10px;
`;

export const ServicesDetails = styled("p")((props, { palette }) => ({
	fontFamily: "Poppins",
	fontWeight: "300",
	fontStyle: "normal",
	fontSize: "16px",
	marginTop: "11px 0 0 0",
	color: palette.colors.primary,
	display: "flex",
	alignItems: "center",
}));

export const UserName = styled.h4`
	font-family: Poppins;
	font-weight: bold;
	font-size: 1.2rem;
	line-height: 1.2;
	margin: 0;
`;
export const ServicesWrapper = styled("div")((props) => ({
	background: "#fff",
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
	minHeight: "20rem",
	alignItems: "center",
	padding: "0 20px",
	position: "relative",
	boxShadow: props.active ? "rgba(17, 17, 26, 0.1) 0px 0px 16px" : " ",
	transition: "0.3s all ease-in",
	"&:hover": {
		boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
	},
	"&:hover img": {
		transform: "scale(1.1)",
	},
}));

export const Image = styled("img")({
	height: "100px",
	maxWidth: "100%",
	transitionDuration: "0.3s",
});
export const DetailsSection = styled("div")({
	position: "absolute",
	cursor: "pointer",
	bottom: "0",
	marginBottom: "1rem",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	transition: "0.3s all ease",
	"& svg": {
		color: "#f54c0a",
		marginLeft: ".5rem",
		transition: "0.3s all ease",
	},
	"&:hover": {
		fontWeight: "bold",
		color: "#f54c0a",
		".text": {
			color: "#f54c0a",
			fontWeight: "bold",
		},
		svg: {
			transform: "translate(10px)",
		},
	},
});
export const ServicesContentWrapper = styled("div")({
	position: "relative",
});
