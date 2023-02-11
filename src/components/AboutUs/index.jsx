import { Grid } from '@mui/material';
import React from 'react';
import Wrapper, { ImageWrapper, Img1, Img2, Img3, Details, Title, Paragraph } from './styles';
import { Box } from '@mui/system';
import GitLab from '../Svgs/GitLab';
import BookOpen from '../Svgs/BookOpen';
import { Hexagon } from '../Svgs/Hexagon';
import Achivement from '../Achivement';

const AboutUs = ({ img1, img2, img3, title, details, ...rest }) => {
  const achivementData = [
    {
      icon: Hexagon,
      totall: '920',
      category: 'Book-Keeping',
      id: '1',
    },
    {
      icon: GitLab,
      totall: '240',
      category: 'Frontend',
      id: '2',
    },
    {
      icon: BookOpen,
      totall: '500',
      category: 'Marketing',
      id: '3',
    },
    {
      icon: Hexagon,
      totall: '1000+',
      category: 'Web-Flow',
      id: '4',
    },
  ];
  return (
    <Wrapper>
      <Grid container spacing={4} {...rest}>
        <Grid item md={5} sm={8} xs={12}>
          <ImageWrapper>
            <Img1>
              <img src={img1} alt="About A" />
            </Img1>
            <Img2>
              <img src={img2} alt="About B" />
            </Img2>
            <Img3>
              <img src={img3} alt="About C" />
            </Img3>
          </ImageWrapper>
        </Grid>
        <Grid item md={7}>
          <Details>
            <Title>{title}</Title>
            <Paragraph>
              anibh.WeareAVO We create award winning websites,remarkable brand and cutting edge apps.Null am imperdiet.
            </Paragraph>
            <Paragraph>{details}</Paragraph>
            <Box display="flex">
              {achivementData.map((item, id) => (
                <Achivement key={id} img={item.icon} totall={item.totall} category={item.category} />
              ))}
            </Box>
          </Details>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AboutUs;
