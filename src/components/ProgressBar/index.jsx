import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import ProgressBarStyled from './styles'
import { NameProgressBar , Progress } from './styles'

const ProgresBar = ({ progressBarName, progressBarPercent }) => {
  return (
    <ProgressBarStyled>
      <Progress
        variant="determinate"
        value={progressBarPercent}
        size={140}
        thickness={5}
      />
      <Box>
        <Typography variant="caption" component="div">
          {`${progressBarPercent}%`}
        </Typography>
      </Box>
      <NameProgressBar>{progressBarName}</NameProgressBar>
    </ProgressBarStyled>
  )
}

export default ProgresBar
