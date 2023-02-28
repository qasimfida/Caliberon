import { styled } from '@mui/styles';
import { Box } from '@mui/system';

const Wrapper = styled(Box)({});

export const MissionHeading = styled('h4')(
  ({
    theme: {
      palette: { black },
    },
  }) => ({
    margin: '0',
    fontSize: '28px',
    color: black?.main,
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'capitalize',
  })
);

export const SubHeading = styled('p')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    margin: '0',
    fontSize: '22px',
    color: primary?.main,
    fontWeight: '300',
    letterSpacing: '1px',
  })
);

export default Wrapper;
