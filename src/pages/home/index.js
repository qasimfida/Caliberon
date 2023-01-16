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
import { SeeMore, Item, SponsorsWrapper } from './styles';

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
  };
  const sliderData = [
    {
      title: "You're ready. So are we.",
      imgLink:
        'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: "You're ready. So are we.",
      imgLink:
        'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
  ];
  return (
    <div>
      <Carousel slidesToShow={1} arrows={false} slidesToScroll={1}>
        {sliderData.length && sliderData.map((item, index) => <Banner key={index} item={item} />)}
      </Carousel>
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
