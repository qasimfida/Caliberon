import styled from '@emotion/styled';
import { Paper, Box } from '@mui/material';

export const Item = styled(Paper)({
  boxShadow: 'none',
  borderBottomLeftRadius: 'none',
  borderTopLeftRadius: 'none',
});

export const SeeMore = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
export const SponsorsWrapper = styled(Box)(
  ({
    theme: {
      palette: { primary, gradient },
    },
  }) => ({
    margin: '4rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '2rem 16px',
    '& img': {
      padding: '1rem 0',
      width: '100px',
      height: '100%',
    },
  })
);
