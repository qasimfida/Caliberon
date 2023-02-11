import React from 'react';
import Wrapper, { AchievementTotall, SubTitle } from './styles';

const Achivement = ({ img: Airplay, totall, category }) => {
  return (
    <Wrapper>
      <Airplay />
      <AchievementTotall>{totall}</AchievementTotall>
      <SubTitle>{category}</SubTitle>
    </Wrapper>
  );
};

export default Achivement;
