import {useGeoLocation} from 'core/utils/hooks';
import React from 'react';
import {Text, View} from 'react-native';

const Home: React.FC = () => {
  useGeoLocation();
  return (
    <View>
      <Text>OLA mundo</Text>
    </View>
  );
};

export default Home;
