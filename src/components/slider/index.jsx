import React from 'react';
import Slider from 'react-slick';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const Carousel = ({ children, slidesToShow, slidesToScroll, ...rest }) => {
  let settings = {
    arrows: true,
    accessibility: true,
    infinite: true,
    speed: 1000,
    fade: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: parseInt(`${slidesToShow}`),
    slidesToScroll: slidesToScroll,
    autoplay: true,
    nextArrow: <ArrowForwardIosRoundedIcon color="secondary" fontSize='small' />,
    prevArrow: <ArrowBackIosRoundedIcon color="secondary" fontSize='small' />,
    ...rest,
  };
  return <Slider {...settings}>{children}</Slider>;
};


export default Carousel;
