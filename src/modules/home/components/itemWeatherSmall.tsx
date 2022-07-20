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
`;

const Container = styled(StyledView)<Pick<PropsItemWeatherSmall, 'selected'>>`
  justify-content: space-between;
  border-width: 1px;
  border-color: ${({theme, selected}) =>
    createAlpha(theme.colors.primary, !!selected ? 0.5 : 0.2)};
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
      as={TouchableOpacity}
      bgColor={
        selected ? colors.solid.primary : createAlpha(colors.solid.primary, 0.2)
      }
      {...rest}>
      <Container
        flexDirection="column"
        borderRadius="pill"
        p="sm"
        pl="xs"
        pr="xs"
        flex={1}>
        <Typography variant="subHeadline">{formatDateByHour(time)}H</Typography>
        <StyledImage {...icon} />
        <Typography variant="title3">{weather}º</Typography>
      </Container>
    </Wrapper>
  );
};

export default ItemWeatherSmall;
