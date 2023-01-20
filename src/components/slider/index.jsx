import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ children, slidesToShow, slidesToScroll, ...rest }) => {
  let settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: parseInt(`${slidesToShow}`),
    slidesToScroll: slidesToScroll,
    autoplay: true,
    arrows: true,
    dots: true,
     ...rest,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
