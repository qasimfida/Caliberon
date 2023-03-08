import { Container } from '@mui/system';
import React from 'react';
import MainSection from '../../components/Layout';
import { DepartmentHeading, Filters, Item, TeamMembersWrapper, ViewAll } from './styles';
import ProfileCard from '../../components/ProfileCard';
import { Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { teamMembers } from './data';
import { useNavigate } from 'react-router-dom';
import Section from '../../components/Section/index';
import Dropdown from '../../components/Dropdown';
import SearchBar from '../../components/SearchBar';
import Sort from '../../components/Sort';

const AllTeams = ({ ...rest }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    let teamTitle = e.title.toLowerCase().split(' ').join('-');
    navigate(`/team/${teamTitle}`, {
      state: {
        teamName: e.title,
        teamData: e.data,
        data: teamMembers,
      },
    });
  };
  return (
    <>
      <MainSection />
      <Section {...rest}>
        <Container>
          <Filters>
            <Dropdown />
            <SearchBar />
            <Sort />
          </Filters>
          {teamMembers.map((items, key) => (
            <div key={`members ${key}`}>
              <TeamMembersWrapper>
                <DepartmentHeading>{items.title}</DepartmentHeading>
                <ViewAll onClick={() => handleClick(items)}>
                  View all <ArrowForwardIcon />
                </ViewAll>
              </TeamMembersWrapper>
              <Section spacing={8}>
                <Grid container spacing={[4]}>
                  {items.data.slice(0, 3).map((item, key) => (
                    <Grid item xs={12} sm={4} md={4} key={`data ${key}`}>
                      <Item>
                        <ProfileCard
                          userImg={item.img}
                          userName={item.name}
                          userRole={item.role}
                          userDetails={item.userDetails}
                        />
                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </Section>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default AllTeams;
