import {fonts, spacing} from './tokens';

declare module 'styled-components' {
  export interface ColorComposition {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  }
  export interface DefaultTheme {
    spacing: typeof spacing;
    colors: ColorComposition & {
      gradient: ColorComposition;
      solid: ColorComposition;
    };
    fonts: typeof fonts;
  }
}
