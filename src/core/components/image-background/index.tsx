import {ImageBackgroundProps} from 'react-native';
import styled from 'styled-components/native';

interface PropsImageBackground {
  width?: number;
  height?: number;
}

const ImageBackground = styled.ImageBackground<PropsImageBackground>`
  flex: 1;
  width: ${({width}) => (width ? `${width}px` : '100%')};
  height: ${({height}) => (height ? `${height}px` : '100%')};
`;

export default ImageBackground;
