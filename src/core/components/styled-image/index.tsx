import React from 'react';
import {Image, ImageProps} from 'react-native';
import StyledView, {PropsStyledView} from '../styled-view';

export interface PropsStyledImage extends PropsStyledView {
  source: ImageProps['source'];
  style?: ImageProps['style'];
  styleContainer?: PropsStyledView['style'];
}

const StyledImage: React.FC<PropsStyledImage> = ({
  source,
  styleContainer,
  style,
  ...rest
}) => {
  return (
    <StyledView {...rest} style={styleContainer}>
      <Image source={source} style={style} />
    </StyledView>
  );
};

export default StyledImage;
