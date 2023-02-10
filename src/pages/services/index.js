import React from 'react';
import { Container, Grid } from '@mui/material';
import Ideate from '../../assets/images/ideate.png';
import Design from '../../assets/images/design.png';
import Web from '../../assets/images/web.png';
import App from '../../assets/images/app.png';
import Business from '../../assets/images/business.png';
import Marketing from '../../assets/images/marketing.png';
import { useNavigate } from 'react-router-dom';
import { MainBox, ServicesBox, GuidBox, GuidContent, CardsBox } from './styles';
import ServicesCard from '../../components/ServicesCard';
import Viewed from '../../components/viewItems';
import MainSection from '../../components/Layout';
import { MainWrapper } from '../../components/common';
import ContactBanner from '../../components/ContactBanner';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: 'Ideate',
      img: Ideate,
      serviceDetails: 'We help you develop creative ideas so that your business can grow more rapidly',
    },
    {
      name: 'Design',
      img: Design,
      active: true,
      serviceDetails: 'We provide services with the best designs than our designer team for your business',
    },
    {
      name: 'Web Development',
      img: Web,
      serviceDetails: 'We help develop company websites to be more professional and attractive',
    },
    {
      name: 'App Development',
      img: App,
      serviceDetails: 'We help develop company mobile apps to be more professional and attractive',
    },
    {
      name: 'Business Growth',
      img: Business,
      active: true,
      serviceDetails: 'We also provide services by providing input for your business growth',
    },
    {
      name: 'Degital Marketing',
      img: Marketing,
      serviceDetails: 'We also help you market your products through an online marketplace',
    },
    {
      name: 'Degital Marketing',
      img: Marketing,
      serviceDetails: 'We also help you market your products through an online marketplace',
    },
  ];
  const onClickContact = () => {
    navigate('/contact');
  };
  return (
    <MainBox>
      <MainSection />
      <Container>
        <ServicesBox>
          <CardsBox>
            <Grid container spacing={[3]}>
              {services.map((item, key) => (
                <Grid item xs={12} sm={6} md={4} key={`service-${key}`}>
                  <ServicesCard
                    serviceImg={item.img}
                    serviceName={item.name}
                    serviceDetails={item.serviceDetails}
                    active={item.active}
                  />
                </Grid>
              ))}
            </Grid>
          </CardsBox>
          <MainWrapper>
            <Grid container spacing={[1]}>
              <Grid item xs={12} sm={6} md={6}>
                <GuidBox>
                  <GuidContent>
                    <h3>Forensics</h3>
                    <p>
                      Assisting clients in achieving the highest levels of business integrity through the prevention,
                      detection, and investigation of fraud and misconduct.
                    </p>
                  </GuidContent>
                </GuidBox>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Viewed />
              </Grid>
            </Grid>
          </MainWrapper>
        </ServicesBox>
      </Container>
      <ContactBanner onClick={onClickContact} />
    </MainBox>
  );
};

export default Services;
