import React from 'react';
import MainSection from '../../components/Layout';
import Mission from '../../components/Mission';
import Contact from '../contact';

import { MainBox } from './styles';

const About = () => {
  return (
    <MainBox>
      <MainSection />
      <Mission />
      {/* <Contact /> */}
    </MainBox>
  );
};

export default About;
