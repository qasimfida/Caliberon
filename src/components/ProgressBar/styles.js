import { styled } from '@mui/system';
 import CircularProgress from '@mui/material/CircularProgress'

 export const Progress = styled(CircularProgress)`
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
const ProgressBarStyled = styled("div")({
    display:"flex",
    flexDirection:"column",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    // border:"1px solid black",
    marginLeft:"47px",
    fontSize:"40px",
    marginTop:"45px",
    "& .css-1sn4lm3-MuiTypography-root" :{
        position:"absolute",
        left:"37%",
        top:"29%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"20px"
    }
})

export const NameProgressBar = styled("p")({
    fontSize:"16px",
    fontWeight:"bolder",
})

export default  ProgressBarStyled

