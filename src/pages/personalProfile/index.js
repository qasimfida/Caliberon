import React from 'react';
import { Container, Grid, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import {
  UserTitle,
  StyledBox,
  UserContent,
  UserImage,
  UserData,
  AboutDesc,
  UserSocialIcons,
  ProgressBarSubHeading,
  ProgressBarHeading,
  MainBox,
  DescriptionBox,
  CustomizeAccordion,
  ContactDetailsBox,
  ProgressContainer,
  ProgressWrapper,
  TimeLineWrap,
} from './styles';
import { useLocation } from 'react-router-dom';
import { Instagram, LinkedIn, Twitter, Facebook, Phone, Mail } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProgressBar from '../../components/ProgressBar';
import TimeLine from '../../components/TimeLine';

const PersonalProfile = () => {
  const { state } = useLocation();

  const timeLineData = [
    {
      title: "Experience",
      date: "2013 - Present",
      name: "Art Director - Facebook Inc.",
      content: "Collaborate with creative and development teams on the execution of ideas.",
      id: "1",
    },
    {
      title: "Education",
      date: "2012 - Past",
      name: "Art Director - Facebook Inc.",
      content: "Collaborate with creative and development teams on the execution of ideas.",
      id: "2",
    },
    {
      title: "Studies",
      date: "2011 - Past",
      name: "Art Director - Facebook Inc.",
      content: "Collaborate with creative and development teams on the execution of ideas.",
      id: "3",
    },
    {
      title: "Studies",
      date: "2011 - Past",
      name: "Art Director - Facebook Inc.",
      content: "Collaborate with creative and development teams on the execution of ideas.",
      id: "3",
    }

  ]

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
  ];
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
            <Typography>Area of Experties</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.ss
            </Typography>
          </AccordionDetails>
        </CustomizeAccordion>
      </Container>
      <ProgressWrapper>
        <ProgressBarSubHeading>TEAM PROGRESS</ProgressBarSubHeading>
        <ProgressBarHeading>Meet the Co-Founders</ProgressBarHeading>
        <ProgressContainer>
          {progressBarData.map((item, id) => (
            <ProgressBar label={item.name} percentage={item.percentage} key={id} size={140} thickness={5} />
          ))}
        </ProgressContainer>
      </ProgressWrapper>
      <TimeLineWrap>
        <container>
          <Grid container spacing={2}>
            {timeLineData.map((item, id) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TimeLine key={id} title={item.title} date={item.date} name={item.name} content={item.content} />
              </Grid>
            ))}
          </Grid>
        </container>
      </TimeLineWrap>
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
