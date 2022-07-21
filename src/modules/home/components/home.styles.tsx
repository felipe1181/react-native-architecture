import images from 'core/assets';
import {
  ImageBackground,
  LottieContainer,
  StyledView,
  Typography,
} from 'core/components';
import StyledImage, {PropsStyledImage} from 'core/components/styled-image';
import {PropsStyledView} from 'core/components/styled-view';
import {createAlpha} from 'core/utils/functions';
import React, {useCallback, useState} from 'react';
import {Dimensions, FlatList, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';
import ItemWeatherSmall from './itemWeatherSmall';
import {getAnimationByOpenWeatherIconId} from '../utils';

export interface WeatherTime {
  id: number;
  main: string;
  icon: string;
  time: string;
  mainWeather: number;
  minMainWeather: number;
  maxMainWeather: number;
}
export interface WeatherMain extends WeatherTime {
  city: string;
}

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

export const WeatherContent: React.FC<{item: WeatherMain}> = ({item}) => {
  const {colors} = useTheme();
  return (
    <StyledView flexDirection="column">
      <ContainerHeaderContent flexDirection="column">
        <Typography variant="title1">{item.city}</Typography>
        <StyledView as={TitleMainWather} mt="sm" variant="largeTitle">
          {item.mainWeather}º
        </StyledView>
        <Typography variant="title3" color={colors.secondary}>
          {item.main}
        </Typography>
        <StyledView>
          <StyledView
            as={Typography}
            m="xs"
            variant="title3"
            color={colors.secondary}>
            Min {item.minMainWeather}º
          </StyledView>
          <StyledView
            as={Typography}
            m="xs"
            variant="title3"
            color={colors.secondary}>
            Max {item.maxMainWeather}º
          </StyledView>
        </StyledView>
      </ContainerHeaderContent>
      <StyledView mb="xl">
        <LottieContainer
          resizeMode="cover"
          autoSize={false}
          style={{width: 250, height: 250}}
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
export const Footer: React.FC = ({data}: {data: Array<WeatherMain>}) => {
  const [selectWeather, setSelectWeather] = useState<number>(null);
  const renderItem = useCallback(
    ({item, index}: {item: WeatherTime; index: number}) => {
      return (
        <ItemWeatherSmall
          time={item.time}
          icon={{source: images.icons.weathers.moonCloudMidRain}}
          weather={item.mainWeather}
          selected={selectWeather === item.id}
          onPress={() =>
            selectWeather === item.id
              ? setSelectWeather(null)
              : setSelectWeather(item.id)
          }
          ml={index > 0 ? 'sm' : 0}
        />
      );
    },
    [selectWeather],
  );

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
      <StyledView p="md">
        <FlatList
          renderItem={renderItem}
          horizontal
          data={data}
          keyExtractor={item => `weather-${item.id}`}
        />
      </StyledView>
    </ContainerFooter>
  );
};
