import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import StyledProgressBar from './styles'
import { NameProgressBar , ProgressLabel } from './styles'

const ProgresBar = ({ Labelinstead, percentage,size,thickness }) => {
  return (
    <StyledProgressBar elevation={0}>
      <ProgressLabel
        variant="determinate"
        value={percentage}
        size={size}
        thickness={thickness}
      />
      <Box>
        <Typography variant="caption" component="div">
          {`${percentage}%`}
        </Typography>
      </Box>
      <NameProgressBar>{Labelinstead}</NameProgressBar>
    </StyledProgressBar>
  )
}

export default ProgresBar
