import styled from '@emotion/styled';
import BgImg from '../../assets/images/guide.jpg';
import { Box } from '@mui/material';

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
export const MainBox = styled(Box)({
  position: 'relative',
});
export const ServicesBox = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    position: 'relative',
    backgroundColor: white?.main,
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingBottom: '24px',
    margin: '3rem 0',
  })
);
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
export const CardsBox = styled(Box)({
  position: 'relative',
  padding: '24px 0',
});
