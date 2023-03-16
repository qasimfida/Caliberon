import styled from '@emotion/styled';
import { Paper, Box, Grid } from '@mui/material';

export const TitleBar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
  marginBottom: '30px',
});
export const Item = styled(Paper)({
  boxShadow: 'none',
  borderBottomLeftRadius: 'none',
  borderRadius: 'unset',
});
export const Filters = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '60px',
});
export const SearchWrapper = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
});
export const SearchBar = styled('div')({
  display: 'flex',
  width: '200px',
});

export const DepartmentHeading = styled.h2`
  padding: 5px 0;
  margin: 0;
`;

export const ProfileWrapper = styled(Box)({
  marginBottom: '60px',
});
export const ViewAll = styled('p')(
  ({
    theme: {
      palette: { darkGray },
    },
  }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.2rem',
    cursor: 'pointer',
    letterSpacing: '2px',
    color: darkGray.main,
    margin: 0,
    '& svg': {
      marginLeft: '12px',
    },
  })
);

export const LoadMoreBtn = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '40px',
});
