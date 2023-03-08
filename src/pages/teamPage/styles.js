import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';

export const MainBox = styled(Box)({});
export const Wrapper = styled(Box)({
  display: 'flex',
});
export const ServicesItemWrapper = styled('div')(
  ({
    theme: {
      palette: { lightnessWhite },
    },
  }) => ({
    backgroundColor: lightnessWhite.main,
    padding: '30px',
    height: 'fit-content',
  })
);
export const Item = styled(Paper)({
  boxShadow: 'none',
  display: 'flex',
  marginBottom: '22px',
  borderBottomLeftRadius: 'none',
  borderTopLeftRadius: 'none',
});
export const TeamWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid black',
});
