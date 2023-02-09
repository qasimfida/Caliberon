import React, { useEffect } from 'react';
import { MenuItem, Menu, Box, IconButton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '../Button';
import { Navbar, LogoWrapper, ToolbarBox, LinksWrapper } from './styles';
import logoDark from './../../assets/images/logo-main.png';
import logoLight from './../../assets/images/logo-light.png';
import useOnScroll from '../../customHooks/useOnScroll';
const pages = [
  { title: 'Home', path: '/', id: 'home' },
  { title: 'About Us', path: '/about', id: 'about' },
  { title: 'Our Services', path: '/services', id: 'service' },
  { title: 'Team', path: '/team', id: 'team' },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [active, setActive] = React.useState('/');

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const toggleNav = (event) => {
    setAnchorElNav(event?.currentTarget);
  };

  const onClickLink = (e) => {
    toggleNav(null);
    navigate(e);
  };
  const onClickContact = () => {
    navigate('/contact');
  };
  const scrollPosition = useOnScroll();
  let hasAffix = scrollPosition < 100;
  return (
    <Navbar id="header" transparent={hasAffix}>
      <Container className="h-100">
        <ToolbarBox className="h-100" transparent={hasAffix}>
          <LogoWrapper>
            {hasAffix ? <img src={logoLight} alt="white logo " /> : <img src={logoDark} alt="black logo" />}
          </LogoWrapper>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', color: '#f54c0a' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleNav}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => toggleNav()}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((item) => (
                <MenuItem key={`page-${item.path}`} onClick={() => onClickLink(item.path)}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LinksWrapper
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
            className="nav-links h-100"
          >
            {pages.map((item) => (
              <Button
                key={`page-${item.path}`}
                variant="text"
                onClick={() => onClickLink(item.path)}
                className={`btn h-100 ${item.path === active ? 'active' : 'nav-buttons'}`}
                id={item.id}
              >
                {item.title}
              </Button>
            ))}
          </LinksWrapper>
          <Button size="lg" variant="contained" onClick={onClickContact}>
            Contact Us
          </Button>
        </ToolbarBox>
      </Container>
    </Navbar>
  );
};
export default Header;
