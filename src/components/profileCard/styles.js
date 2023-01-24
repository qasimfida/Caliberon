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

export const UserDetails = styled('p')({
  margin: '0',
  color: '#d5d5d5',
  fontWeight: '400',
  fontSize: '1rem',
  marginTop: '11px 0 0 0',
});
export const UserName = styled('h4')(
  ({
    theme: {
      palette: { primary, darkBlack },
    },
  }) => ({
    background: primary?.main,
    margin: '0',
    color: darkBlack?.[100],
    fontWeight: '500',
    fontSize: '1.3rem',
  })
);

export const ProfileWrapper = styled('div')(
  ({
    theme: {
      palette: { primary, white, darkBlack },
    },
  }) => ({
    boxShadow: '0px 0px 6px 3px rgba(82, 67, 67, 0.33)',
    overflow: 'hidden',
    cursor: 'grabbing',
    background: primary?.main,
    // background: darkBlack?.[100],
    color: white?.main,
    borderRadius: '10px',
  })
);
export const UserRole = styled('h4')(
  ({
    theme: {
      palette: { primary, white },
    },
  }) => ({
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '1px ',
    color: white?.main,
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
  margin-top: 20px;
  column-gap: 20px;
`;
