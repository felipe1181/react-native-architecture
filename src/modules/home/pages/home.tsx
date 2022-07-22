import images from 'core/assets';
import {
  IconButton,
  ImageBackground,
  ScreenContainer,
  StyledView,
  Loading,
} from 'core/components';
import React, {useEffect} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {
  WrapperFooter,
  ItemFooter,
  WeatherContent,
  Wrapper,
  WrapperRefresh,
} from '../components/home.styles';
import {useOpenWeather} from '../hooks';
import {useWeather} from 'modules/home/reducers/weather/hooks';
import {WeatherTime} from '../reducers/weather/reducer/types';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home: React.FC = () => {
  const {data, refreshWeather, isLoading} = useOpenWeather();
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
        icon={{
          source:
            images.icons.openWeathers[
              item.icon as keyof typeof images.icons.openWeathers
            ],
        }}
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
          {isLoading && <Loading />}
          <Wrapper>
            <WrapperRefresh m="md">
              <SafeAreaView>
                <IconButton
                  onPress={() => refreshWeather()}
                  icon={{source: images.icons.system.reload}}
                />
              </SafeAreaView>
            </WrapperRefresh>
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
