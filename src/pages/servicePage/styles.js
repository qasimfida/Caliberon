import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const MainBox = styled(Box)({});
export const ServicesItemWrapper = styled('div')(
  ({
    theme: {
      palette: { lightnessWhite },
    },
  }) => ({
    backgroundColor: lightnessWhite.main,
    padding: '40px',
  })
);
