import styled from '@emotion/styled';

export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const TestimonialDetails = styled('p')(
  ({
    theme: {
      palette: { lightGray },
    },
  }) => ({
    fontFamily: 'Poppins',
    fontWeight: '300',
    fontStyle: 'normal',
    fontSize: '16px',
    marginTop: '11px 0 0 0',
    color: lightGray?.main,
  })
);

export const UserName = styled.h4`
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2;
  margin: 0;
`;
export const TestimonialCard = styled('div')({
  position: 'relative',
  boxShadow: "0.5rem 0.5rem black, -0.5rem -0.5rem #ccc",
  margin: '1.5rem',
});
export const TestimonialWrapper = styled('div')(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    background: white?.main,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '70px 32px 24px',
    margin: '20px 0',
    position: 'relative',
    zIndex: 1,
  })
);

export const TestimonialContentWrapper = styled('div')({
  position: 'relative',
});
export const RattingWrapper = styled('div')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    position: 'relative',
    '& .MuiRating-root': {
      color: primary?.main,
    },
  })
);
