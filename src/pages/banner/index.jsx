import React from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  BannerMainWrapper,
  StyledTypo,
  SlideContent,
  BannerWrapper,
  SocialIcons,
  IconBorder,
  WrapperDownIcon,
  ScrollButton,
  Dot,
} from './styles';
// social icons
import Facebook from '../../components/Svgs/Facebook';
import LinkedIn from '../../components/Svgs/Linkedin';
import Twitter from '../../components/Svgs/Twitter';
import Mail from '../../components/Svgs/Mail';

const Banner = ({ key, item }) => {
  const navigate = useNavigate();
  let backgroundImg = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${item.imgLink})`,
    background: 'linear-gradient(rgba(0,0,0,0,0.6),rgba(0,0,0,0,0.3))',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  // scroll down animation
  const handleClick = (event) => {
    event.preventDefault();
    const targetElement = document.querySelector(event.currentTarget.getAttribute('href'));
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <BannerMainWrapper style={backgroundImg} key={`slide-${key}`}>
      <Container>
        <BannerWrapper>
          <StyledTypo variant="h5">{item.title}</StyledTypo>
          <SlideContent>
            <Typography variant="body1"> {item.slideContent}</Typography>
          </SlideContent>
          <WrapperDownIcon>
            <ScrollButton href="#target-element" onClick={handleClick}>
              <Dot></Dot>
            </ScrollButton>
          </WrapperDownIcon>
        </BannerWrapper>
        <SocialIcons>
          <IconBorder>
            <Facebook className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <LinkedIn className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <Twitter className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <Mail className="socialIcon" color="#fff" />
          </IconBorder>
        </SocialIcons>
      </Container>
    </BannerMainWrapper>
  );
};

export default Banner;
