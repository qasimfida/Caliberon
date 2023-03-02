import styled from '@emotion/styled';

const Section = styled('section')(({ variant, spacing, theme: { palette } }) => ({
  height: 'auto',
  padding: spacing ? `${spacing * 4}px 0` : '60px 0',
  background: palette[variant]?.main,
}));

export default Section;
