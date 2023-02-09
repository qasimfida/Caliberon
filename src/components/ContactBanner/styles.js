import { Typography, Box } from '@mui/material';
import Section from '../../components/Section';
import styled from '@emotion/styled';

export const Details = styled(Box)({
  textAlign: 'center',
});
export const ContactDetailsBox = styled(Section)(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    backgroundColor: primary?.main,
    display: 'flex',
    alignItems: 'center',
  })
);

export const AboutDesc = styled(Typography)`
  font-family: Poppins;
  letter-spacing: 0.22px;
  font-size: 22px;
  color: #fff;
  line-height: ${(props) => (props.variant === 'span' ? '2.5' : '1.5')};
  margin-top: 40px;
  margin-bottom: ${(props) => (props.variant === 'span' ? '24px' : '40px')};
`;

export const AboutHeading = styled(Typography)`
  font-family: Poppins;
  font-size: ${(props) => (props.variant === 'h3' ? '40px' : '70px')};
  color: #fff;
  font-weight: bold;
  line-height: 1;
  margin-bottom: ${(props) => (props.variant === 'h3' ? '24px' : '')};
`;
