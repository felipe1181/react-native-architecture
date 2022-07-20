import React from 'react';
import {ColorValue, StyleProp, Text, TextProps, TextStyle} from 'react-native';
import {DefaultTheme, useTheme} from 'styled-components';
interface PropsTypography extends TextProps {
  variant: keyof DefaultTheme['fonts'];
  color?: keyof DefaultTheme['colors']['solid'] | String;
}
const Typography: React.FC<PropsTypography> = ({
  variant,
  children,
  color,
  ...rest
}) => {
  const {fonts, colors} = useTheme();

  const keyFonts: string[] = Object.keys(fonts);

  const ComponentsKeyFonts = keyFonts.reduce((acc, key: string) => {
    const propsTargetFont = fonts[
      key as keyof typeof fonts
    ] as unknown as StyleProp<TextStyle>;

    const colorFont =
      colors[color as keyof Omit<typeof colors, 'gradient' | 'solid'>];
    return {
      ...acc,
      [key]: (inJectChildren: string) => (
        <Text
          style={[
            propsTargetFont,
            {
              color: (color
                ? colorFont
                  ? colorFont
                  : color
                : colors.primary) as ColorValue,
            },
          ]}
          {...rest}>
          {inJectChildren}
        </Text>
      ),
    };
  }, {});

  const renderComponent =
    ComponentsKeyFonts[variant as keyof typeof ComponentsKeyFonts];

  if (renderComponent) {
    return (renderComponent as Function)(children as string);
  }
  return null;
};

export default Typography;
