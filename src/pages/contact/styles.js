import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const MapSection = styled(Box)(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    backgroundColor: white?.main,
    display: 'flex',
    alignItems: 'center',
    '& iframe': {
      width: '100%',
      height: '30rem',
    },
    '@media (max-width: 700px)': {
      flexWrap: 'wrap',
    },
  })
);
