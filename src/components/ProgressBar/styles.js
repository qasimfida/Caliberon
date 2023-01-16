import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const Progress = styled(CircularProgress)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    height: calc(${({ size }) => size || 40}px - ${({ thickness, size }) => size / (thickness + 3) || 4 * 3}px);
    width: calc(${({ size }) => size || 40}px - ${({ thickness, size }) => size / (thickness + 3) || 4 * 3}px);
    border-radius: 50%;
    border: 2px solid #ebebeb;
    z-index: 0;
  }
  svg {
    z-index: 1;
  }
`;
const StyledProgressBar = styled(Box)({});

export const ProgressWrap = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '.css-ahj2mt-MuiTypography-root': {
    position: 'absolute',
    fontSize: '20px',
  },
});

export const Label = styled('p')({
  fontSize: '16px',
  fontWeight: 'bolder',
});

export default StyledProgressBar;
