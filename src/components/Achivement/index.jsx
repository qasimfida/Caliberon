import React from 'react';
import Wrapper, { AchievementTotall, SubTitle } from './styles';

const Achivement = ({ img: Airplay, title, category, size, ...rest }) => {
  return (
    <Wrapper {...rest} className={size}>
      <Airplay />
      <AchievementTotall>{title}</AchievementTotall>
      <SubTitle>{category}</SubTitle>
    </Wrapper>
  );
};

export default Achivement;
