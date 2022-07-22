import {render} from '@testing-library/react-native';

import React from 'react';
import {dark} from 'core/styles/themes';
import {ThemeProvider as ThemeNative} from 'styled-components/native';
import {ThemeProvider as ThemeDefault} from 'styled-components';
import {WeatherProvider} from 'modules/home/reducers/weather/components';

const AllTheProviders: React.FC<{
  children: React.ReactElement | React.ReactElement[];
}> = ({children}) => {
  return (
    <ThemeDefault theme={dark}>
      <ThemeNative theme={dark}>
        <WeatherProvider>{children}</WeatherProvider>
      </ThemeNative>
    </ThemeDefault>
  );
};

const customRender: typeof render = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export {customRender as render};
