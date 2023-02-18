import React from 'react';
import Wrapper, { SubscribeButton, Input, Label, News, NewsWrapper, TextWrapper } from './styles';

const NewsLetter = () => {
  return (
    <NewsWrapper>
      <News>
        <TextWrapper>
          <Label>Subscribe to get updates directly.</Label>
        </TextWrapper>
        <Wrapper component="form">
          <Input placeholder="Your Email" />
          <SubscribeButton size="lg" variant="contained" color="black">
            Subscribe
          </SubscribeButton>
        </Wrapper>
      </News>
    </NewsWrapper>
  );
};

export default NewsLetter;
