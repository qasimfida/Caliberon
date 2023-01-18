import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  img {
    transition: all 0.3s ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
  }
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  height: 300px;
`;
export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const UserDetails = styled.p`
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  font-size: 1rem;
  margin-top: 11px 0 0 0;
`;

export const UserName = styled.h4`
  font-family: Poppins;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.2;
  margin: 0;
`;
export const ProfileWrapper = styled('div')(
  ({
    theme: {
      palette: { white },
    },
  }) => ({
    boxShadow: '0px 0px 6px 3px rgba(82, 67, 67, 0.33)',
    overflow: 'hidden',
    cursor: 'grabbing',
    background: white?.main,
  })
);
export const UserRole = styled('h4')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: '700',
    color: primary?.main,
    margin: '0 0 5px 0',
    letterSpacing: '1px',
  })
);

export const Image = styled('img')({
  objectFit: 'cover',
  height: '300px',
  width: '100%',
});
export const ProfileContentWrapper = styled.div`
  padding: 14px 20px 20px 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  column-gap: 20px;
`;
