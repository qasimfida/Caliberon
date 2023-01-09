import styled from '@emotion/styled';
import { Toolbar } from '@mui/material';

export const LogoWrapper = styled.div`
  & img {
    height: 55px;
  }
`;
export const ToolbarBox = styled(Toolbar)(
  ({
    theme: {
      palette: { primary, white, darkGray },
    },
  }) => ({
    position: 'relative',
    transition: '0.3s all ease',
    '& .MuiBox-root .btn.MuiButtonBase-root.MuiButton-root': {
      transition: '0.3s all ease',
      borderBottom: `2px solid ${white?.main}`,
      color: darkGray.main,
      margin: '0 10px',
    },

    '& .MuiBox-root .btn:hover': {
      color: primary?.main,
    },
    '.btn.MuiButtonBase-root.MuiButton-root.active': {
      fontWeight: 'bold',
      borderBottomColor: primary?.main,
      borderRadius: '0',
    },
  })
);
