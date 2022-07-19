import Axios from 'axios';
import Config from 'react-native-config';
import {retryRequest} from './components';

const axios = Axios.create({
  baseURL: Config.WEATHER_BASE_URL_API,
});

retryRequest({axios});

export default axios;
