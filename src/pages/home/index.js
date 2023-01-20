import Carousel from '../../components/slider';
import { useNavigate } from 'react-router-dom';
import Contact from '../../components/contactForm';
import ProfileCard from '../../components/profileCard';
import Slider from 'react-slick';
import ServicesCard from '../../components/servicesCard';
import TestimonialsCard from '../../components/testimonialsCard';
import { Container, Grid } from '@mui/material';
import { services, testimonialsData, users, sponsors } from './data';
import { Section, Heading, Description, MainWrapper } from '../../components/common';
import Button from '../../components/button';
import Banner from '../banner';
import BannerNew from "../../assests/Background2.jpg"
import BannerNeww from "../../assests/New-Banner.jpg"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { SeeMore, Item, SponsorsWrapper,CustomizeSlide } from './styles';

const HomePage = () => {
  const navigate = useNavigate();

  const ClickServices = () => {
    navigate('/services');
  };
  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    autoplay: true,
    nextArrow: <ArrowForwardIosRoundedIcon />,
    prevArrow: <ArrowBackIosRoundedIcon />

  };
  const sliderData = [
    {
      title: "Hello Calibreon, You're ready ",
      slideContent:"Tempore corrupti temporibus fuga earum asperiores fugit.Tempore corrupti temporibus.",
      imgLink:BannerNew
       ,
    },
    {
      title: "Bussiness Private Limited Company.",
      slideContent:"Tempore corrupti temporibus fuga earum asperiores fugit.Tempore corrupti temporibus.",
      imgLink:
      BannerNeww,
    },
  ];
  return (
    <div>
      <CustomizeSlide>
        <Carousel slidesToShow={1}  slidesToScroll={1}>
        {sliderData.length && sliderData.map((item, index) => <Banner key={index} item={item} />)}
      </Carousel>
      </CustomizeSlide>
      <Section>
        <Container>
          <Heading>Our Services</Heading>
          <Description align="center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
          <MainWrapper>
            <Grid container spacing={[3]}>
              {services.map((item, key) => (
                <Grid item xs={12} sm={6} md={4} key={`services-${key}`}>
                  <ServicesCard
                    serviceImg={item.img}
                    serviceName={item.name}
                    serviceDetails={item.serviceDetails}
                    active={item.active}
                  />
                </Grid>
              ))}
            </Grid>
            <SeeMore>
              <Button variant="contained" onClick={ClickServices}>
                See more
              </Button>
            </SeeMore>
          </MainWrapper>
        </Container>
      </Section>
      <Section variant="primary">
        <Container>
          <Heading color="primary">Our Team</Heading>
          <Description color="primary" align="center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Zahid
          </Description>
          <MainWrapper>
            <Grid container spacing={[4]}>
              {users.map((item, key) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Item key={`user-${key}`}>
                    <ProfileCard
                      userImg={item.img}
                      userName={item.name}
                      userRole={item.role}
                      userDetails={item.userDetails}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
            <SeeMore>
              <Button variant="outlined" onClick={ClickServices}>
                See more
              </Button>
            </SeeMore>
          </MainWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Testimonials</Heading>
          <Description align="center">Some testimonials from our customers</Description>
          <MainWrapper>
            <Slider {...settings}>
              {testimonialsData.map((item, key) => (
                <div key={`testimonial-${key}`}>
                  <TestimonialsCard name={item.name} comment={item.comment} />
                </div>
              ))}
            </Slider>
          </MainWrapper>
        </Container>
      </Section>
      <Container>
        <Heading>Sponsors</Heading>
        <SponsorsWrapper>
          {sponsors.map((item, key) => (
            <img src={item.img} alt="" key={`sponsors-${key}`} />
          ))}
        </SponsorsWrapper>
      </Container>
      <Contact />
    </div>
  );
};

export default HomePage
