import images from 'core/assets';
import {
  ImageBackground,
  ScreenContainer,
  StyledView,
  Typography,
} from 'core/components';
import React from 'react';
import {StatusBar} from 'react-native';
import {Footer} from '../components/home.styles';
import {useCurrentWeather} from '../hooks';

const Home: React.FC = () => {
  const {data} = useCurrentWeather();

  console.log('data', data);
  return (
    <ScreenContainer variant="invisible" safeBottom={false}>
      <StyledView flexDirection="column" flex={1}>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground source={images.home.background}>
          <Typography variant="largeTitle">Olá mundo</Typography>
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
