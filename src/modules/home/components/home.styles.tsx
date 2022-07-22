import images from 'core/assets';
import {
  ImageBackground,
  LottieContainer,
  StyledView,
  Typography,
} from 'core/components';
import {createAlpha} from 'core/utils/functions';
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';
import ItemWeatherSmall, {PropsItemWeatherSmall} from './itemWeatherSmall';
import {getAnimationByOpenWeatherIconId} from '../utils';
import {WeatherMain, WeatherTime} from '../reducers/weather/reducer/types';
import {PropsStyledView} from 'core/components/styled-view';

export const Wrapper = styled(StyledView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TitleMainWather = styled(Typography)`
  font-size: 98px;
  line-height: 99px;

  font-family: SourceSansPro-ExtraLight;
`;

const ContainerHeaderContent = styled(StyledView)`
  align-items: center;
  justify-content: center;
`;

export const WeatherContent: React.FC<{
  item: WeatherTime;
  city: WeatherMain['city'];
}> = ({item, city}) => {
  const {colors} = useTheme();
  return (
    <StyledView flexDirection="column">
      <ContainerHeaderContent flexDirection="column">
        <Typography variant="title1">{city.name}</Typography>
        <StyledView
          testID="title-main-weather"
          as={TitleMainWather}
          mt="sm"
          variant="largeTitle">
          {item.mainWeather.toFixed(0)}º
        </StyledView>
        <Typography
          testID="description-main-weather"
          variant="title3"
          color={colors.secondary}>
          {item.description}
        </Typography>
        <StyledView>
          <StyledView
            testID="min-main-weather"
            as={Typography}
            m="xs"
            variant="title3"
            color={colors.secondary}>
            Min {item.minMainWeather.toFixed(0)}º
          </StyledView>
          <StyledView
            testID="max-main-weather"
            as={Typography}
            m="xs"
            variant="title3"
            color={colors.secondary}>
            Max {item.maxMainWeather.toFixed(0)}º
          </StyledView>
        </StyledView>
      </ContainerHeaderContent>
      <StyledView mb="xl">
        <LottieContainer
          resizeMode="cover"
          autoSize={false}
          source={getAnimationByOpenWeatherIconId(item.icon)}
        />
      </StyledView>
    </StyledView>
  );
};

const ContainerFooter = styled(StyledView)`
  position: absolute;
  left: 0;
  bottom: 0;
  border-top-left-radius: ${({theme}) => theme.spacing.padding.xl}px;
  border-top-right-radius: ${({theme}) => theme.spacing.padding.xl}px;
  height: 270px;
  overflow: hidden;
  z-index: 999;
`;

const HeaderFooter = styled(StyledView)<PropsStyledView>`
  border-bottom-color: ${({theme}) =>
    createAlpha(theme.colors.solid.secondary, 0.09)};
  border-bottom-width: 1px;
  background-color: ${({theme}) =>
    createAlpha(theme.colors.solid.secondary, 0.2)};
  align-items: center;
`;

export const ItemFooter: React.FC<
  PropsItemWeatherSmall & {index: number; onPress: () => void}
> = ({index, onPress, ...rest}) => {
  return (
    <ItemWeatherSmall
      onPress={() => onPress()}
      ml={index > 0 ? 'sm' : 0}
      {...rest}
    />
  );
};
export const WrapperFooter: React.FC<{
  children: Array<React.ReactElement> | React.ReactElement;
}> = ({children}) => {
  return (
    <ContainerFooter
      as={ImageBackground}
      pb="xl"
      pt={0}
      source={images.modal.background}
      width={Dimensions.get('window').width}
      flexDirection="column">
      <HeaderFooter justifyContent="center" alignItems="center" p="md">
        <Typography variant="headline">
          Previsão do tempo nas próximas horas
        </Typography>
      </HeaderFooter>
      <StyledView p="md">{children}</StyledView>
    </ContainerFooter>
  );
};
