import styled from '@emotion/styled';
import BgImg from '../../assets/images/guide.jpg';
import { Box } from '@mui/material';
import { Section } from '../../components/common';

export const StyledBox = styled(Box)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    padding: '200px 0px 150px 0px',
    backgroundColor: primary?.main,
    display: 'flex',
    position: 'relative',
  })
);

export const StyledSection = styled(Section)({
  position: 'relative',
});

export const GuidBox = styled(Box)({
  width: '100%',
  height: '20rem',
  display: 'flex',
  alignItems: 'flex-end',
  backgroundImage: `url(${BgImg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
});

export const GuidContent = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    position: 'relative',
    backgroundColor: white?.main,
    marginLeft: '24px',
    marginRight: '24px',
    marginBottom: '24px',
    padding: '0 24px',
  })
);
