import {useGeoLocation} from 'core/utils/hooks';
import useFetch from 'core/utils/hooks/useFetch';
import Config from 'react-native-config';

const useCurrentWeather = () => {
  const {currentLocation} = useGeoLocation();
  const {lat, lon} = currentLocation;
  const hasParams = lat && lon && Config.WEATHER_API_KEY;

  const {isLoading, data} = useFetch({
    url: hasParams
      ? `lat=${lat}&lon=${lon}&appid=${Config.WEATHER_API_KEY}`
      : '',
    id: 'get-weather',
  });

  return {
    isLoading,
    data,
  };
};

export default useCurrentWeather;
