import {Axios} from 'axios';

interface PropsRetryRequest {
  axios: Axios;
}

export function retryRequest({axios}: PropsRetryRequest) {
  let counter = 1;

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status >= 500 && counter < 3) {
        counter++;
        return axios.request(error.config);
      }
      counter = 1;
      return Promise.reject(error);
    },
  );
  return axios;
}
