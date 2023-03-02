import Wrapper, { SubTitle, Title } from './styles';

const Heading = ({ title, marginBottomZero, subTitle, alignLeft, dark, ...rest }) => {
  return (
    <Wrapper alignLeft={alignLeft} marginBottomZero={marginBottomZero} {...rest}>
      <SubTitle dark={dark}>{subTitle}</SubTitle>
      <Title dark={dark}>{title}</Title>
    </Wrapper>
  );
};

export default Heading;
