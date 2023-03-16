import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';
import cover from '../../assets/images/cover.jpg';

export const AboutHeading = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    position: 'relative',
    fontFamily: 'Poppins',
    fontSize: '70px',
    color: white?.main,
    fontWeight: 'bold',
    lineHeight: 1,
    margin: '20px 0',
    textAlign: 'center',
    textTransform: 'capitalize',
    zIndex: '222',
    '&:before': {
      content: `' '`,
      position: 'absolute',
      display: 'block',
      top: 0,
      backgroundColor: white?.main,
      borderRadius: '5px 5px 5px 5px !important',
      width: '3px',
      height: '40px',
      marginTop: '-57px',
      left: '50%',
    },
  })
);

export const MainBox = styled(Box)({
  paddingTop: '150px',
  paddingBottom: '70px',
  background: `url(${cover})`,
  objectFit: 'cover',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom right',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  '&:before': {
    content: `''`,
    backgroundColor: '#0c0f16',
    opacity: '.6',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: ' 0',
    left: '0',
    zIndex: '1',
  },
});

export const Details = styled(Box)(
  ({
    theme: {
      palette: { white, mediumGray },
    },
  }) => ({
    textAlign: 'center',
    '& ol': {
      justifyContent: 'center',
    },
    '& li': {
      zIndex: '222',
      color: mediumGray.main,
      '& a': {
        fontSize: '16px',
        transition: '.3s all',
        padding: '0 4px',
        '&:hover': {
          color: white?.main,
          textDecoration: 'none',
          fontWeight: '400',
        },
      },
    },
    '& p': {
      color: white?.main,
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
  })
);
