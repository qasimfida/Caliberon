import styled from '@emotion/styled';
import { Paper, Box } from '@mui/material';

export const Item = styled(Paper)(({ theme }) => ({
  boxShadow: theme.shadows[0],
  borderBottomLeftRadius: 'none',
  borderTopLeftRadius: 'none',
}));

export const SeeMore = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const SponsorsWrapper = styled(Box)(
  ({
    theme: {
      palette: { primary, gradient },
    },
  }) => ({
    margin: '4rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '2rem 16px',
    '& img': {
      padding: '1rem 0',
      width: '100px',
      height: '100%',
    },
  })
);


// CustomizeSlide
export const CustomizeSlide = styled(Box)(({theme: {palette: {primary}}})=>({
  ".slick-next":{    
    padding: "1rem",
    right:"30px",
    backgroundColor:"none",
    borderRadius:"50%",
    border:"1px solid #fff",
    transition:".3s ease-in",
    "&:hover":{
      color:primary?.main,
      borderColor:primary?.main,
    },
  },
  ".slick-prev":{
    padding: "1rem",
    left: "30px",
    border: "1px solid #fff",
    borderRadius:"50%",
    zIndex:" 1",
    transition:".2s ease",
    "&:hover":{
      color:primary?.main,
      borderColor:primary?.main,
    },
  }
})); 