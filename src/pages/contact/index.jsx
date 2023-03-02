import React from 'react';
import MainSection from '../../components/Layout';
import ContactForm from '../../components/contactForm';
import { MapSection } from './styles';

const Contact = () => {
  return (
    <>
      <MainSection />
      <ContactForm />
      <MapSection>
        <iframe
          title="location"
          className="gmap_iframe"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Calibreon International, Caliberon INternational, Gilgit&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </MapSection>
    </>
  );
};

export default Contact;
