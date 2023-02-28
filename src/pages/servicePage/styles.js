import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ServicesItemWrapper = styled(Box)(
  ({
    theme: {
      palette: { lightnessWhite },
    },
  }) => ({
    backgroundColor: lightnessWhite.main,
    padding: '40px',
  })
);
export const ServicesImageWrapper = styled(Box)({
  marginTop: '80px',
  '& img': {
    width: '100%',
  },
});
