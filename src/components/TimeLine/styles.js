import { Box } from '@mui/material';
import { styled } from '@mui/styles';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';

export const StyledTimeLine = styled(Box)({
  height: 'auto',
});

// Title
export const Title = styled('h6')({
  fontSize: '22px',
  margin: '0px',
  marginBottom: '15px',
});

// StyledContent
export const StyledContent = styled(TimelineContent)({
  paddingTop: '0px',
});
// Name
export const Name = styled('h6')({
  fontSize: '14px',
  margin: '0px',
  padding: '8px 0px',
});

// Content
export const Content = styled('h6')({
  fontSize: '14px',
  margin: '0px',
  padding: '8px 0px',
});

// Time line Separator
export const StyledSeparator = styled(TimelineSeparator)(({ theme }) => ({
  '& .MuiTimelineDot-root': {
    boxShadow: theme?.shadows[0],
  },
}));

// Date
export const Date = styled('p')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    color: primary?.main,
  })
);
