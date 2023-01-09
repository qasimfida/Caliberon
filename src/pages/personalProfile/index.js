import React from 'react'
import {
  Container,
  Grid,
  Box,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
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
  DiscriptionBox,
  CustomizeAccordion,
  ContactDetailsBox,
  ProgressContainer
} from './styles'
import { useLocation } from 'react-router-dom'
import {
  Instagram,
  LinkedIn,
  Twitter,
  Facebook,
  Phone,
  Mail,
} from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CircularProgressWithLabel from '../../components/ProgressBar'

const PersonalProfile = () => {
  const { state } = useLocation()

  const progressBarData = [
    {
      name: 'Wordpress',
      percentage: 90,
      id: '1',
    },
    {
      name: 'Frontend',
      percentage: 50,
      id: '2',
    },
    {
      name: 'UI/UX',
      percentage: 40,
      id: '3',
    },
    {
      name: 'Book Keeping',
      percentage: 100,
      id: '4',
    },
  ]
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
      <DiscriptionBox>
        <Container>
          <AboutDesc>
            {state.userName} has a diversified experience of over 25 years
            within and outside profession in Pakistan and East Africa. He is a
            key member of audit and assurance practice of Islamabad and heads
            the Clients & Market and Human Resource functions of Islamabad
            practice and is the lead engagement partner of key Islamabad audit
            clients.
            <br /> <br /> {state.userName} led team to carry out listing of
            Exchangeable Bonds of the largest oil & gas company in Pakistan at
            London and Singapore stock exchanges and was a key member of listing
            the Global Depository Shares of the same company at the London stock
            exchange.
          </AboutDesc>
        </Container>
        <Box>
          <ProgressBarSubHeading>TEAM PROGRESS</ProgressBarSubHeading>
          <ProgressBarHeading>Meet the Co-Founders</ProgressBarHeading>
          <ProgressContainer elevation={0} >
            {progressBarData.map((item, id) => (
              <CircularProgressWithLabel
              Labelinstead ={item.name}
              percentage ={item.percentage}
                key={id}
                size={140}
                thickness={5}
              />
            ))}
          </ProgressContainer>
        </Box>
      </DiscriptionBox>

      <Container>
        <CustomizeAccordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Area of Experties</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.ss
            </Typography>
          </AccordionDetails>
        </CustomizeAccordion>
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
  )
}

export default PersonalProfile
