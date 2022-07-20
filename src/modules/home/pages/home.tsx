import images from 'core/assets';
import {Typography} from 'core/compoents';
import React from 'react';
import {ImageBackground, SafeAreaView, StatusBar} from 'react-native';
import {useCurrentWeather} from '../hooks';

const Home: React.FC = () => {
  const {data} = useCurrentWeather();

  console.log('data', data);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        style={{flex: 1, width: '100%'}}
        source={images.home.background}>
        <Typography variant="largeTitle">Olá mundo</Typography>
      </ImageBackground>
    </SafeAreaView>
  );
};

Home.defaultProps = {
  headerTransparent: true,
  headerShown: false,
};

export default Home;
