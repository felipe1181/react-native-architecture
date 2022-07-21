import React from 'react';
import Lottie, {AnimatedLottieViewProps} from 'lottie-react-native';

const LottieContainer: React.FC<AnimatedLottieViewProps> = ({...props}) => {
  return <Lottie autoPlay autoSize loop {...props} />;
};

export default LottieContainer;
