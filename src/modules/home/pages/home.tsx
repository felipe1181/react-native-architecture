import images from 'core/assets';
import {ImageBackground, ScreenContainer, StyledView} from 'core/components';
import React, {useCallback, useEffect, useMemo} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {
  WrapperFooter,
  ItemFooter,
  WeatherContent,
  Wrapper,
} from '../components/home.styles';
import {useOpenWeather} from '../hooks';
import {useWeather} from 'modules/home/reducers/weather/hooks';
import {WeatherTime} from '../reducers/weather/reducer/types';

const Home: React.FC = () => {
  const {data} = useOpenWeather();
  const {
    setWeathers,
    data: weatherData,
    setCurrentWeather,
    weatherChosedIndex,
  } = useWeather();

  const weatherChosed = weatherData?.data[weatherChosedIndex];

  const renderItem = ({item, index}: {item: WeatherTime; index: number}) => {
    return (
      <ItemFooter
        time={item.time}
        icon={{source: images.icons.weathers.moonCloudMidRain}}
        weather={item.mainWeather}
        selected={weatherChosedIndex === index}
        onPress={() => setCurrentWeather(index)}
        index={index}
      />
    );
  };
  const keyExtractor = (item: WeatherTime) => item.id;

  useEffect(() => {
    if (data) {
      return setWeathers(data);
    }
  }, [data, setWeathers]);

  return (
    <ScreenContainer variant="invisible" safeBottom={false}>
      <StyledView flexDirection="column" flex={1}>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageBackground source={images.home.background}>
          <Wrapper>
            {weatherChosed && (
              <WeatherContent item={weatherChosed} city={weatherData.city} />
            )}
          </Wrapper>
          <WrapperFooter>
            <FlatList<WeatherTime>
              renderItem={renderItem}
              horizontal
              data={weatherData.data}
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
            />
          </WrapperFooter>
        </ImageBackground>
      </StyledView>
    </ScreenContainer>
  );
};

Home.defaultProps = {
  headerTransparent: true,
  headerShown: false,
};

export default Home;
