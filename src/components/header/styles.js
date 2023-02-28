import styled from '@emotion/styled';
import { Toolbar, AppBar } from '@mui/material';
import { Box } from '@mui/system';
import Button from '../Button';

export const Navbar = styled(AppBar)(({ transparent }) => ({
  height: '80px',
  boxSizing: 'border-box',
  justifyContent: 'center',
  padding: '0',
  boxShadow: transparent ? 'none' : ` rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,
  transition: ' .5s ease',
  background: transparent ? 'transparent' : '#fff',
  zIndex: '999',
  '.nav-links button': {
    color: transparent ? '#fff' : 'black',
    transition: '.4s ease-in-out',
  },
  '.h-100': {
    height: '100%',
    boxSizing: 'border-box',
  },
}));

export const LinksWrapper = styled(Box)({
  flexGrow: 1,
  justifyContent: 'flex-end',
  display: 'flex',
});
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  & img {
    height: 55px;
  }
`;

export const ContactUs = styled(Button)({
  marginLeft: '20px',
  transition: '.5s ease',
});
export const ToolbarBox = styled(Toolbar)(
  ({
    theme: {
      palette: { primary },
    },
    transparent,
  }) => ({
    position: 'relative',
    '& .MuiBox-root .btn.MuiButtonBase-root.MuiButton-root': {
      margin: '0 10px',
    },

    '& .btn:hover': {
      color: primary?.main,
    },
    '.btn.MuiButtonBase-root.MuiButton-root': {
      transition: 'all .2s ease',
      borderBottom: '2px solid transparent',
      borderRadius: ' 0',
      fontSize: ' 12px',
      padding: '10px',
    },
    '.btn.MuiButtonBase-root.MuiButton-root.active': {
      borderBottom: transparent ? '2px solid transparent' : `2px solid ${primary.main}`,
      color: primary?.main,
      borderRadius: '0',
      fontSize: ' 14px',
    },
  })
);
