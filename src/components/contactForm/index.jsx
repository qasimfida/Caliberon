import React from 'react';
import { Container, Grid } from '@mui/material';
import {
  ContactWrapper,
  FormWrapper,
  ContactMessage,
  ContactText,
  InputWrapper,
  StyledInput,
  StyledTextArea,
  ButtonWrapper,
  ContactDetails,
  ContactItem,
  IconsWrapper,
} from './styles';
import Button from '../../components/button';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import { Instagram, LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import { Section, Heading, Discription, MainWrapper } from '../../components/common';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const location = useLocation();
  const contactDetails = [
    {
      icon: <LocationOnIcon />,
      info: 'Near Heli Chowk Zulfiqarabad Gilgit',
    },
    {
      icon: <CallIcon />,
      info: '(647) 749-7224',
    },
    {
      icon: <EmailIcon />,
      info: 'contact@calibreoninternational.com',
    },
  ];
  return (
    <Section variant={'primary'}>
      <Container>
        {location.pathname === '/contact' ? null : (
          <>
            <Heading variant="h2" color={'primary'} align="center">
              Get in Touch
            </Heading>
            <Discription color={'primary'} title="subheading" align="center">
              We are here to help you
            </Discription>
          </>
        )}
        <MainWrapper>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <ContactWrapper>
                <Heading color={'primary'} variant="h4">
                  Contact Information
                </Heading>
                <ContactDetails>
                  {contactDetails.map((item) => (
                    <ContactItem key={item.info}>
                      {item.icon}
                      <Discription color={'primary'} title="details">
                        {item.info}
                      </Discription>
                    </ContactItem>
                  ))}
                </ContactDetails>
                <IconsWrapper>
                  <Facebook />
                  <LinkedIn />
                  <Twitter />
                  <Instagram />
                </IconsWrapper>
              </ContactWrapper>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormWrapper>
                <ContactMessage variant="h5">We'd love to hear from you</ContactMessage>
                <ContactText variant="p">
                  Please fill out the form below and we will get in touch with you shortly.
                </ContactText>
                <InputWrapper>
                  <StyledInput placeholder="Name" />
                  <StyledInput placeholder="Email Adress" />
                  <StyledTextArea aria-label="Hello" placeholder="Message" minRows={5} />
                </InputWrapper>
                <ButtonWrapper>
                  <Button variant="contained">
                    Send Message <SendIcon />
                  </Button>
                </ButtonWrapper>
              </FormWrapper>
            </Grid>
          </Grid>
        </MainWrapper>
      </Container>
    </Section>
  );
};

export default ContactForm;
