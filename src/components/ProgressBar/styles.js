import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

export const CustomizeCircularProgress = styled(CircularProgress)`
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
export const Percent = styled('span')({
  position: 'absolute',
  fontWeight: '500',
});
export const CustomizeLinearProgress = styled(LinearProgress)``;
const StyledProgressBar = styled(Box)({
  textAlign: 'center',
});

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
export const LinearWrap = styled('div')({
  '& p': {
    textAlign: 'left',
  },
  '&.mt-5': {
    marginTop: '20px',
  },
});

export const Label = styled('h3')({
  textAlign: 'start',
  margin: '0',
  fontSize: '1.2rem',
  fontWeight: '400',
  lineHeight: '1.5',
  marginBottom: '15px',
  letterSpacing: '2px',
});
export const Title = styled('h2')({
  textAlign: 'center',
  margin: '0',
  fontSize: '1.2rem',
  paddingTop: '22px',
  fontWeight: '400',
  lineHeight: '1.5',
  marginBottom: '15px',
  letterSpacing: '2px',
});

export default StyledProgressBar;
