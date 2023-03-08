import { styled } from '@mui/styles';
import { FormControl, Select } from '@mui/material';

const Control = styled(FormControl)({
  display: 'flex',
  width: '145px',
  '& .MuiInputBase-root': {
    '&:hover fieldset': {
      borderColor: '#9b9b9b',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      borderColor: '#9b9b9b',
    },
  },
});

export const Wrapper = styled('p')({
  display: 'flex',
});
export const Label = styled('p')({
  marginRight: '6px',
});
export const StyledSelect = styled(Select)({
  margin: '0',
});
export const DefaultValue = styled('p')({
  margin: '0',
  letterSpacing: '.9px',
  fontWeight: '500',
  fontSize: '16px',
});
export const Item = styled('p')({
  margin: '0',
  padding: '0',
  letterSpacing: '.9px',
  fontSize: '18px',
});

export default Control;
