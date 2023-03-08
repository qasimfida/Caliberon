import { Box, InputBase } from '@mui/material';
import { styled } from '@mui/styles';
import Button from '../Button';
const Wrapper = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  boxShadow: 'none',
  borderRadius: '4px',
  height: '56px',
  '& input': {
    height: '100%',
    paddingRight: '2rem',
    paddingLeft: '1rem',
    transition: '.4s all ease',
    boxSizing: 'border-box',
    letterSpacing: '2px',
    border: '1px solid #aaaaaa69',
    width: '100%',
    '&:focus': {
      border: '1px solid #aaaaaa69',
      // boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
    '&:active': {
      // boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    },
  },
});

export const Input = styled(InputBase)(() => ({
  minWidth: '600px',
  paddingTop: '0',
  height: '100%',
}));
// boxShadow: ' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
export const SearchWrapper = styled(Button)({
  display: 'flex',
  alignItems: 'center ',
  borderRadius: '0 4px 4px 0 !important',
  fontSize: '18px',
  border: '1px solid #aaaaaa69 !important',
  height: '100% !important',

  transition: '.5s all !important',
});

export default Wrapper;
