import React from 'react';
import Button from '../Button';
import Wrapper, {
  Img,
  Information,
  TextWrapper,
  By,
  Category,
  Description,
  ButtonWrapper,
  Badge,
  BadgeWrapper,
  Date,
  Month,
  Title,
} from './styles';

const OurBlogs = ({ profile, title, by, category, description, date, month, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Img>
        <img src={profile} alt="Blog-A" />
      </Img>
      <TextWrapper>
        <Information>
          <By>{by}</By>
          <Category>{category}</Category>
        </Information>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BadgeWrapper>
          <Badge>
            <Date>{date}</Date>
            <Month>{month}</Month>
          </Badge>
        </BadgeWrapper>
      </TextWrapper>
      <ButtonWrapper to={`/blogs/${title.toLowerCase().split(' ').join('-')}`}>
        <Button>Read More</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default OurBlogs;
