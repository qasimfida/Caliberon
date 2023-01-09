import Carousel from '../../components/slider';
import { useNavigate } from 'react-router-dom';
import Contact from '../../components/contactForm';
import ProfileCard from '../../components/profileCard';

import ServicesCard from '../../components/servicesCard';
import TestimonialsCard from '../../components/testimonialsCard';
import { Container, Grid } from '@mui/material';
import { services, testimonialsData, users, sponsors } from './data';
import { Section, Heading, Discription, MainWrapper } from '../../components/common';
import Button from '../../components/button';

import { SeeMore, Item, SponsorsWrapper } from './styles';

const HomePage = () => {
  const navigate = useNavigate();

  const ClickServices = () => {
    navigate('/services');
  };
  return (
    <div>
      <Carousel />
      <Section>
        <Container>
          <Heading>Our Services</Heading>
          <Discription align="center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Discription>
          <MainWrapper>
            <Grid container spacing={[3]}>
              {services.map((item, key) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
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
          <Discription color="primary" align="center">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Zahid
          </Discription>
          <MainWrapper>
            <Grid container spacing={[4]}>
              {users.map((item, key) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <Item>
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
          <Discription align="center">Some testimonials from our customers</Discription>
          <MainWrapper>
            <Grid container spacing={[8]}>
              {testimonialsData.map((item, key) => (
                <Grid item xs={12} sm={6} md={4} key={key}>
                  <TestimonialsCard name={item.name} comment={item.comment} />
                </Grid>
              ))}
            </Grid>
          </MainWrapper>
        </Container>
      </Section>
      <Container>
        <Heading>Sponsors</Heading>
        <SponsorsWrapper>
          {sponsors.map((item, key) => (
            <img src={item.img} alt="" />
          ))}
        </SponsorsWrapper>
      </Container>
      <Contact />
    </div>
  );
};

export default HomePage;
