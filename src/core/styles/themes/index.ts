import {createGradient} from 'core/utils/functions';
import {DefaultTheme} from 'styled-components';
import {spacing, fonts} from '../tokens';

const dark: DefaultTheme = {
  spacing,
  colors: {
    primary: '#ffffff',
    secondary: '#A19EB7',
    tertiary: '#686489',
    quaternary: '#524D77',
    gradient: {
      primary: createGradient('#2e335a', '#1c1b33'),
      secondary: createGradient('#5936b4', '#362a84'),
      tertiary: createGradient('#3658b1', '#c159ec'),
      quaternary: createGradient('#aec9ff', '#083072'),
    },
    solid: {
      primary: '#48319d',
      secondary: '#1f1d47',
      tertiary: '#c427fb',
      quaternary: '#e0d9ff',
    },
  },
  fonts,
};

export {dark};
