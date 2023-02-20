import styled from '@emotion/styled';
import { Box } from '@mui/system';
// import PlayIcon from '../../components/Svgs/Play';

const Wrapper = styled(Box)(({ playing }) => ({
  position: 'relative',
  width: '100%',
  img: {
    display: playing ? 'none' : 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  ' .pause-icon': {
    transition: '0.3s all ease',
    opacity: '0',
  },
  '&:hover .pause-icon': {
    opacity: '1',
  },
}));

export const PlayIconWrapper = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
  color: '#fff',
  zIndex: 2,
});
export const PauseIconWrapper = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
  color: '#fff',
  zIndex: 2,
});

export default Wrapper;
