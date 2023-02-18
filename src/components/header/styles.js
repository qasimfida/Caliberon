import styled from '@emotion/styled';
import { Toolbar, AppBar } from '@mui/material';
import { Box } from '@mui/system';
import Button from '../Button';

export const Navbar = styled(AppBar)(({ transparent }) => ({
  height: '80px',
  boxSizing: 'border-box',
  justifyContent: 'center',
  padding: '0',
  boxShadow: 'none',
  transition: ' .5s ease',
  background: transparent ? 'transparent' : '#fff',
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

export const ContactUs = styled(Button)(
  ({
    theme: {
      palette: { primary },
    },
    transparent,
  }) => ({
    // border: transparent ? '1px solid #fff' : `1px solid ${primary?.main}`,
    // color: transparent ? '#fff' : `${primary?.main}`,
    border: transparent ? '1px solid #fff' : `1px solid black`,
    color: transparent ? '#fff' : `black`,
    marginLeft: '20px',
  })
);
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
    '.btn.MuiButtonBase-root.MuiButton-root.active': {
      borderBottom: transparent ? '2px solid transparent' : `2px solid ${primary.main}`,
      color: primary?.main,
      borderRadius: '0',
    },
    '.btn.MuiButtonBase-root.MuiButton-root.nav-buttons': {
      fontWeight: '500',
      fontSize: '12px',
    },
  })
);
