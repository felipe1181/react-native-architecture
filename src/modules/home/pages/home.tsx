import images from 'core/assets';
import {ImageBackground, StyledView, Typography} from 'core/components';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Footer} from '../components/home.styles';
import {useCurrentWeather} from '../hooks';

const Home: React.FC = () => {
  const {data} = useCurrentWeather();

  console.log('data', data);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={images.home.background}>
        <Typography variant="largeTitle">Olá mundo</Typography>
        <StyledView p="md">
          <Footer />
        </StyledView>
      </ImageBackground>
    </SafeAreaView>
  );
};

Home.defaultProps = {
  headerTransparent: true,
  headerShown: false,
};

export default Home;
