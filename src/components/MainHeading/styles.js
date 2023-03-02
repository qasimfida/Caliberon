import styled from '@emotion/styled';
import { Box } from '@mui/system';

const Wrapper = styled(Box)(({ alignLeft }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: alignLeft ? 'start' : 'center',
  height: '100%',
  marginBottom: '45px',
}));

export const SubTitle = styled('span')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    color: primary?.main,
    fontWeight: '300',
    fontSize: '17px',
    textTransform: 'uppercase',
    letterSpacing: '14px',
    display: 'inline-block',
  })
);

export const Title = styled('h3')(({ dark, theme: { palette } }) => ({
  margin: '0',
  textTransform: 'uppercase',
  fontSize: '4rem',
  letterSpacing: '6px',
  fontWeight: '700',
  color: dark ? palette.black.main : palette.white.main,
}));

export default Wrapper;
