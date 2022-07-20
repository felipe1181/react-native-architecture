import {PropsSpacing} from 'core/styles/tokens/spacing';
import {ViewProps} from 'react-native';
import {ColorComposition} from 'styled-components';
import styled, {css, DefaultTheme} from 'styled-components/native';

export interface PropsStyledView {
  bgColor?: keyof ColorComposition | String;
  p?: PropsSpacing['padding'];
  pt?: PropsSpacing['padding'];
  pl?: PropsSpacing['padding'];
  pr?: PropsSpacing['padding'];
  pb?: PropsSpacing['padding'];
  m?: PropsSpacing['padding'];
  mt?: PropsSpacing['padding'];
  ml?: PropsSpacing['padding'];
  mr?: PropsSpacing['padding'];
  mb?: PropsSpacing['padding'];
  borderRadius?: PropsSpacing['borderRadius'];
  flexDirection?: 'column' | 'row';
}

const spacingPadding = ({
  theme,
  value,
}: {
  theme: DefaultTheme;
  value?: PropsSpacing['padding'];
}) => {
  const themeSpacingPadding = theme.spacing.padding;
  const valueType = value as keyof typeof themeSpacingPadding;
  const valueSpacingPadding = Number(
    themeSpacingPadding[valueType] || valueType,
  );

  return {
    p: `padding:${valueSpacingPadding}px`,
    pt: `padding-top:${valueSpacingPadding}px`,
    pl: `padding-left:${valueSpacingPadding}px`,
    pr: `padding-right:${valueSpacingPadding}px`,
    pb: `padding-bottom:${valueSpacingPadding}px`,
  };
};

const spacingMargin = ({
  theme,
  value,
}: {
  theme: DefaultTheme;
  value?: PropsSpacing['margin'];
}) => {
  const themeSpacingMargin = theme.spacing.margin;
  const valueType = value as keyof typeof themeSpacingMargin;
  const valueSpacingMargin = Number(themeSpacingMargin[valueType] || valueType);

  return {
    m: `margin:${valueSpacingMargin}px`,
    mt: `margin-top:${valueSpacingMargin}px`,
    ml: `margin-left:${valueSpacingMargin}px`,
    mr: `margin-right:${valueSpacingMargin}px`,
    mb: `margin-bottom:${valueSpacingMargin}px`,
  };
};

const StyledView = styled.View<PropsStyledView & ViewProps>`
  flex-direction: ${({flexDirection = 'row'}) => flexDirection};

  ${({bgColor, theme}) => {
    if (!bgColor) {
      return;
    }
    const bgColorType = bgColor as keyof Omit<
      typeof theme.colors,
      'gradient' | 'solid'
    >;
    if (theme.colors[bgColorType]) {
      return css`
        background-color: ${theme.colors[bgColorType]};
      `;
    }
    return css`
      background-color: ${bgColorType};
    `;
  }};
  ${({p, pt, pl, pr, pb, theme}) => {
    return css`
      ${p ? spacingPadding({theme, value: p})?.p : ''}
      ${pt ? spacingPadding({theme, value: pt})?.pt : ''}
      ${pl ? spacingPadding({theme, value: pl})?.pl : ''}
      ${pr ? spacingPadding({theme, value: pr})?.pr : ''}
      ${pb ? spacingPadding({theme, value: pb})?.pb : ''}
    `;
  }};

  ${({m, mt, ml, mr, mb, theme}) => {
    return css`
      ${m ? spacingMargin({theme, value: m})?.m : ''}
      ${mt ? spacingMargin({theme, value: mt})?.mt : ''}
      ${ml ? spacingMargin({theme, value: ml})?.ml : ''}
      ${mr ? spacingMargin({theme, value: mr})?.mr : ''}
      ${mb ? spacingMargin({theme, value: mb})?.mb : ''}
    `;
  }};

  ${({borderRadius, theme}) => {
    if (!borderRadius) {
      return;
    }
    return css`
      border-radius: ${theme.spacing.borderRadius[borderRadius]}px;
    `;
  }};
`;

export default StyledView;
