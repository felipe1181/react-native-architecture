import images from 'core/assets';
import {ImageBackground, StyledView} from 'core/components';
import React, {useCallback, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';
import ItemWeatherSmall from './itemWeatherSmall';
import {createAlpha} from 'core/utils/functions';

export interface WeatherTime {
  id: number;
  main: string;
  icon: string;
  time: string;
  mainWeather: number;
}
const Container = styled(StyledView)`
  position: absolute;
  left: 0;
  bottom: 0;
  border-top-left-radius: ${({theme}) => theme.spacing.padding.xl}px;
  border-top-right-radius: ${({theme}) => theme.spacing.padding.xl}px;
  height: 235px;
  overflow: hidden;
  z-index: 999;
`;
export const Footer: React.FC = () => {
  const [selectWeather, setSelectWeather] = useState<number | null>(null);
  console.log('selectWeather', selectWeather);
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
    <Container
      as={ImageBackground}
      p="md"
      pb="xl"
      pt="xl"
      source={images.modal.background}
      width={Dimensions.get('window').width}>
      <FlatList
        renderItem={renderItem}
        horizontal
        data={[
          {
            id: 800,
            main: 'Clear',
            icon: '01d',
            time: '2022-03-20 09:00:00',
            mainWeather: 9,
          },
          {
            id: 801,
            main: 'Clear',
            icon: '01d',
            time: '2022-03-20 12:00:00',
            mainWeather: 9,
          },
        ]}
        keyExtractor={item => `weather-${item.id}`}
      />
    </Container>
  );
};
