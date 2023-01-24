import Wrapper, { SubTitle, Title } from './styles';

const CommonHeading = ({ title, subTitle, alignLeft, dark, ...rest }) => {
  return (
    <Wrapper alignLeft={alignLeft} {...rest}>
      <SubTitle>{subTitle}</SubTitle>
      <Title dark={dark}>{title}</Title>
    </Wrapper>
  );
};

export default CommonHeading;
