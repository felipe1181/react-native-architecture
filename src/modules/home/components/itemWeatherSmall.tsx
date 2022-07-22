import {StyledView, Typography} from 'core/components';
import React from 'react';
import StyledImage, {PropsStyledImage} from 'core/components/styled-image';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';
import {createAlpha} from 'core/utils/functions';
import {PropsStyledView} from 'core/components/styled-view';
import {formatDateByHour} from 'core/utils/functions/date';
export interface PropsItemWeatherSmall extends PropsStyledView {
  time: string;
  icon: PropsStyledImage;
  weather: number;
  selected?: boolean;
  onPress?: () => void;
}

const Wrapper = styled(StyledView)`
  width: 60px;
  height: 146px;
  border-radius: ${({theme}) => theme.spacing.borderRadius.pill}px;
  shadow-color: '#000';
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.22;
  shadow-radius: 2.22; 
  elevation: 3;
`;

const Container = styled(StyledView)<Pick<PropsItemWeatherSmall, 'selected'>>`
  justify-content: space-between;
  border-width: 0.5px;
  border-color: ${({theme, selected}) =>
    createAlpha(theme.colors.primary, selected ? 0.5 : 0.2)};
  align-items: center;
`;

const ItemWeatherSmall: React.FC<PropsItemWeatherSmall> = ({
  time,
  icon,
  weather,
  selected,
  ...rest
}) => {
  const {colors} = useTheme();
  return (
    <Wrapper
      testID="btn-item-weather-small"
      as={TouchableOpacity}
      bgColor={
        selected ? colors.solid.primary : createAlpha(colors.solid.primary, 0.5)
      }
      {...rest}>
      <Container
        testId="container-item-weather"
        flexDirection="column"
        borderRadius="pill"
        p="sm"
        pl="xs"
        pr="xs"
        flex={1}>
        <Typography variant="subHeadline">{formatDateByHour(time)}H</Typography>
        <StyledImage {...icon} />
        <Typography variant="title3">{weather.toFixed(0)}º</Typography>
      </Container>
    </Wrapper>
  );
};

export default ItemWeatherSmall;
