import React from 'react';
import { Container, Grid } from '@mui/material';
import { MissionHeading, StyledBox, MissionDesc, ImagesBox, TeamBox, TeamCards, SubHeading } from './styles';
import Img1 from '../../assets/images/about1.jpg';
import Img2 from '../../assets/images/about2.jpg';
import Img3 from '../../assets/images/about3.jpg';
import TeamCard from '../teamCard';
import FounderImg1 from '../../assets/images/cofounder-1.jpg';
import FounderImg2 from '../../assets/images/cofounder-2.jpg';
import FounderImg3 from '../../assets/images/cofounder-3.jpg';
import { Section } from '../common';

const Mission = () => {
  const users = [
    {
      name: 'Grremm',
      role: 'CEO',
      abbreviation: '(Co-founder)',
      img: FounderImg1,
      userDetails:
        'A co-founder of a software company is typically an individual who played a key role in founding the company alongside one or more other individuals. As a co-founder, this person would have been involved in the ideation.',
    },
    {
      name: 'John Win',
      role: 'CTO ',
      abbreviation: '(Cheif Technology Officer)',
      img: FounderImg2,
      userDetails:
        'Overall, co-founders of software companies are typically highly motivated, entrepreneurial individuals who are passionate about technology and have a vision for creating innovative products or services.',
    },
    {
      name: 'Robbin',
      role: 'CFO ',
      abbreviation: '(Cheif Finance Officer)',
      img: FounderImg3,
      userDetails:
        'software companies are often responsible for setting the companys culture and values. They may work closely with other team members to develop a mission and vision for the company and ensure that everyone is working towards a shared set of goals.',
    },
  ];
  return (
    <StyledBox>
      <Section>
        <Container>
          <Grid container spacing={[4]}>
            <Grid item xs={12} sm={12} md={6}>
              <MissionHeading>Our Mission is Clear</MissionHeading>
              <SubHeading>What you known about our company?</SubHeading>
              <MissionDesc>
                We’re a team of dedicated, perceptive experts in the field of finances and accounting and we use cloud
                technology to automate your accounting, streamline your bookkeeping, and help your business grow.
              </MissionDesc>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Container>
        <ImagesBox>
          <img src={Img1} alt="img1" className="anime-2" />
          <div className="absolatedImage">
            <img src={Img2} alt="img2" className="anime-1" />
            <img src={Img3} alt="img3" className="anime-3" />
          </div>
        </ImagesBox>
      </Container>
      <Section>
        <Container>
          <TeamBox>
            <MissionHeading>Meet the Co-Founders</MissionHeading>
            <SubHeading>We are here for you</SubHeading>
          </TeamBox>
          <TeamCards>
            <Grid container spacing={2}>
              {users.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={`user-${index}`}>
                  <TeamCard
                    userImg={item.img}
                    userName={item.name}
                    userRole={item.role}
                    userDetails={item.userDetails}
                    abbreviation={item.abbreviation}
                  />
                </Grid>
              ))}
            </Grid>
          </TeamCards>
        </Container>
      </Section>
    </StyledBox>
  );
};

export default Mission;
