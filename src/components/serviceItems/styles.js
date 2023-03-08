import styled from '@emotion/styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const UserName = styled.h4`
  font-family: Poppins;
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
`;
export const ServicesWrapper = styled('div')(
  ({
    theme: {
      palette: { white, primary },
    },
  }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: white?.main,
    padding: '20px 24px',
    cursor: 'pointer',
    transition: '.5s ease all ',
    '&:hover': {
      color: primary?.main,
    },
    '&:hover svg': {
      color: primary?.main,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  })
);
export const StyledForwardIcon = styled(ArrowForwardIcon)(
  ({
    theme: {
      palette: { primary, very_black },
    },
  }) => ({
    color: very_black?.main,
  })
);
