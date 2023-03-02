import styled from '@emotion/styled';
import { Typography, Box, Accordion, AccordionSummary } from '@mui/material';
import BgImg from '../../assets/images/cover.jpg';

export const UserTitle = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    fontSize: '32px',
    color: white?.main,
    fontWeight: '500',
  })
);
export const UserRole = styled('h5')({
  margin: '0',
  color: '#eee',
  fontSize: '20px',
  fontWeight: '300',
  letterSpacing: '1.4px',
});
export const AboutDesc = styled('p')({
  letterSpacing: '1px',
  fontSize: '16px',
  fontWeight: '400',
});

export const MainBox = styled(Box)(
  ({
    theme: {
      palette: { white, darkBlack },
    },
  }) => ({
    backgroundColor: white?.main,
    position: 'relative',
    paddingBottom: '40px',
    '& .MuiAccordion-root': {
      paddingBottom: '30px',
      paddingTop: '10px',
      '& .MuiAccordionSummary-root': {
        padding: '0',
      },
      '& .MuiAccordionSummary-expandIconWrapper ': {
        color: darkBlack?.main,
      },
      '& .MuiAccordionSummary-content p': {
        fontWeight: 'bold',
        fontSize: '20px',
      },
    },
  })
);
// icon wrapper
export const SocialIcons = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    position: 'absolute',
    right: '35px',
    bottom: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: '1',

    '& svgs': {
      marginRight: '2rem',
      color: white?.main,
      cursor: 'pointer',
    },
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
export const StyledBox = styled(Box)(
  ({
    theme: {
      palette: { darkBlack },
    },
  }) => ({
    position: 'relative',
    padding: '100px 0px 100px 0px',
    backgroundImage: `url(${BgImg})`,
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: ' right',
    display: 'flex',
    border: '1px solid #fff',
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
export const ContactDetailsBox = styled(Box)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    padding: '100px 0px 100px 0px',
    backgroundColor: primary?.main,
    display: 'flex',
    position: 'relative',
  })
);
export const DescriptionBox = styled(Box)({
  padding: '65px 0px 40px 0px',
  '.MuiBox-root': {
    marginTop: '30px',
    textAlign: 'center',
  },
});
export const UserImage = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: 3px solid #fffff;
  object-fit: cover;
  z-index: 222;
`;
export const UserContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
export const UserData = styled.div`
  margin-left: 2rem;
  z-index: 222;
`;
export const HeadingA = styled('h4')({
  textAlign: 'start',
  margin: '0',
  textTransform: 'uppercase',
  fontSize: '2rem',
  fontWeight: '600',
  lineHeight: '1.5',
  marginBottom: '15px',
  letterSpacing: '2px',
});
export const Heading = styled('h4')({
  margin: '0',
  fontSize: '28px',
  fontWeight: '600',
  lineHeight: '1.5',
  letterSpacing: '2px',
  textTransform: 'capitalize',
});
export const SubHeading = styled('p')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    margin: '0',
    fontSize: '20px',
    fontWeight: '300',
    letterSpacing: '2px',
    marginTop: '5px',
    marginBottom: '2.3rem',
    textTransform: 'capitalize',
    color: primary?.main,
  })
);

export const CustomizeAccordion = styled(Accordion)(({ change }) => ({
  position: 'unset',
  border: '1px solid #aaaaaa',
  padding: '16px 0 !important',
  marginBottom: '0 !important',
  boxShadow: 'none',
  svg: {
    fontSize: '2.5rem',
  },
  ...(change === 'border-bottom-none' && {
    borderBottom: '1px solid transparent',
  }),
}));
export const StyledSummary = styled(AccordionSummary)({
  margin: '0 26px',
});

// Accordion Content
export const AccordionTitle = styled('h2')({
  fontSize: '20px',
  fontWeight: '500',
  letterSpacing: '1.2px',
  margin: '0',
});

// Accordion Content
export const AccordionContent = styled('p')({
  padding: '0px 25px !important',
  fontSize: '18px',
  fontWeight: '300',
  letterSpacing: '1px',
  lineHeight: '1.5',
});

// ProcessBar Title
export const ProgressWrapper = styled(Box)({
  textAlign: 'center',
});

// ProgressBar Container
export const ProgressContent = styled(Box)({
  marginTop: '40px',
});
export const AchivementWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
