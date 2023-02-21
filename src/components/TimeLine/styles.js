import { Box } from '@mui/material';
import { styled } from '@mui/styles';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';

export const StyledTimeLine = styled(Box)({
  marginTop: '2rem',
});

// Title
export const Title = styled('h6')({
  fontSize: '24px',
  margin: '0px',
  fontWeight: '600',
  letterSpacing: '1.4px',
});

// StyledContent
export const StyledContent = styled(TimelineContent)({
  paddingTop: '0px',
});
// Name
export const Name = styled('h6')({
  fontSize: '18px',
  margin: '0px',
  fontWeight: '500',
  paddingBottom: '5px',
});

// Content
export const Content = styled('p')({
  margin: '0px',
  padding: ' 0px',
  fontWeight: '400',
  fontSize: '16px',
  letterSpacing: '1px',
});

// Time line Separator
export const StyledSeparator = styled(TimelineSeparator)({
  '& .MuiTimelineDot-root': {
    boxShadow: 'none',
  },
});

// Date
export const Date = styled('p')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    margin: '0',
    padding: '10px 0',
    color: primary?.main,
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '1px',
  })
);
