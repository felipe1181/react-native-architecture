import React from 'react';
import {Text, View} from 'react-native';
import {useCurrentWeather} from '../hooks';

const Home: React.FC = () => {
  const {data} = useCurrentWeather();

  console.log('data', data);
  return (
    <View>
      <Text>OLA murxndo</Text>
    </View>
  );
};

export default Home;
