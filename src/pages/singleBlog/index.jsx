import { Container } from '@mui/system';
import React, { useState } from 'react';
import { Grid, IconButton, Menu, MenuItem } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import BlogImgA from '../../assets/images/educational-a.png';
import BlogImgB from '../../assets/images/educational-b.png';
import ChipWrapper, {
  UserName,
  StyledChip,
  PostDate,
  UserProfile,
  StyledContainer,
  MenuWrapper,
  UserWrapper,
  MainTitle,
  UserDetail,
  ContentTitle,
  Content,
  ContentWrapper,
  ImageWrapper,
  AllContentWrapper,
  StyledGrid,
} from './styled';
import userProfile from '../../assets/images/all-team-user2.jpg';

const SingleBlog = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <ChipWrapper>
        <Container>
          <StyledChip label="Educational" color="primary" />
          <MainTitle>The Education System</MainTitle>
        </Container>
      </ChipWrapper>
      <StyledContainer>
        <Grid container>
          <Grid item xs={10} md={10}>
            <UserWrapper>
              <UserProfile>
                <img src={userProfile} alt="profile" />
              </UserProfile>
              <UserDetail>
                <UserName>Mike</UserName>
                <PostDate>22-3-2023</PostDate>
              </UserDetail>
            </UserWrapper>
          </Grid>
          <StyledGrid item xs={2} md={2}>
            <MenuWrapper>
              <IconButton onClick={handleClick} className="icon-button">
                <MoreHoriz />
              </IconButton>
              <Menu disableScrollLock={true} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Share</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>
            </MenuWrapper>
          </StyledGrid>
        </Grid>
      </StyledContainer>
      <Container>
        <AllContentWrapper>
          <ContentWrapper>
            <ContentTitle>The Importance of Education</ContentTitle>
            <Content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti perspiciatis asperiores consequuntur
              enim ab rem fugit aperiam impedit, repudiandae quidem placeat! Unde temporibus, harum sit repellat officia
              molestiae ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti perspiciatis
              asperiores consequuntur enim ab rem fugit aperiam impedit, <br /> <br /> repudiandae quidem placeat! Unde
              temporibus, harum sit repellat officia molestiae ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ad deleniti perspiciatis asperiores consequuntur enim ab rem fugit aperiam impedit, repudiandae
              quidem placeat! Unde temporibus, harum sit repellat officia molestiae ipsum.
              <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti perspiciatis asperiores
              consequuntur enim ab rem fugit aperiam impedit, repudiandae quidem placeat! Unde temporibus, harum sit
              repellat officia molestiae ipsum.
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <ContentTitle>Challenges in Education</ContentTitle>
            <ImageWrapper>
              <img src={BlogImgA} alt="education-Banner" />
            </ImageWrapper>
            <Content>
              While education is crucial for personal and societal development, it also faces numerous challenges. One
              major challenge is the lack of access to education for many individuals, particularly those in developing
              countries and marginalized communities. Limited resources, including inadequate funding and a shortage of
              trained teachers, often contribute to poor quality education, which can perpetuate poverty and inequality.
              Another challenge is the rapidly changing job market, which demands new skills and competencies. Many
              traditional education systems struggle to keep up with these changes, leaving graduates ill-equipped for
              the job market.
              <br /> In addition, technology has disrupted traditional education, providing new opportunities but also
              presenting challenges such as online safety and the digital divide. Finally, the COVID-19 pandemic has
              exacerbated many of these challenges, highlighting the importance of resilient and adaptable education
              systems. Addressing these challenges requires a collaborative effort between governments, educators, and
              communities to ensure that education is accessible, relevant, and of high quality for all individuals. By
              doing so, we can overcome these challenges and equip individuals with the skills and knowledge needed to
              succeed in an ever-changing world.
            </Content>
          </ContentWrapper>
          <ContentWrapper>
            <ContentTitle>Lifelong Learning</ContentTitle>
            <ImageWrapper>
              <img src={BlogImgB} alt="education-Banner" />
            </ImageWrapper>
            <Content>
              Education is not limited to formal schooling but is a lifelong process of acquiring knowledge and skills.
              Lifelong learning is essential for personal growth, career development, and adapting to changing
              circumstances. As the world becomes more complex and dynamic, individuals must be able to continuously
              learn and adapt to new challenges. Lifelong learning can take many forms, including on-the-job training,
              self-directed learning, and community-based learning. It can also involve pursuing hobbies or personal
              interests, which can lead to new skills and knowledge. In addition, lifelong learning has numerous
              benefits, including improved cognitive function, better job opportunities, and enhanced personal
              fulfillment. While education systems can provide a foundation for lifelong learning, individuals must take
              ownership of their learning and seek out opportunities to learn and grow throughout their lives. By
              embracing lifelong learning, individuals can realize their full potential and contribute to a better
              world.
            </Content>
          </ContentWrapper>
        </AllContentWrapper>
      </Container>
    </div>
  );
};

export default SingleBlog;
