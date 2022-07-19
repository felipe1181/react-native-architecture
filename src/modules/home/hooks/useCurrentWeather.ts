import {useGeoLocation} from 'core/utils/hooks';
import {useEffect, useState} from 'react';
import {api} from 'core/services/api/axios';
import Config from 'react-native-config';

const useCurrentWeather = () => {
  const {currentLocation} = useGeoLocation();
  const [currentWeather, setCurrentWeather] = useState({
    isLoading: true,
    data: {},
  });

  useEffect(() => {
    async function startFetch() {
      console.log('CALL API');
      const {lat, lon} = currentLocation;
      const hasParams = lat && lon && Config.WEATHER_API_KEY;
      if (hasParams) {
        const response = await api.get({
          id: 'get-weather',
          url: Config.WEATHER_BASE_URL_API,
          params: {
            lat,
            lon,
            appid: Config.WEATHER_API_KEY,
          },
        });
        response;
        setCurrentWeather(oldState => ({
          ...oldState,
          isLoading: false,
          data: response,
        }));
        return;
      }
    }
    startFetch();
  }, [currentLocation]);

  return currentWeather;
};

export default useCurrentWeather;
