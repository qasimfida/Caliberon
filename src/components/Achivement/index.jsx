import React from 'react';
import Wrapper, { AchievementTotall, SubTitle } from './styles';

const Achivement = ({ img: Airplay, title, category, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Airplay />
      <AchievementTotall>{title}</AchievementTotall>
      <SubTitle>{category}</SubTitle>
    </Wrapper>
  );
};

export default Achivement;
