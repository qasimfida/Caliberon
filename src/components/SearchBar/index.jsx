import React from 'react';
import Wrapper, { Input, SearchWrapper } from './styles';
import Search from '../Svgs/Search';

const SearchBar = () => {
  return (
    <Wrapper component="form">
      <Input placeholder="Search" />
      <SearchWrapper size="lg" variant="outlined">
        <Search />
      </SearchWrapper>
    </Wrapper>
  );
};

export default SearchBar;
