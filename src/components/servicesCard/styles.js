import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
`;
export const DetailsWrapper = styled.div`
  over-flow: hidden;
  text-overflow: ellips;
`;

export const ServicesDetails = styled('p')`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  padding: 0 20px;
  height: 40px;
  margin: 0;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${(props) => props.theme.palette.darkGray.main};
`;

export const UserName = styled.h4`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.2;
  margin: 12px 0;
`;
export const ServicesWrapper = styled('div')(({ active }) => ({
  background: '#fff',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  boxShadow: active ? 'rgba(17, 17, 26, 0.1) 0px 0px 16px' : ' ',
  transition: '0.3s all ease-in',
  padding: '30px 0',
  border: '1px solid #e5e5e5',
  cursor: 'pointer',
}));

export const Image = styled('img')({
  height: '50px',
  maxWidth: '100%',
  transitionDuration: '0.3s',
});
export const DetailsSection = styled('div')(
  ({
    theme: {
      palette: { primary },
    },
  }) => ({
    position: 'absolute',
    cursor: 'pointer',
    bottom: '0',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.3s all ease',
    '& svg': {
      color: primary?.main,
      marginLeft: '.5rem',
      transition: '0.3s all ease',
    },
    '&:hover': {
      fontWeight: 'bold',
      color: primary?.main,
      '.text': {
        color: primary?.main,
        fontWeight: 'bold',
      },
      svg: {
        transform: 'translate(10px)',
      },
    },
  })
);
export const ServicesContentWrapper = styled('div')({
  position: 'relative',
});
