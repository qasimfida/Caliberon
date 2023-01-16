
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import React from 'react'
import StyledTimeLine from "./styles"
const TimeLineComponent = ({ title, date, name, content }) => {
  return (
    <StyledTimeLine>
      <Timeline>
        <TimelineItem>
          <TimelineContent>hello</TimelineContent>
        </TimelineItem>
      </Timeline>
    </StyledTimeLine>
  )
}

export default TimeLineComponent