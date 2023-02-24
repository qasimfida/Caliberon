import styled from '@emotion/styled';
import { Typography, Box } from '@mui/material';

export const MissionHeading = styled('h4')(
  ({
    theme: {
      palette: { black },
    },
  }) => ({
    margin: '0',
    fontSize: '28px',
    color: black?.main,
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'capitalize',
  })
);
export const SubHeading = styled('p')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    margin: '0',
    fontSize: '22px',
    color: primary?.main,
    fontWeight: '300',
    letterSpacing: '1px',
  })
);

export const MissionDesc = styled(Typography)(
  ({
    theme: {
      palette: { lightGray },
    },
  }) => ({
    letterSpacing: '1x',
    fontSize: '16px',
    color: lightGray?.main,
    lineHeight: '1.5',
    marginTop: '24px',
    fontWeight: '300',
  })
);

export const StyledBox = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    backgroundColor: white?.main,
  })
);
export const ImagesBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  img: {
    borderRadius: '5px 5px 5px 5px',
  },

  '& .absolatedImage': {
    position: 'absolute',
    '& :first-of-type': {
      width: '280px',
      height: '278px',
      textAlign: 'center',
      top: '218px',
      left: '-430px',
      position: 'absolute',
    },
    '& :last-child': {
      left: '170px',
      top: '160px',
      width: '320px',
      textAlign: 'center',
      position: 'absolute',
    },
    '@media (max-width: 900px)': {
      display: 'none !important',
    },
  },
  '.anime-1': {
    '@keyframes zoomIn': {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(1.2)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
    animation: 'zoomIn 12s infinite ease',
  },
  '.anime-2': {
    '@keyframes slideRight': {
      '0%': {
        transform: 'translateX(0)',
      },
      '50%': {
        transform: 'translateX(60px)',
      },
      '100%': {
        transform: 'translateX(0px)',
      },
    },
    animation: 'slideRight 12s infinite ease',
  },
  '.anime-3': {
    '@keyframes slideLeft': {
      '0%': {
        transform: 'translateX(0)',
      },
      '50%': {
        transform: 'translateX(-60px)',
      },
      '100%': {
        transform: 'translateX(0px)',
      },
    },
    animation: 'slideLeft 12s infinite ease',
  },
});
export const TeamBox = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    padding: '40px 0px 35px 0px',
    backgroundColor: white?.main,
    position: 'relative',
    textAlign: 'center',
    marginTop: '16px',
  })
);
export const TeamCards = styled(Box)({
  marginTop: '8rem',
  padding: '0',
});
