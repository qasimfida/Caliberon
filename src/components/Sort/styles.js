import { styled } from '@mui/styles';
import { Box, FormControl } from '@mui/material';

const Control = styled(FormControl)({
  display: 'flex',
  marginLeft: '2rem',
  width: '180px',
  background: 'black',
  '& .MuiInputBase-root': {
    border: 'none',
    width: '100%',

    '& fieldset': {
      border: 'none',
      padding: '0',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      border: 'none',
    },
  },
  '& svg': {
    fontSize: '32px',
    color: '#fff',
  },
  '& .MuiSelect-icon': {
    transition: 'transform 0.2s ease-in-out',
  },
  '& svg:first-child': {
    cursor: 'pointer',
    paddingLeft: '10px',
  },
});

export const Wrapper = styled(Box)({
  border: '1px solid #a9a6a6',
  display: 'flex',
  alignItems: 'center',
  height: '53px',
});

export const DefaultValue = styled('p')({
  margin: '0',
  letterSpacing: '.9px',
  fontWeight: '500',
  fontSize: '18px',
});
export const Item = styled('p')({
  margin: '0',
  padding: '0',
  letterSpacing: '.9px',
  fontSize: '18px',
});

export default Control;
