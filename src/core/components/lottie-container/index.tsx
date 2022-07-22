import React from 'react';
import Lottie, {AnimatedLottieViewProps} from 'lottie-react-native';
import styled from 'styled-components';

const LottieCustom = styled(Lottie)`
  width: 250px;
  height: 250px;
`;
const LottieContainer: React.FC<AnimatedLottieViewProps> = ({...props}) => {
  return <LottieCustom autoPlay autoSize loop {...props} />;
};

export default LottieContainer;
