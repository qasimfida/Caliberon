import { Box } from '@mui/material';
import React from 'react';
import { Heading } from './styles';

const FooterItem = ({ title, menuLinks, children }) => {
  return (
    <Box>
      <Box>
        <Heading>{title}</Heading>
        <Box>{menuLinks}</Box>
      </Box>
      {children}
    </Box>
  );
};

export default FooterItem;
