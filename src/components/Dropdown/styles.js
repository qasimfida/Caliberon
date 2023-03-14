import { styled } from '@mui/styles';
import { FormControl, Select } from '@mui/material';

const Control = styled(FormControl)({
  display: 'flex',
  width: '100%',
  background: 'black',
  color: '#fff',

  '& fieldset': {
    borderColor: '#a9a6a6',
    borderRight: 'none',
    borderRadius: 'unset',
    width: '100% !important',
  },
  '& .MuiInputBase-root': {
    '&:hover fieldset': {
      borderWidth: '1px',
      borderColor: '#a9a6a6',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      borderColor: '#a9a6a6',
    },
  },
  '& .MuiSelect-icon': {
    color: '#fff',
    transition: 'transform 0.2s ease-in-out',
  },
  '& svg': {
    fontSize: '32px',
    color: '#000',
  },
});

export const StyledSelect = styled(Select)({
  margin: '0',
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
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingRight: '10px',
});

export default Control;
