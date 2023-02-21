import styled from '@emotion/styled';
import { Box } from '@mui/system';

const Wrapper = styled(Box)(
  ({
    theme: {
      palette: { mediumGray },
    },
  }) => ({
    color: mediumGray?.[100],
    height: '180px',
    width: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '8px',
    '&.size': {
      '& svg': {
        width: '70px',
        height: '70px',
      },
      '& .css-2u009e': {
        fontSize: '25px',
      },
      '& .css-1ta1ohp': {
        fontSize: '15px',
      },
    },
  })
);

export const AchievementTotall = styled('h1')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    color: primary?.main,
    fontWeight: '600',
    margin: '0',
    marginTop: '8px',
    letterSpacing: '2px',
  })
);
export const SubTitle = styled('p')(
  ({
    theme: {
      palette: { mediumGray },
    },
  }) => ({
    color: mediumGray?.[100],
    fontSize: '14px',
    fontWeight: '300',
    letterSpacing: '2px',
    margin: '0',
  })
);

export default Wrapper;
