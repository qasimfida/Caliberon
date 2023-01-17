import styled from '@emotion/styled';
import { Typography, Box, Accordion } from '@mui/material';
import { fontSize } from '@mui/system';

export const UserTitle = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    fontFamily: 'Poppins',
    fontSize: '44px',
    color: white?.main,
    fontWeight: 'bold',
  })
);

export const AboutDesc = styled(Typography)(
  ({
    theme: {
      palette: { white, darkGray },
    },
  }) => ({
    fontFamily: 'Poppins',
    letterSpacing: '0.5px',
    fontSize: (props) => (props.fontSize === '36px' ? '36px' : '24px'),
    color: (props) => (props.color === white.main ? white.main : darkGray),
  })
);

export const MainBox = styled(Box)(
  ({
    theme: {
      palette: { white, primary },
    },
  }) => ({
    backgroundColor: white?.main,
    position: 'relative',
    paddingBottom: '90px',
    '& .MuiAccordion-root': {
      paddingBottom: '30px',
      paddingTop: '10px',
      '& .MuiAccordionSummary-root': {
        padding: '0',
      },
      '& .MuiAccordionSummary-expandIconWrapper ': {
        color: primary?.main,
        '& svg': {
          fontSize: '2rem',
        },
      },
      '& .MuiAccordionSummary-content p': {
        fontWeight: 'bold',
        fontSize: '20px',
      },
    },
  })
);
export const StyledBox = styled(Box)(
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
  padding: '100px 0px 50px 0px',
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
`;
export const UserContent = styled.div`
  display: flex;
  align-items: center;
`;
export const UserData = styled.div`
  margin-left: 2rem;
`;
export const UserSocialIcons = styled('div')(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      cursor: 'pointer',
      color: white?.main,
      fontSize: '34px',
    },
  })
);
export const CustomizeAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: theme.shadows[3],
  '&.MuiAccordion-root:first-of-type': {
    borderTopLeftRadius: '0 !important',
    borderTopRightRadius: '0 !important',
  },
  '&.MuiAccordion-root:last-of-type': {
    borderBottomLeftRadius: '0 !important',
    borderBottomRightRadius: '0 !important',
  },
}));

// Accordion Content
export const AccordionTitle = styled("h2")({
  padding: "0px 25px",
  fontSize: "20px"
})

// Accordion Content
export const AccordionContent = styled("p")({
  padding: "0px 8px",
})

// ProcessBar Title
export const ProgressWrapper = styled(Box)({
  textAlign: 'center',
  margin: '5rem 0px',
});

// ProgressBar Container
export const ProgressContent = styled(Box)({
  marginTop: '60px',
});

// TimeLine Component
export const TimeLineWrap = styled(Box)({
  height: "auto",
  marginBottom: "5rem",
})

