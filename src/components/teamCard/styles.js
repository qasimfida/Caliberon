import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  margin: -80px 0px 0px 0px;
  margin-bottom: 22px;
  width: 150px;
  height: 150px;
  display: inline-block;
  cursor: pointer;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s, -webkit-box-shadow 0.3s;
`;
export const DetailsWrapper = styled.div`
  margin-top: 10px;
`;

export const UserDetails = styled.h4`
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.palette.lightGray.main};
`;

export const UserName = styled.h4`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 8px;
`;
export const UserRole = styled('h4')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: '400',
    color: primary?.main,
    margin: '0 0 5px 0',
    letterSpacing: '1px',
  })
);

export const Image = styled('img')({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  transitionDuration: '0.3s',
});
export const TeamCardWrapper = styled.div`
  border: 1px solid #d4d6db;
  text-align: center;
  &:hover img {
    transform: scale(1.1);
  }
`;
export const TeamCardContentWrapper = styled.div`
  padding: 5px 20px 20px 20px;
`;
