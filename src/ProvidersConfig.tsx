import {NavigationContainer} from '@react-navigation/native';
import Routes from 'core/routes';
import {dark} from 'core/styles/themes';
import {WeatherProvider} from 'modules/home/reducers/weather/components';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';

const ProvidersConfig: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <NavigationContainer>
        <WeatherProvider>
          <Routes />
        </WeatherProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default ProvidersConfig;
