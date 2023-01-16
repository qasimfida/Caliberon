import React from 'react';

import { Typography } from '@mui/material';
import StyledProgress from './styles';
import { Label, Progress, ProgressWrap } from './styles';

const ProgresBar = ({ label, percentage, size, thickness }) => {
  return (
    <StyledProgress>
      <ProgressWrap>
        <Progress variant="determinate" value={percentage} size={size} thickness={thickness} />
        <Typography component="span">{`${percentage}%`}</Typography>
      </ProgressWrap>
      <Label>{label}</Label>
    </StyledProgress>
  );
};

export default ProgresBar;
