import { Container } from '@mui/system';
import React from 'react';
import Button from '../Button';
import { AboutDesc, AboutHeading, ContactDetailsBox, Details } from './styles';

const ContactBanner = ({ ...rest }) => {
  return (
    <ContactDetailsBox {...rest}>
      <Container>
        <Details>
          <AboutDesc variant="span">Are you Ready to </AboutDesc>
          <AboutHeading variant="h3">Start with us</AboutHeading>
          <Button variant="outlined">Contact Us</Button>
        </Details>
      </Container>
    </ContactDetailsBox>
  );
};

export default ContactBanner;
