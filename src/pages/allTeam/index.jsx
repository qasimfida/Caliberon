import { Container } from '@mui/system';
import React, { useState } from 'react';
import MainSection from '../../components/Layout';
import { DepartmentHeading, Filters, Item, LoadMoreBtn, SearchWrapper, TitleBar, ViewAll } from './styles';
import ProfileCard from '../../components/ProfileCard';
import { Grid } from '@mui/material';
import { teamMembers } from './data';
import Section from '../../components/Section/index';
import Dropdown from '../../components/Dropdown';
import SearchBar from '../../components/SearchBar';
import Sort from '../../components/Sort';
import Button from '../../components/Button';

const AllTeams = ({ ...rest }) => {
  const [noOfElement, setnoOfElement] = useState(9);
  const slice = teamMembers[0].data.slice(0, noOfElement);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  return (
    <>
      <MainSection />
      <Section {...rest}>
        <Container>
          <Filters container>
            <SearchWrapper container item sm={12} md={9.8}>
              <Grid item md={3}>
                <Dropdown />
              </Grid>
              <Grid item md={9}>
                <SearchBar />
              </Grid>
            </SearchWrapper>
            <Grid item sm={12} md={2}>
              <Sort />
            </Grid>
          </Filters>
          <TitleBar>
            <DepartmentHeading>Bookeeping & Accounts</DepartmentHeading>
            <ViewAll>Result: 3</ViewAll>
          </TitleBar>
          <Section spacing={2}>
            <Grid container spacing={[4]}>
              {slice.map((item, key) => (
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
          <LoadMoreBtn>
            <Button variant="outlined" color="black" size="lg" onClick={() => loadMore()}>
              Load More
            </Button>
          </LoadMoreBtn>
        </Container>
      </Section>
    </>
  );
};

export default AllTeams;
