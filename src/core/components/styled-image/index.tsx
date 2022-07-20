import React from 'react';
import {Image, ImageProps} from 'react-native';
import StyledView, {PropsStyledView} from '../styled-view';

export interface PropsStyledImage extends PropsStyledView {
  source: ImageProps['source'];
  styleImage?: ImageProps['style'];
}

const StyledImage: React.FC<PropsStyledImage> = ({
  source,
  styleImage,
  ...rest
}) => {
  return (
    <StyledView {...rest}>
      <Image source={source} style={styleImage} />
    </StyledView>
  );
};

export default StyledImage;
