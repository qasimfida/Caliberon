import styled from '@emotion/styled';
import { Box } from '@mui/system';
const Wrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
});

export const Contact = styled(Box)({
  //   border: '1px solid #fff',
});
export const ContactTitle = styled('h3')({
  margin: '0',
  marginBottom: '16px',
  letterSpacing: '2px',
  fontWeight: '500',
  textTransform: 'uppercase',
});
export const ContactGmail = styled('p')({
  fontSize: '17px',
  fontWeight: '200',
  margin: '0',
  letterSpacing: '1.2px',
});
export const ContactNumber = styled('p')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    fontSize: '17px',
    fontWeight: '200',
    margin: '0',
    marginTop: '12px',
    letterSpacing: '1.2px',
    // color: primary?.main,
  })
);
export const Location = styled(Box)({
  //   border: '1px solid #fff',
});
export const LocationTitle = styled('h3')({
  margin: '0',
  marginBottom: '16px',
  letterSpacing: '2px',
  fontWeight: '500',
  textTransform: 'uppercase',
});
export const LocationDetails = styled('p')({
  fontSize: '17px',
  fontWeight: '200',
  margin: '0',
  marginTop: '12px',
  letterSpacing: '1.2px',
});
export const Social = styled(Box)({
  //   border: '1px solid #fff',
});
export const SocialTitle = styled('h3')({
  margin: '0',
  marginBottom: '24px',
  letterSpacing: '2px',
  fontWeight: '500',
  textTransform: 'uppercase',
});

export const SocialIcon = styled(Box)({
  display: 'flex',
});
export const BoderRadius = styled(Box)(
  ({
    theme: {
      palette: { darkGray },
    },
  }) => ({
    height: '22px',
    width: '22px',
    border: `1px solid ${darkGray?.main}`,
    display: 'flex',
    justifyContent: 'center',
    outline: 'none',
    alignItems: 'center',
    padding: '8px',
    cursor: 'pointer',
    borderRadius: '50%',
    marginRight: '12px',
    transition: '.5s all ease',
    '&:hover': {
      transform: 'scale(1)',
      background: '#4d4d4d',
    },
  })
);

export default Wrapper;
