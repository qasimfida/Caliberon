import React from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BannerMainWrapper, StyledTypo, ButtonWrapper, SlideContent, BannerWrapper, SocialIcons, IconCircle } from './styles';
import Button from '../../components/button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Banner = ({ key, item }) => {
  const navigate = useNavigate();
  let backgroundImg = {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${item.imgLink})`,
    background: "linear-gradient(rgba(0,0,0,0,0.6),rgba(0,0,0,0,0.3))",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',

  };
  const onClickAboutus = () => {
    navigate('/about');
  };
  const onClickServices = () => {
    navigate('/services');
  };
  return (
    <BannerMainWrapper style={backgroundImg} key={`slide-${key}`}>
      <Container>
        <BannerWrapper>
          <StyledTypo variant="h5">
            {item.title}
          </StyledTypo>
          <SlideContent>
            <Typography variant='body1'> {item.slideContent}</Typography>
          </SlideContent>
          <ButtonWrapper>
            <Button variant="contained" sx={{ mr: 10 }} onClick={onClickServices}>
              Explore More!
            </Button>
            <Button variant="outlined" onClick={onClickAboutus}>
              About Us
            </Button>
          </ButtonWrapper>
        </BannerWrapper>
        <SocialIcons>
          <IconCircle >
            <FacebookRoundedIcon fontSize='small' />
          </IconCircle>
          <IconCircle >
            <TwitterIcon fontSize='small' />
          </IconCircle>
          <IconCircle >
            <InstagramIcon fontSize='small' />
          </IconCircle>
          <IconCircle >
            <LocationOnOutlinedIcon fontSize='small' />
          </IconCircle>
        </SocialIcons>
      </Container>
    </BannerMainWrapper>
  );
};

export default Banner;
