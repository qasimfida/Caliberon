import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

// BannerWrapper
export const BannerMainWrapper = styled(Box)(
  ({
    theme: {
      palette: { darkBlack },
    },
  }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '&:before': {
      content: `' '`,
      backgroundColor: darkBlack?.main,
      opacity: '.6',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '1',
    },
  })
);
export const BannerWrapper = styled(Box)({
  position: 'relative',
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '11111',
});
export const StyledTypo = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    color: white?.main,
    fontSize: '50px',
    letterSpacing: '3px',
    lineHeight: '80px',
    width: '50%',
    fontWeight: '700',
    fontFamily: 'Poppins',
    paddingTop: '65px',
  })
);

export const WrapperDownIcon = styled(Box)(
  ({
    theme: {
      palette: { darkGray },
    },
  }) => ({
    width: '100%',
    marginTop: '3rem',
    cursor: 'pointer',
    color: '#fff',
  })
);

export const ScrollButton = styled('a')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '35px',
  height: '55px',
  margin: '0 auto 20px',
  boxSizing: 'border-box',
  border: '1px solid #fff',
  borderRadius: '23px',
  overflow: 'hidden',
  '&:hover svg': {},
  svg: {},
});

export const Dot = styled('span')({
  width: '13px',
  height: '13px',
  background: '#fff',
  borderRadius: '50%',
  position: 'relative',
  top: '6px',
  color: '#fff',
  transition: '.9s ease',
  '@keyframes topToBottom': {
    '0%': {
      top: '6px',
      opacity: '0',
    },
    '10%': {
      top: '6px',
      opacity: '0',
    },
    '30%': {
      top: '6px',
      opacity: '1',
    },
    '70%': {
      top: 'calc(100% - 19px )',
      opacity: '1',
    },
    '100%': {
      top: 'calc(100% - 19px )',
      opacity: '0',
    },
  },
  animation: 'topToBottom 2s linear infinite',
});
// Slide content
export const SlideContent = styled(Box)({
  width: '45%',
});
export const BannerContent = styled(Typography)({
  fontWeight: '300',
  lineHeight: '31px',
  letterSpacing: '2px',
  textAlign: 'center',
  marginTop: '16px',
  fontSize: '17px',
  color: '#eee',
});

// icon wrapper
export const SocialIcons = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    position: 'absolute',
    bottom: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: '111111',
  })
);

export const IconBorder = styled(Box)(
  ({
    theme: {
      palette: { darkGray, white },
    },
  }) => ({
    height: '22px',
    width: '22px',
    border: `1px solid ${darkGray?.main}`,
    display: 'flex',
    justifyContent: 'center',
    outline: 'none',
    alignItems: 'center',
    margin: '1px 6px',
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: '.5s all ease',
    '& svg ': {
      color: '#e3dddd',
      transform: 'scale(1.3)',
      padding: '2px',
      transition: '.2s all ease',
    },
    '&:hover svg': {
      color: white?.main,
      transform: 'scale(1.4)',
    },
    '&:hover': {
      background: '#4d4d4d',
    },
  })
);
