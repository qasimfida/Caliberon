import styled from '@emotion/styled';
import { Paper, Box } from '@mui/material';

export const Item = styled(Paper)({
  boxShadow: 'none',
  borderBottomLeftRadius: 'none',
  borderTopLeftRadius: 'none',
});
export const Filters = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '60px',
  boxSizing: 'border-box',
});
export const SearchBar = styled('div')({
  display: 'flex',
  width: '200px',
  border: '1px solid black',
});

export const DepartmentHeading = styled.h2`
  padding: 5px 0;
  margin: 0;
`;
export const TeamMembersWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '16px',
});
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
    color: darkGray.main,
    margin: 0,
    '& svg': {
      marginLeft: '12px',
    },
  })
);
