import Axios from 'axios';
import {retryRequest} from './components';

const axios = Axios.create();

retryRequest({axios});

export default axios;
