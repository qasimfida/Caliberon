import { Box } from '@mui/material';
import { styled } from '@mui/styles';

export const StyledTimeLine = styled(Box)({
  height: 'auto',
  padding: '6px 17px',
});

// Title
export const Title = styled('h4')({
  fontSize: '22px',
});

// Date

export const Date = styled('span')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    color: primary.main,
  })
);

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
