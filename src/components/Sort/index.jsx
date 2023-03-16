import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import Control, { DefaultValue, Item, Wrapper } from './styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import SortIcon from '@mui/icons-material/SortTwoTone';

const Sort = ({ ...rest }) => {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Control {...rest}>
      <Wrapper>
        <SortIcon />
        <Select
          sx={{ color: '#fff' }}
          value={age}
          onChange={handleChange}
          displayEmpty
          IconComponent={ExpandMoreTwoToneIcon}
          MenuProps={{
            disableScrollLock: true,
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          }}
        >
          <MenuItem value="">
            <DefaultValue>Options</DefaultValue>
          </MenuItem>
          <MenuItem value="top">
            <Item>Top</Item>
          </MenuItem>
          <MenuItem value="medium">
            <Item>Medium</Item>
          </MenuItem>
          <MenuItem value="low">
            <Item>Low</Item>
          </MenuItem>
        </Select>
      </Wrapper>
    </Control>
  );
};

export default Sort;
