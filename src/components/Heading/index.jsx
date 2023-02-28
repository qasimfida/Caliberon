import React from 'react';
import Wrapper, { MissionHeading, SubHeading } from './styles';

const Heading = ({ title, subTitle, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <MissionHeading>{title}</MissionHeading>
      <SubHeading>{subTitle}</SubHeading>
    </Wrapper>
  );
};

export default Heading;
