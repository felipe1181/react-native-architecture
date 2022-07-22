import {createAlpha} from 'core/utils/functions';
import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import StyledView from '../styled-view';

export const WrapperLoading = styled(StyledView)`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) =>
    createAlpha(theme.colors.solid.primary, 0.9)};
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  z-index: 9999;
`;
const Loading: React.FC = () => {
  return (
    <WrapperLoading>
      <ActivityIndicator />
    </WrapperLoading>
  );
};

export default Loading;
