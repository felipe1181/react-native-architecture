import images from 'core/assets';
import {StyledView} from 'core/components';
import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import ItemWeatherSmall from './itemWeatherSmall';

export interface WeatherTime {
  id: number;
  main: string;
  icon: string;
  time: string;
  mainWeather: number;
}

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
    <StyledView>
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
    </StyledView>
  );
};
