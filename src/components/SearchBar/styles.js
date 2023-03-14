import { Box, InputBase } from '@mui/material';
import { styled } from '@mui/styles';
import Button from '../Button';
const Wrapper = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  boxShadow: 'none',
  height: '56px',
  width: '100%',
  '& input': {
    height: '100%',
    paddingRight: '2rem',
    paddingLeft: '1rem',
    transition: '.4s all ease',
    boxSizing: 'border-box',
    letterSpacing: '2px',
    border: '1px solid #a9a6a6',
    borderRight: 'none',
    width: '100%',
    '&:focus': {
      border: '1px solid unset',
    },
  },
});

export const Input = styled(InputBase)(() => ({
  height: '100%',
  width: '100%',
}));
export const SearchWrapper = styled(Button)({
  display: 'flex',
  alignItems: 'center ',
  fontSize: '18px',
  border: '1px solid #a9a6a6 !important',
  height: '100% !important',
  transition: '.5s all !important',
  borderRadius: 'unset',
  '& svg': {
    width: '30px',
  },
});

export default Wrapper;
