import React from 'react';
import { Container } from '@mui/material';
import FooterItem from './footerItem';

import Wrapper, {
  StyledGrid,
  DesignedBy,
  Item,
  AddressWrapper,
  LinksWrapper,
  MenuLinks,
  Address,
  Contact,
  BoderRadius,
  SocialIcon,
  DepartmentWrapper,
} from './styles';
import Facebook from '../../components/Svgs/Facebook';
import Twitter from '../../components/Svgs/Twitter';
import Linkedin from '../../components/Svgs/Linkedin';
import Mail from '../../components/Svgs/Mail';
import LogoLight from '../../assets/images/logo-light.png';

const Footer = () => {
  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Services',
      path: '/services',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
    {
      name: 'About us',
      path: '/about',
    },
    {
      name: 'Team',
      path: '/',
    },
  ];
  return (
    <Wrapper>
      <Container>
        <StyledGrid container spacing={8}>
          <StyledGrid container item xs={12} md={4}>
            <StyledGrid item xs={12} md={8}>
              <Item>
                <img src={LogoLight} height="50px" alt="logo" />
                <FooterItem>
                  <AddressWrapper>
                    <Address>Here About Section includes a brief biography</Address>
                  </AddressWrapper>
                  <SocialIcon>
                    <BoderRadius>
                      <Facebook color={'#fff'} height={25} />
                    </BoderRadius>
                    <BoderRadius>
                      <Twitter color={'#fff'} height={25} />
                    </BoderRadius>
                    <BoderRadius>
                      <Linkedin color={'#fff'} height={25} />
                    </BoderRadius>
                    <BoderRadius>
                      <Mail color={'#fff'} height={25} />
                    </BoderRadius>
                  </SocialIcon>
                </FooterItem>
              </Item>
            </StyledGrid>
          </StyledGrid>
          <StyledGrid container item xs={12} md={8}>
            <StyledGrid item xs={12} md={4}>
              <Item>
                <FooterItem title={'Menu'}>
                  <LinksWrapper>
                    {routes.map((item) => {
                      return (
                        <MenuLinks href={item.path} key={`route-${item.name}`}>
                          {item.name}
                        </MenuLinks>
                      );
                    })}
                  </LinksWrapper>
                </FooterItem>
              </Item>
            </StyledGrid>
            <StyledGrid item xs={12} md={4}>
              <FooterItem title={'Department'} />
              <DepartmentWrapper>
                <MenuLinks href="#">Marketing </MenuLinks>
                <MenuLinks href="#">Lead Role</MenuLinks>
                <MenuLinks href="#">Development</MenuLinks>
                <MenuLinks href="#">Human Resource</MenuLinks>
                <MenuLinks href="#">Finance</MenuLinks>
              </DepartmentWrapper>
            </StyledGrid>
            <StyledGrid item xs={12} md={4}>
              <Item>
                <FooterItem title={'About'}>
                  <AddressWrapper>
                    <Address>Near Heli Chowk Zulfiqarabad Gilgit, 15100</Address>
                    <Contact>
                      contact@calibreoninternational.com <br />
                      (647) 749-7224
                    </Contact>
                  </AddressWrapper>
                </FooterItem>
              </Item>
            </StyledGrid>
          </StyledGrid>
        </StyledGrid>
      </Container>
      <DesignedBy>© 2022 Calibreon International Pvt. Ltd. All Rights Reserved.</DesignedBy>
    </Wrapper>
  );
};

export default Footer;
