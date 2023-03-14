import { useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import Control, { DefaultValue, Item } from './styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const Dropdown = ({ ...rest }) => {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Control {...rest}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        IconComponent={ExpandMoreTwoToneIcon}
        sx={{ color: '#fff' }}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
        }}
      >
        <MenuItem value="">
          <DefaultValue>All</DefaultValue>
        </MenuItem>
        <MenuItem value={10}>
          <Item>Bookeeping & Accounts</Item>
        </MenuItem>
        <MenuItem value={20}>
          <Item>Twenty</Item>
        </MenuItem>
        <MenuItem value={30}>
          <Item>Amazon FBA & Digital Marketing</Item>
        </MenuItem>
      </Select>
    </Control>
  );
};

export default Dropdown;
