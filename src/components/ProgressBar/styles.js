import { styled } from '@mui/system';
import Paper from "@mui/material/Paper"
 import CircularProgress from '@mui/material/CircularProgress'

 export const ProgressLabel = styled(CircularProgress)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
        content: "";
        position: absolute;
        height:calc(${({size}) => size || 40}px - ${({thickness, size})=> size/(thickness+3)  || 4*3}px);
        width:calc(${({size}) => size || 40}px - ${({thickness, size})=> size/(thickness+3)  || 4*3}px);
        border-radius: 50%;
        border: 2px solid #ebebeb;
        z-index: 0;
    }
    svg {
        z-index: 1;
    }
 `
const StyledProgressBar = styled(Paper)({
    position:"relative",
    textAlign:"center",
    ".css-1sn4lm3-MuiTypography-root" :{
        position:"absolute",
        left:"37%",
        top:"29%",
        fontSize:"20px"
    }
})

export const NameProgressBar = styled("p")({
    fontSize:"16px",
    fontWeight:"bolder",
})

export default  StyledProgressBar

