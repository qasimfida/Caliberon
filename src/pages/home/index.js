import Carousel from '../../components/Slider';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../../components/ProfileCard';
import ServicesCard from '../../components/ServicesCard';
import TestimonialsCard from '../../components/testimonialsCard';
import { Container, Grid } from '@mui/material';
import { services, testimonialsData, users, blogDatas, aboutUsData } from './data';
import { MainWrapper } from '../../components/common';
import Section from '../../components/Section';
import Banner from '../banner';
import BannerNew from '../../assets/images/Background2.jpg';
import BannerNeww from '../../assets/images/New-Banner.jpg';
import { SeeMore, Item, SponsorsWrapper, CustomizeSlide, SlideWrapper, BlogsWrapper, MoreButton } from './styles';
import Heading from '../../components/Heading';
import Sponsor from '../../components/Sponsor';
// sponsor images
import sponsor2 from '../../assets/images/sponsor2.png';
import sponsor3 from '../../assets/images/sponsor3.png';
import sponsor4 from '../../assets/images/sponsor4.png';
import sponsor5 from '../../assets/images/sponsor5.png';
import sponsor6 from '../../assets/images/sponsor6.png';
import sponsor7 from '../../assets/images/sponsor7.png';
import sponsor8 from '../../assets/images/sponsor8.png';
import NewsLetter from '../../components/NewsLetter';
import OurBlogs from '../../components/OurBlogs';
import AboutUs from '../../components/AboutUs';
import ArrowRight from '../../components/Svgs/ArrowRight';
const HomePage = () => {
  const navigate = useNavigate();
  const ClickServices = () => {
    navigate('/services');
  };
  const ClickTeam = () => {
    navigate('/allTeam');
  };

  const sliderData = [
    {
      title: 'Bussiness Private Limited Company',
      slideContent:
        'A business plan will help you define your goals, target market, marketing strategies, and financial projections.',
      imgLink: BannerNew,
    },
    {
      title: 'New Startup Of Our Software Company',
      slideContent:
        'Depending on the scope of your software project, you may need to hire a team of developers, designers, and other professionals.',
      imgLink: BannerNeww,
    },
  ];
  const sponsors = [
    {
      url: 'https://www.facebook.com',
      label: 'www.facebook.com',
      image: sponsor2,
    },
    {
      url: 'https://www.northspex.com',
      label: 'www.northspex.com',
      image: sponsor3,
    },
    {
      url: 'https://www.instagram.com',
      label: 'www.instagram.com',
      image: sponsor4,
    },
    {
      url: 'https://www.twitter.com',
      label: 'www.twitter.com',
      image: sponsor5,
    },
    {
      url: 'https://www.google.com',
      label: 'www.google.com',
      image: sponsor6,
    },
    {
      url: 'https://www.sound.com',
      label: 'www.sound.com',
      image: sponsor7,
    },
    {
      url: 'https://www.spotify.com',
      label: 'www.spotify.com',
      image: sponsor8,
    },
    {
      url: 'https://www.facebook.com',
      label: 'www.facebook.com',
      image: sponsor2,
    },
  ];
  return (
    <div>
      <CustomizeSlide>
        <Carousel slidesToShow={1} slidesToScroll={1} fade>
          {sliderData.length && sliderData.map((item, index) => <Banner key={index} item={item} />)}
        </Carousel>
      </CustomizeSlide>
      <Section id="target-element">
        <Container>
          <Heading title={'Services.'} subTitle={'we offer'} dark />
          <MainWrapper>
            <Grid container spacing={[3]}>
              {services.map((item, key) => (
                <Grid item xs={12} sm={6} md={3} key={`services-${key}`}>
                  <ServicesCard
                    serviceImg={item.img}
                    serviceName={item.name}
                    serviceDetails={item.serviceDetails}
                    active={item.active}
                  />
                </Grid>
              ))}
            </Grid>
            <SeeMore>
              <MoreButton size="lg" variant="outlined" color="black" onClick={ClickServices}>
                for more
                <ArrowRight />
              </MoreButton>
            </SeeMore>
          </MainWrapper>
        </Container>
      </Section>
      <Section variant="very_black">
        <Container>
          <Heading className="sponsor_heading" title={'About Us.'} subTitle={'our company'} />
          <Grid container>
            <Grid item xs={12} md={12}>
              <AboutUs {...aboutUsData} />
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading title={'Team.'} subTitle={'our employees'} dark />
          <MainWrapper>
            <Grid container spacing={[4]}>
              {users.map((item, key) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Item key={`user-${key}`}>
                    <ProfileCard
                      userImg={item.img}
                      userName={item.name}
                      userRole={item.role}
                      userDetails={item.userDetails}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
            <SeeMore>
              <MoreButton size="lg" variant="outlined" color="black" onClick={ClickTeam}>
                see more
                <ArrowRight />
              </MoreButton>
            </SeeMore>
          </MainWrapper>
        </Container>
      </Section>
      <Section variant="very_black">
        <SlideWrapper>
          <Container>
            <Heading title={'testimonial.'} subTitle={'what people says ?'} />
            <Carousel dots>
              {testimonialsData.map((item, id) => (
                <TestimonialsCard
                  key={id}
                  name={item.authorName}
                  authorDetails={item.authorDetails}
                  comment={item.comment}
                />
              ))}
            </Carousel>
          </Container>
        </SlideWrapper>
      </Section>
      <Section>
        <Container>
          <Heading title={'our blogs.'} subTitle={'latest news'} dark />
          <BlogsWrapper>
            <Grid container spacing={4}>
              {blogDatas.map((item, id) => (
                <Grid item xs={4} md={4}>
                  <OurBlogs
                    key={id}
                    profile={item.img}
                    title={item.title}
                    subTitle={item.subTitle}
                    details={item.details}
                    date={item.date}
                    month={item.month}
                    btnValue={item.button}
                  />
                </Grid>
              ))}
            </Grid>
          </BlogsWrapper>
        </Container>
      </Section>
      <Section variant="very_black">
        <SponsorsWrapper>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <Heading className="sponsor_heading" alignLeft title={'clients.'} subTitle={'our team'} />
              </Grid>
              <Grid container item xs={12} md={8} spacing={4}>
                {sponsors.map((sponsor, id) => (
                  <Grid item xs={6} sm={3} key={id}>
                    <Sponsor {...sponsor} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Container>
        </SponsorsWrapper>
      </Section>
      <Section>
        <Container>
          <Grid container alignItems="center">
            <Grid item xs={12} md={6}>
              <Heading alignLeft title={'join us'} subTitle={'news letter.'} dark />
            </Grid>
            <Grid container item xs={12} md={6}>
              <NewsLetter />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </div>
  );
};

export default HomePage;
