import React, { useState, useEffect } from 'react';
import { Container, Grid, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import {
  UserTitle,
  StyledBox,
  UserContent,
  UserImage,
  UserData,
  AboutDesc,
  UserSocialIcons,
  MainBox,
  DescriptionBox,
  CustomizeAccordion,
  ContactDetailsBox,
  ProgressContent,
  ProgressWrapper,
  TimeLineWrap,
  AccordionTitle,
  AccordionContent,
} from './styles';
import { useLocation } from 'react-router-dom';
import { Instagram, LinkedIn, Twitter, Facebook, Phone, Mail } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CircularProgress, LinearProgress } from '../../components/ProgressBar';
import TimeLine from '../../components/TimeLine';
import { Heading } from '../../components/common';

const PersonalProfile = () => {
  const { state } = useLocation();
  const [progressValue, setProgressValue] = useState();

  const progressBarData = [
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
      name: 'marketing',
      percentage: 20,
      id: '4',
    },
  ];
  useEffect(() => {
    const sum = progressBarData.reduce((accumulator, object) => {
      return accumulator + object.percentage;
    }, 0);
    const overAllPercentage = sum / progressBarData.length;
    setProgressValue(overAllPercentage);
  }, [progressBarData?.length]);
  return (
    <MainBox>
      <StyledBox>
        <Container>
          <Grid container spacing={[4]} alignItems="center">
            <Grid item xs={12} sm={8} md={8}>
              <UserContent>
                <UserImage src={state.userImg} alt="user" />
                <UserData>
                  <UserTitle>{state.userName}</UserTitle>
                  <AboutDesc color="#ffffff" fontSize="36px">
                    {state.userRole}
                  </AboutDesc>
                </UserData>
              </UserContent>
            </Grid>
            <Grid item xs={12} sm={4} md={4}></Grid>
          </Grid>
        </Container>
      </StyledBox>
      <DescriptionBox>
        <Container>
          <AboutDesc>
            {state.userName} has a diversified experience of over 25 years within and outside profession in Pakistan and
            East Africa. He is a key member of audit and assurance practice of Islamabad and heads the Clients & Market
            and Human Resource functions of Islamabad practice and is the lead engagement partner of key Islamabad audit
            clients.
            <br /> <br /> {state.userName} led team to carry out listing of Exchangeable Bonds of the largest oil & gas
            company in Pakistan at London and Singapore stock exchanges and was a key member of listing the Global
            Depository Shares of the same company at the London stock exchange.
          </AboutDesc>
        </Container>
      </DescriptionBox>

      <Container>
        <CustomizeAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <AccordionTitle>Area of Experties</AccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.ss
            </AccordionContent>
          </AccordionDetails>
        </CustomizeAccordion>
        <CustomizeAccordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <AccordionTitle>Other Skills</AccordionTitle>
          </AccordionSummary>
          <AccordionDetails>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.ss
            </AccordionContent>
          </AccordionDetails>
        </CustomizeAccordion>
      </Container>
      <Container>
        <ProgressWrapper>
          <Heading>Skills</Heading>
          <ProgressContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                <CircularProgress label="Over all percentage" percentage={progressValue} size={200} thickness={5} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={8}>
                {progressBarData.map((item, id) => (
                  <LinearProgress key={id} label={item.name} percentage={item.percentage} thickness={3} />
                ))}
              </Grid>
            </Grid>
          </ProgressContent>
        </ProgressWrapper>
        <TimeLineWrap>
          <TimeLine />
        </TimeLineWrap>
      </Container>
      <ContactDetailsBox>
        <Container>
          <UserSocialIcons>
            <LinkedIn />
            <Phone />
            <Mail />
            <Instagram />
            <Facebook />
            <Twitter />
          </UserSocialIcons>
        </Container>
      </ContactDetailsBox>
    </MainBox>
  );
};

export default PersonalProfile;
