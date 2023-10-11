import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import Chip from '@mui/material/Chip';
import cover from '../../assets/images/blogA.jpg';
import { Container, Grid } from '@mui/material';

const ChipWrapper = styled('Box')({
  paddingTop: '150px',
  paddingBottom: '70px',
  background: `url(${cover})`,
  objectFit: 'cover',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom right',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: '45vh',
  '&:before': {
    content: `''`,
    backgroundColor: '#0c0f16',
    opacity: '.6',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: ' 0',
    left: '0',
    zIndex: '1',
  },
});
export const MainTitle = styled('h2')({
  position: 'absolute',
  bottom: '0',
  zIndex: '222',
  fontSize: '28px',
  textTransform: 'capitalize',
  color: '#fff',
});
export const StyledChip = styled(Chip)({
  zIndex: '222',
  position: 'absolute',
  bottom: '15%',
  letterSpacing: '.8px',
  borderRadius: 'unset !important',
});
export const StyledContainer = styled(Container)({
  marginTop: '36px',
});
export const UserProfile = styled(Box)({
  margin: '0',
  width: '60px',
  height: '60px',
  '& img': {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
});
export const UserWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});
export const UserDetail = styled(Box)({
  marginLeft: '10px',
});
export const UserName = styled('h2')({
  margin: '0',
  fontSize: '17px',
  letterSpacing: '.8px',
  fontWeight: '600',
});
export const PostDate = styled('p')({
  margin: '0',
});
export const StyledGrid = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
});
export const MenuWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& .icon-button': {
    padding: '0',
    marginLeft: '10px',
  },
});
export const AllContentWrapper = styled(Box)({
  marginBottom: '36px',
});
export const ContentTitle = styled('h2')({
  fontSize: '22px',
  letterSpacing: '.8px',
  fontWeight: '600',
});
export const ContentWrapper = styled(Box)({});
export const Content = styled('p')({
  letterSpacing: '.8px',
  fontWeight: '400',
  marginTop: '20px',
});
export const ImageWrapper = styled(Box)({
  width: '70%',
  '& img': {
    width: '100%',
  },
});

export default ChipWrapper;
