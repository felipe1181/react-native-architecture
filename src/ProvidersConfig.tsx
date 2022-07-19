import {NavigationContainer} from '@react-navigation/native';
import Routes from 'core/routes';
import React from 'react';

const ProvidersConfig: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default ProvidersConfig;
