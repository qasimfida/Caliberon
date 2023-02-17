import styled from '@emotion/styled';

export const Heading = styled('h2')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    margin: '0',
    color: primary?.main,
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '2px',
    marginBottom: '2rem',
    marginTop: '10px',
  })
);
