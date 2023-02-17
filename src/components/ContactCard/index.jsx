import { Grid } from '@mui/material';
import React from 'react';
import Facebook from '../Svgs/Facebook';
import Linkedin from '../Svgs/Linkedin';
import Twitter from '../Svgs/Twitter';
import Wrapper, {
  BoderRadius,
  Contact,
  ContactGmail,
  ContactNumber,
  ContactTitle,
  ContactUs,
  Location,
  LocationDetails,
  LocationTitle,
  Social,
  SocialIcon,
  SocialTitle,
} from './styles';

const ContactCard = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={9}>
          <Contact>
            <ContactTitle>Meet us</ContactTitle>
            <LocationDetails>Near Heli Chowk Zulfiqarabad Gilgit</LocationDetails>
            <ContactGmail>contact@calibreoninternational.com</ContactGmail>
            <ContactNumber>(647) 749-7224</ContactNumber>
          </Contact>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <Social>
            <SocialTitle>Follow Us</SocialTitle>
            <SocialIcon>
              <BoderRadius>
                <Facebook color={'#fff'} height={25} />
              </BoderRadius>
              <BoderRadius>
                <Twitter color={'#fff'} height={25} />
              </BoderRadius>
              <BoderRadius>
                <Linkedin color={'#fff'} height={25} />
              </BoderRadius>
            </SocialIcon>
          </Social>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ContactCard;
