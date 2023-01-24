import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
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
    letterSpacing: '2px',
    lineHeight: '80px',
    width: '50%',
    fontWeight: '700',
    fontFamily: 'Poppins',
    paddingTop: '65px',
  })
);

export const ButtonWrapper = styled('div')({
  marginTop: '50px',
  '& :first-of-type': {
    marginRight: '10px',
  },
});
// Custom button styles
export const CustomButton = styled(Button)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    padding: '13px 23px',
    fontWeight: '500',
    fontSize: '14px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    borderRadius: 'unset',
    transition: '.5s all ease',
    '&:hover': {
      background: '#fff',
      color: primary?.main,
    },
  })
);

// Slide content
export const SlideContent = styled(Box)({
  fontFamily: 'Poppins',
  marginTop: '16px',
  fontSize: '15px',
  width: '45%',
  lineHeight: '31px',
  letterSpacing: '1px',
  color: '#eee',
});

// SocialIcons
export const SocialIcons = styled(Box)({
  position: 'absolute',
  bottom: '24px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  zIndex: '111111',
});

// IconCircle
export const IconCircle = styled(Box)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    cursor: 'pointer',
    width: '17px',
    height: '17px',
    marginRight: '12px',
    border: '1px solid #bfbfbf',
    borderRadius: '50%',
    display: 'flex',
    padding: '4px',
    alignItems: 'center',
    color: '#bfbfbf',
    justifyContent: 'center',
    transition: '.2s ease-in',
    '&:hover': {
      color: primary?.main,
      borderColor: primary?.main,
    },
  })
);
