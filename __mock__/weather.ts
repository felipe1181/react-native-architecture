import {
  WeatherMainApi,
  WeatherTime,
} from 'modules/home/reducers/weather/reducer/types';
import {normalizeApiWeatherToWeatherEntity} from 'modules/home/utils';

export const weatherMainApi = {
  list: [
    {
      dt: 1658372400,
      main: {
        temp: 21.93,
        feels_like: 22.35,
        temp_min: 19.5,
        temp_max: 21.93,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 968,
        humidity: 83,
        temp_kf: 2.43,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.38,
        deg: 174,
        gust: 6.31,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-07-21 03:00:00',
    },
    {
      dt: 1658383200,
      main: {
        temp: 21.72,
        feels_like: 22.14,
        temp_min: 21.3,
        temp_max: 21.72,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 967,
        humidity: 84,
        temp_kf: 0.42,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 21,
      },
      wind: {
        speed: 3.57,
        deg: 154,
        gust: 8.85,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.12,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-07-21 06:00:00',
    },
    {
      dt: 1658394000,
      main: {
        temp: 20.94,
        feels_like: 21.36,
        temp_min: 20.45,
        temp_max: 20.94,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 967,
        humidity: 87,
        temp_kf: 0.49,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 63,
      },
      wind: {
        speed: 3.06,
        deg: 160,
        gust: 9.44,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        '3h': 0.1,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-07-21 09:00:00',
    },
    {
      dt: 1658404800,
      main: {
        temp: 22.59,
        feels_like: 22.89,
        temp_min: 22.59,
        temp_max: 22.59,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 969,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 4,
        deg: 156,
        gust: 8.21,
      },
      visibility: 10000,
      pop: 0.15,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-07-21 12:00:00',
    },
    {
      dt: 1658415600,
      main: {
        temp: 24.46,
        feels_like: 24.68,
        temp_min: 24.46,
        temp_max: 24.46,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 969,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.95,
        deg: 165,
        gust: 6.17,
      },
      visibility: 10000,
      pop: 0.37,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-07-21 15:00:00',
    },
    {
      dt: 1658426400,
      main: {
        temp: 26.17,
        feels_like: 26.17,
        temp_min: 26.17,
        temp_max: 26.17,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 966,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 4.16,
        deg: 164,
        gust: 6.24,
      },
      visibility: 10000,
      pop: 0.35,
      rain: {
        '3h': 0.4,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-07-21 18:00:00',
    },
    {
      dt: 1658437200,
      main: {
        temp: 23.62,
        feels_like: 23.68,
        temp_min: 23.62,
        temp_max: 23.62,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 967,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 2.57,
        deg: 152,
        gust: 6.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-07-21 21:00:00',
    },
    {
      dt: 1658448000,
      main: {
        temp: 21.98,
        feels_like: 22.11,
        temp_min: 21.98,
        temp_max: 21.98,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 969,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 2.62,
        deg: 145,
        gust: 8.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-07-22 00:00:00',
    },
  ],
  city: {
    id: 3394103,
    name: 'Juazeiro do norte',
  },
};

export const weatherMain = normalizeApiWeatherToWeatherEntity(
  weatherMainApi as unknown as WeatherMainApi,
);

export const weatherTime: WeatherTime = weatherMain.data[0];
