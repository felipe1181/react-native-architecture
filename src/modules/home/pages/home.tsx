import images from 'core/assets';
import {
  ImageBackground,
  ScreenContainer,
  StyledView,
  Typography,
} from 'core/components';
import React from 'react';
import {StatusBar} from 'react-native';
import {Footer, WeatherContent, Wrapper} from '../components/home.styles';
import {useCurrentWeather} from '../hooks';

const Home: React.FC = () => {
  const {data} = useCurrentWeather();

  console.log('data', data);
  return (
    <ScreenContainer variant="invisible" safeBottom={false}>
      <StyledView flexDirection="column" flex={1}>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground source={images.home.background}>
          <Wrapper>
            <WeatherContent
              item={{
                time: '',
                city: 'Juazeiro do Norte',
                icon: '01d',
                id: 234,
                main: 'Chuvas forte fi',
                mainWeather: 38,
                maxMainWeather: 39,
                minMainWeather: 19,
              }}
            />
          </Wrapper>
          <Footer />
        </ImageBackground>
      </StyledView>
    </ScreenContainer>
  );
};

Home.defaultProps = {
  headerTransparent: true,
  headerShown: false,
};

export default Home;
