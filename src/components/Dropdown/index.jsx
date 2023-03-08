import { useState } from 'react';
import { MenuItem } from '@mui/material';
import Control, { DefaultValue, Item, StyledSelect } from './styles';

const Dropdown = ({ ...rest }) => {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Control {...rest}>
      <StyledSelect value={age} onChange={handleChange} displayEmpty>
        <MenuItem value="">
          <DefaultValue>All</DefaultValue>
        </MenuItem>
        <MenuItem value={10}>
          <Item>Ten</Item>
        </MenuItem>
        <MenuItem value={20}>
          <Item>Twenty</Item>
        </MenuItem>
        <MenuItem value={30}>
          <Item>Thirty</Item>
        </MenuItem>
      </StyledSelect>
    </Control>
  );
};

export default Dropdown;
