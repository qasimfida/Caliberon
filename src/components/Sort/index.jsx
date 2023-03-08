import { MenuItem } from '@mui/material';
import React, { useState } from 'react';
import Control, { DefaultValue, Item, Label, StyledSelect, Wrapper } from './styles';

const Sort = ({ ...rest }) => {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Wrapper {...rest}>
      <Label>Sort by:</Label>
      <Control>
        <StyledSelect value={age} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <DefaultValue>Best Match</DefaultValue>
          </MenuItem>
          <MenuItem value="top">
            <Item>Top</Item>
          </MenuItem>
          <MenuItem value="medium">
            <Item>Medium</Item>
          </MenuItem>
          <MenuItem value="lower">
            <Item>Lower</Item>
          </MenuItem>
        </StyledSelect>
      </Control>
    </Wrapper>
  );
};

export default Sort;
