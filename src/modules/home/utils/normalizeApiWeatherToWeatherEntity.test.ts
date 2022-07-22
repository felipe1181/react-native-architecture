import {weatherMainApi} from '../../../../__mock__/weather';
import {WeatherMainApi} from '../reducers/weather/reducer/types';
import normalizeApiWeatherToWeatherEntity from './normalizeApiWeatherToWeatherEntity';

describe('normalize api weather to weather entity', () => {
  it('expected correct type', () => {
    const weatherNormalized = normalizeApiWeatherToWeatherEntity(
      weatherMainApi as unknown as WeatherMainApi,
    );

    const weatherTimeEntity = weatherNormalized.data[0];

    expect(typeof weatherNormalized.city.name === 'string').toBeTruthy();
    expect(Array.isArray(weatherNormalized.data)).toBeTruthy();
    expect(
      weatherNormalized.data.length === weatherMainApi.list.length,
    ).toBeTruthy();
    expect(typeof weatherTimeEntity.description === 'string').toBeTruthy();
    expect(typeof weatherTimeEntity.icon === 'string').toBeTruthy();
    expect(typeof weatherTimeEntity.mainWeather === 'number').toBeTruthy();
    expect(typeof weatherTimeEntity.minMainWeather === 'number').toBeTruthy();
    expect(typeof weatherTimeEntity.maxMainWeather === 'number').toBeTruthy();
  });

  it('expected correct value', () => {
    const weatherNormalized = normalizeApiWeatherToWeatherEntity(
      weatherMainApi as unknown as WeatherMainApi,
    );
    const weatherTimeApi = weatherMainApi.list[0];
    const weatherTimeEntity = weatherNormalized.data[0];

    expect(weatherNormalized.city.name).toEqual(weatherMainApi.city.name);
    expect(weatherTimeEntity.description).toEqual(
      weatherTimeApi.weather[0].description,
    );
    expect(weatherTimeEntity.icon).toEqual(weatherTimeApi.weather[0].icon);

    expect(weatherTimeEntity.mainWeather).toEqual(weatherTimeApi.main.temp);
    expect(weatherTimeEntity.minMainWeather).toEqual(
      weatherTimeApi.main.temp_min,
    );
    expect(weatherTimeEntity.maxMainWeather).toEqual(
      weatherTimeApi.main.temp_max,
    );
  });
});
