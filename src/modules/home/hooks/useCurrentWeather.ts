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
        // const response = await api.get({
        //   id: 'get-weather',
        //   url: Config.WEATHER_BASE_URL_API,
        //   params: {
        //     lat,
        //     lon,
        //     appid: Config.WEATHER_API_KEY,
        //   },
        // });

        setCurrentWeather(oldState => ({
          ...oldState,
          isLoading: false,
          data: {
            coord: {
              lon: -122.08,
              lat: 37.39,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            base: 'stations',
            main: {
              temp: 282.55,
              feels_like: 281.86,
              temp_min: 280.37,
              temp_max: 284.26,
              pressure: 1023,
              humidity: 100,
            },
            visibility: 10000,
            wind: {
              speed: 1.5,
              deg: 350,
            },
            clouds: {
              all: 1,
            },
            dt: 1560350645,
            sys: {
              type: 1,
              id: 5122,
              message: 0.0139,
              country: 'US',
              sunrise: 1560343627,
              sunset: 1560396563,
            },
            timezone: -25200,
            id: 420006353,
            name: 'Mountain View',
            cod: 200,
          },
        }));
        return;
      }
    }
    startFetch();
  }, [currentLocation]);

  return currentWeather;
};

export default useCurrentWeather;
