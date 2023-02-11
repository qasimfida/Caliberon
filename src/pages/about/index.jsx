import React from 'react';
import MainSection from '../../components/Layout';
import Mission from '../../components/Mission';

import { MainBox } from './styles';

const About = () => {
  return (
    <MainBox>
      <MainSection />
      <Mission />
    </MainBox>
  );
};

export default About;
