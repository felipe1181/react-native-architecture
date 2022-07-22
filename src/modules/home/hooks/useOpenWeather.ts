import {useGeoLocation} from 'core/utils/hooks';
import {useEffect, useState} from 'react';
import {api} from 'core/services/api/axios';
import Config from 'react-native-config';
import {WeatherMainApi} from '../reducers/weather/reducer/types';

const OPEN_WATHER_API_KEY = Config.WEATHER_API_KEY;
const OPEN_WATHER_BASE_URL = Config.WEATHER_BASE_URL_API;

const useCurrentWeather = () => {
  const {lat, lon, reloadLocation} = useGeoLocation();
  const [currentWeather, setCurrentWeather] = useState<{
    isLoading: boolean;
    data: null | WeatherMainApi;
  }>({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    async function startFetch() {
      const hasParams = lat && lon && OPEN_WATHER_API_KEY;
      if (hasParams) {
        console.log('CALL API');
        setCurrentWeather(oldState => ({
          ...oldState,
          isLoading: true,
        }));
        const response = await api.get({
          id: 'get-weather',
          url: OPEN_WATHER_BASE_URL,
          params: {
            lat,
            lon,
            appid: OPEN_WATHER_API_KEY,
            cnt: 8,
            units: 'metric',
            lang: 'pt_br',
          },
        });
        console.log('response', response);
        setCurrentWeather(oldState => ({
          ...oldState,
          isLoading: false,
          data: response as WeatherMainApi,
        }));
        return;
      }
    }
    startFetch();
  }, [lat, lon]);

  return {
    ...currentWeather,
    refreshWeather: reloadLocation,
  };
};

export default useCurrentWeather;
