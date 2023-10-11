import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Fab, Fade } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from './pages/footer';
import '@fontsource/poppins';
import HomePage from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import PersonalProfile from './pages/personalProfile';
import Services from './pages/services';
import ServicePage from './pages/servicePage';
import AllTeams from './pages/allTeam';
import TeamPage from './pages/teamPage';
import SingleBlog from './pages/singleBlog';
import useOnScroll from './customHooks/useOnScroll';

function ScrollTop(props) {
  const { children, handleClick, trigger } = props;
  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 46 }}>
        {children}
      </Box>
    </Fade>
  );
}
function App(props) {
  const [state, setState] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setState(!state);
  };

  // icon scroll top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location, state]);

  const scrollPosition = useOnScroll();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/home/contact/:name" element={<PersonalProfile />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/services/:name" element={<ServicePage />}></Route>
        <Route path="/team" element={<AllTeams />} />
        <Route path="/team/:name" element={<TeamPage />}></Route>
        <Route path="/blogs/:name" element={<SingleBlog />}></Route>
      </Routes>
      <ScrollTop trigger={scrollPosition > 700} handleClick={handleClick}>
        <Fab className="styled-fab" variant="outlined" color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer />
    </div>
  );
}

export default App;
