import React, { useState, useEffect, useMemo } from 'react';
import { Container, Grid, AccordionSummary, AccordionDetails } from '@mui/material';
import {
  UserTitle,
  StyledBox,
  UserContent,
  UserImage,
  UserData,
  AboutDesc,
  MainBox,
  DescriptionBox,
  CustomizeAccordion,
  ProgressContent,
  AccordionTitle,
  AccordionContent,
  Heading,
  UserRole,
  MainWrapper,
  AchivementWrapper,
  SocialIcons,
  IconBorder,
  SubHeading,
} from './styles';
import { useLocation } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CircularProgress, LinearProgress } from '../../components/ProgressBar';
import TimeLine from '../../components/TimeLine';
import Achivement from '../../components/Achivement';
import Airplay from '../../components/Svgs/Airplay';
import { Hexagon } from '../../components/Svgs/Hexagon';
import GitLab from '../../components/Svgs/GitLab';
import BookOpen from '../../components/Svgs/BookOpen';
import Section from '../../components/Section';
// feather icons
import FacebookFeather from '../../components/Svgs/Facebook';
import LinkedinFeather from '../../components/Svgs/Linkedin';
import TwitterFeather from '../../components/Svgs/Twitter';
import MailFeather from '../../components/Svgs/Mail';

const PersonalProfile = () => {
  const { state } = useLocation();
  const [progressValue, setProgressValue] = useState();

  const progressBarData = useMemo(
    () => [
      {
        name: 'Wordpress',
        percentage: 80,
        id: '1',
      },
      {
        name: 'Frontend',
        percentage: 50,
        id: '2',
      },
      {
        name: 'UI/UX',
        percentage: 70,
        id: '3',
      },
      {
        name: 'Book Keeping',
        percentage: 100,
        id: '4',
      },
      {
        name: 'Marketing',
        percentage: 20,
        id: '4',
      },
    ],
    []
  );
  useEffect(() => {
    if (progressBarData.length) {
      const sum = progressBarData.reduce((accumulator, object) => {
        return accumulator + object.percentage;
      }, 0);
      const overAllPercentage = sum / progressBarData.length;
      setProgressValue(overAllPercentage);
    }
  }, [progressBarData]);
  const achievementData = [
    {
      icon: Airplay,
      title: '920',
      category: 'Book-Keeping',
      id: '1',
    },
    {
      icon: Hexagon,
      title: '400',
      category: 'Front-End',
      id: '2',
    },
    {
      icon: GitLab,
      title: '1000',
      category: 'UI/UX Designer',
      id: '3',
    },
    {
      icon: BookOpen,
      title: '2000+',
      category: 'Graphic',
      id: '4',
    },
  ];
  return (
    <MainBox>
      <StyledBox>
        <Container>
          <Grid container spacing={[4]} alignItems="center">
            <Grid item xs={12} sm={12} md={8}>
              <UserContent>
                <UserImage src={state.userImg} alt="user" />
                <UserData>
                  <UserTitle>{state.userName}</UserTitle>
                  <UserRole color="#ffffff" fontSize="36px">
                    {state.userRole}
                  </UserRole>
                </UserData>
              </UserContent>
            </Grid>
            <Grid item xs={12} sm={12} md={4}></Grid>
          </Grid>
        </Container>
        <SocialIcons>
          <IconBorder>
            <FacebookFeather className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <LinkedinFeather className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <TwitterFeather className="social-icon" color="#fff" />
          </IconBorder>
          <IconBorder>
            <MailFeather className="socialIcon" color="#fff" />
          </IconBorder>
        </SocialIcons>
      </StyledBox>
      <DescriptionBox>
        <Container>
          <AboutDesc>
            <Heading>Intoduction</Heading>
            <SubHeading>What you know about our team ?</SubHeading>
            {state.userName} has a diversified experience of over 25 years within and outside profession in Pakistan and
            East Africa. He is a key member of audit and assurance practice of Islamabad and heads the Clients & Market
            and Human Resource functions of Islamabad practice and is the lead engagement partner of key Islamabad audit
            clients.
            <br /> <br /> led team to carry out listing of Exchangeable Bonds of the largest oil & gas company in
            Pakistan at London and Singapore stock exchanges and was a key member of listing the Global Depository
            Shares of the same company at the London stock exchange.
          </AboutDesc>
        </Container>
      </DescriptionBox>
      <Section>
        <Container>
          <Heading>Skills</Heading>
          <SubHeading>Here our skills display</SubHeading>
          <ProgressContent>
            <Grid container alignItems="center" spacing={8}>
              <Grid item xs={12} sm={12} md={7} lg={6} xl={8}>
                {progressBarData.map((item, id) => (
                  <LinearProgress
                    className={id === 0 ? 'mt-0' : 'mt-5'}
                    key={id}
                    label={item.name}
                    percentage={item.percentage}
                    thickness={3}
                  />
                ))}
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={6} xl={4}>
                <CircularProgress title="Over All Percentage" percentage={progressValue} size={200} thickness={5} />
              </Grid>
            </Grid>
          </ProgressContent>
        </Container>
      </Section>
      <Section variant="very_black">
        <Container>
          <Grid container>
            {achievementData.map((item, id) => (
              <Grid item xs={12} sm={6} md={3}>
                <AchivementWrapper>
                  <Achivement key={id} img={item.icon} title={item.title} category={item.category} size="size" />
                </AchivementWrapper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading>Experience</Heading>
          <SubHeading>If you interested to know more about us </SubHeading>
          <TimeLine />
        </Container>
      </Section>
      <MainWrapper>
        <Container>
          <Heading>More About</Heading>
          <SubHeading>You Must to know about our Team</SubHeading>
          <CustomizeAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <AccordionTitle>Area of Experties</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.ss
              </AccordionContent>
            </AccordionDetails>
          </CustomizeAccordion>
          <CustomizeAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <AccordionTitle>Area of Experties</AccordionTitle>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.ss
              </AccordionContent>
            </AccordionDetails>
          </CustomizeAccordion>
        </Container>
      </MainWrapper>
    </MainBox>
  );
};

export default PersonalProfile;
