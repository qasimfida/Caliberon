import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
const Wrapper = styled(Box)(
  ({
    theme: {
      palette: { very_black },
    },
  }) => ({
    background: very_black?.main,
  })
);
export const StyledGrid = styled(Grid)({
  marginTop: '0px',
});

export const LinksWrapper = styled(Box)(
  ({
    theme: {
      palette: { lightGray },
    },
  }) => ({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    textDecoration: 'none',
    color: lightGray?.main,
  })
);

export const MenuLinks = styled('a')({
  fontSize: '14px',
  lineHeight: '24px',
  textDecoration: 'none',
  color: '#e8e8e8',
  marginBottom: '8px',
  letterSpacing: '1px',
  fontWeight: '200',
});
export const Item = styled(Box)({
  background: 'transparent',
});
export const DepartmentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  a: {
    textDecoration: 'none',
    color: '#e8e8e8',
    fontWeight: '200',
    fontSize: '14px',
    letterSpacing: '1px',
    marginBottom: '8px',
  },
});

export const AddressWrapper = styled('div')(
  ({
    theme: {
      palette: { lightGray },
    },
  }) => ({
    fontSize: '14px',
    textDecoration: 'none',
    color: lightGray?.main,
    margin: '0',
  })
);

export const Address = styled('a')({
  color: '#e8e8e8',
  fontWeight: '200',
  letterSpacing: '1px',
  margin: '0',
  wordWrap: 'break-word',
});
export const Contact = styled('p')({
  color: '#e8e8e8',
  letterSpacing: '1px',
  margin: '0',
  marginTop: '30px',
  fontWeight: '200',
  wordWrap: 'break-word',
});

export const DesignedBy = styled('p')(
  ({
    theme: {
      palette: { darkBlack },
    },
  }) => ({
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '24px',
    textDecoration: 'none',
    color: '#fff',
    padding: '25px',
    margin: '0',
    marginTop: '2rem',
    letterSpacing: '1px',
    background: darkBlack?.main,
  })
);

export const SocialIcon = styled(Box)({
  display: 'flex',
  marginTop: '30px',
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
