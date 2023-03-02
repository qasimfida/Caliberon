import React from 'react';
import { Container, Grid } from '@mui/material';
import {
  ContactWrapper,
  FormWrapper,
  InputWrapper,
  StyledInput,
  StyledTextArea,
  ContactItem,
  IconsWrapper,
  Title,
  SubTitle,
  Text,
  ContactButton,
  IconBorder,
  StyledSection,
} from './styles';
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from 'react-router-dom';
import Heading from '../MainHeading';
// social icons
import Facebook from '../../components/Svgs/Facebook';
import LinkedIn from '../Svgs/Linkedin';
import Twitter from '../Svgs/Twitter';
import Mail from '../Svgs/Mail';

const ContactForm = () => {
  const location = useLocation();
  const contactDetails = [
    {
      label: 'contact@calibreoninternational.com',
    },
    {
      label: '(647) 749-7224',
    },
  ];
  const visit = [
    {
      label: 'Near Heli Chowk Zulfiqarabad Gilgit',
    },
  ];
  return (
    <StyledSection>
      <Container>
        {location.pathname === '/contact' ? null : (
          <>
            <Heading
              variant="h2"
              color={'primary'}
              align="center"
              subTitle="Get in touch"
              title="contact us."
            ></Heading>
          </>
        )}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormWrapper>
              <Title variant="h4">Get in touch.</Title>
              <InputWrapper>
                <StyledInput placeholder="Name" />
                <StyledInput placeholder="Email Adress" />
                <StyledTextArea aria-label="Hello" placeholder="Message" minRows={5} />
              </InputWrapper>
              <ContactButton variant="outlined" color="black">
                Send Message <SendIcon className="ml-2" fontSize="small" />
              </ContactButton>
            </FormWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactWrapper>
              <Title variant="h4">Contact Info.</Title>
              <SubTitle>Let's talk</SubTitle>
              {contactDetails.map(({ label }, index) => (
                <ContactItem key={`contact-${index}`}>
                  <Text title="details">{label}</Text>
                </ContactItem>
              ))}
              <SubTitle>Meet us</SubTitle>
              {visit.map(({ label }, index) => (
                <ContactItem key={`contact-${index}`}>
                  <Text title="details">{label}</Text>
                </ContactItem>
              ))}
              <IconsWrapper>
                <IconBorder>
                  <Facebook className="social-icon" />
                </IconBorder>
                <IconBorder>
                  <LinkedIn className="social-icon" />
                </IconBorder>
                <IconBorder>
                  <Twitter className="social-icon" />
                </IconBorder>
                <IconBorder>
                  <Mail className="socialIcon" />
                </IconBorder>
              </IconsWrapper>
            </ContactWrapper>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default ContactForm;
