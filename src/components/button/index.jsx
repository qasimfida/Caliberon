import React from "react";
import { StyledButton } from "./styles";

const Button = ({ sx, variant, children, onClick, className, ...rest }) => {
	return (
		<StyledButton
			{...rest}
			variant={variant}
			sx={{ sx }}
			onClick={onClick}
			className={className}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
