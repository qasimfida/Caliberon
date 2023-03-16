import styled from '@emotion/styled';
import { Typography, Box, Input, TextareaAutosize } from '@mui/material';
import Button from '../Button';
import Section from '../Section';

export const ContactWrapper = styled('div')({
  padding: '0 20px',
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const ContactMessage = styled(Typography)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    fontSize: '32px',
    textAlign: 'center',
    fontWeight: 600,
    color: primary?.main,
  })
);
export const Title = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 600,
  color: 'black',
  marginBottom: '2rem',
  letterSpacing: '1.4px',
});
export const Text = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 300,
  color: 'black',
  letterSpacing: '1px',
  lineHeight: '1px',
});
export const SubTitle = styled(Typography)({
  fontSize: '1rem',
  fontWeight: 500,
  color: 'black',
});
export const ContactText = styled(Typography)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    display: 'flex',
    fontSize: '1.3rem',
    fontWeight: 100,
    color: white?.main,
    width: '70%',
  })
);

export const FormWrapper = styled(Box)({
  boxSizing: 'border-box',
  borderRadius: '10px',
});

export const InputWrapper = styled(Box)({
  display: 'block',
  width: '70%',
});

export const StyledInput = styled(Input)(
  ({
    theme: {
      palette: { dark_black },
    },
  }) => ({
    width: '100%',
    fontSize: '16px',
    margin: '20px 0',
    height: '40px',
    '&:after': {
      display: 'none',
    },
    '&:before': {
      display: 'none',
    },
    '& input': {
      color: dark_black?.main,
      padding: '12px 0',
      paddingRight: '6px',
      borderBottom: `1px solid #6f6363c7 !important`,
      transition: '.3s ease all',
    },
    '& input:focus': {
      borderBottom: `1px solid black !important`,
    },
  })
);
export const StyledTextArea = styled(TextareaAutosize)({
  width: '100%',
  margin: '20px 0',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  fontSize: '16px',
  fontWeight: '500',
  transition: '.3s ease all',
  '&:focus-visible': {
    outline: 'none',
    borderBottom: `1px solid #6f6363c7  !important`,
  },
  '&:focus': {
    borderBottom: `1px solid black  !important`,
  },
});

export const ContactButton = styled(Button)({
  height: '48px',
  textTransform: 'uppercase',
  color: 'black',
  border: `1px solid black`,
  transition: '.4s all',
});
export const StyledSection = styled(Section)({});
export const ContactItem = styled(Box)(
  ({
    theme: {
      palette: { very_black },
    },
  }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingTop: '0',
    marginTop: '0',
    '& svg': {
      display: 'none',
      color: very_black?.main,
      fontSize: '1rem',
    },
  })
);

// icon wrapper
export const IconsWrapper = styled(Box)({
  display: 'flex',
  paddingRight: '3rem',
  '& svgs': {
    marginRight: '2rem',
    color: 'black',
    cursor: 'pointer',
  },
});

export const IconBorder = styled(Box)(
  ({
    theme: {
      palette: { darkGray },
    },
  }) => ({
    '& svgs': {
      color: darkGray?.main,
    },
    height: '22px',
    width: '22px',
    border: `1px solid ${darkGray?.main}`,
    display: 'flex',
    justifyContent: 'center',
    outline: 'none',
    alignItems: 'center',
    margin: '1px 6px',
    padding: '8px',
    zIndex: '0',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: '.5s all ease',

    '&:hover': {
      transform: 'scale(1)',
      background: '#4d4d4d',
      color: '#fff',
    },
  })
);
