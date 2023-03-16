import { styled } from '@mui/styles';
import { FormControl, Select } from '@mui/material';

const Control = styled(FormControl)({
  display: 'flex',
  width: '100%',
  background: '#11141b',
  color: '#fff',

  '& fieldset': {
    borderColor: '##11141b',
    borderRight: 'none',
    borderRadius: 'unset',
    width: '100% !important',
  },
  '& .MuiInputBase-root': {
    '&:hover fieldset': {
      borderWidth: '1px',
      borderColor: '##11141b',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      borderColor: '##11141b',
    },
  },
  '& .MuiSelect-icon': {
    color: '#fff',
    transition: 'transform 0.2s ease-in-out',
  },
  '& svg': {
    fontSize: '32px',
    color: '#11141b',
  },
});

export const StyledSelect = styled(Select)({
  margin: '0',
});
export const DefaultValue = styled('p')({
  margin: '0',
  letterSpacing: '.9px',
  fontSize: '18px',
  fontWeight: '400',
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
