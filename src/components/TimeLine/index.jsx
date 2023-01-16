
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import React from 'react'
import StyledTimeLine, { Content, Name, Title, Date } from "./styles"
import { TimelineConnector, TimelineDot } from '@mui/lab';
const TimeLineComponent = () => {

  const timeLineData = [
    {
      title: "Experience",
      date: "2013 - Present",
      name: "Art Director - Facebook Inc.",
      content: "Collaborate with creative and development teams on the execution of ideas.",
      id: "1",
    },
    {
      title: "Education",
      date: "2012 - Past",
      name: "Art Director - Facebook Inc.",
      content: "Collaborate with creative and development teams on the execution of ideas.",
      id: "2",
    },
    {
      title: "Studies",
      date: "2011 - Past",
      name: "Art Director - Facebook Inc.",
      content: "Collaborate with creative and development teams on the execution of ideas.",
      id: "3",
    },
  ]

  return (
    <StyledTimeLine>
      <Timeline position="alternate">
          {timeLineData.map((item, id)=>(  
        <TimelineItem key={id}>
          <TimelineSeparator>
            <TimelineDot color="warning" />
            <TimelineConnector />
          </TimelineSeparator>
            <TimelineContent>
            <Title>{item.title}</Title>
            <Date>{item.date}</Date>
            <Name>{item.name}</Name>
            <Content>{item.content}</Content>
          </TimelineContent>
        </TimelineItem>
        ))}
      </Timeline>
    </StyledTimeLine>
  )
}

export default TimeLineComponent