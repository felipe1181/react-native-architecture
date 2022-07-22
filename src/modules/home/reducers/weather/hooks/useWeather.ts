import {useContext} from 'react';
import {weatherContext} from '../contexts';

export default function useWeather() {
  return useContext(weatherContext);
}
