import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styled from 'styled-components/native';
import StyledImage, {PropsStyledImage} from '../styled-image';
import StyledView, {PropsStyledView} from '../styled-view';

interface PropsIconButton extends TouchableOpacityProps {
  icon: PropsStyledImage;
}

const StyledImageCustom = styled(StyledImage)`
  width: 40px;
  height: 40px;
  opacity: 0.9;
`;
const IconButton: React.FC<PropsIconButton & PropsStyledView> = ({
  icon,
  onPress,
  ...rest
}) => {
  return (
    <StyledView
      as={TouchableOpacity}
      {...rest}
      onPress={(e: GestureResponderEvent) => {
        if (onPress) {
          onPress(e);
        }
      }}>
      <StyledImageCustom {...icon} />
    </StyledView>
  );
};

export default IconButton;
