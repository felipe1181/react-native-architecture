import {normalizeApiWeatherToWeatherEntity} from 'modules/home/utils';
import {weatherState, weatherMainApi} from '../../../../../../__mock__/weather';
import actions from './actions';
import {TypeActionsStateProvider, WeatherMainApi} from './types';

describe('actions reducer weather', () => {
  describe('action set weathers', () => {
    const actionSetWeathers = actions['@weathers/set_weathers'];

    it('expected correct type state', () => {
      const mockWeatherMainApi = weatherMainApi as unknown as WeatherMainApi;
      const responseAction = actionSetWeathers({
        state: weatherState,
        action: {
          type: TypeActionsStateProvider.SET_WEATHERS,
          payload: mockWeatherMainApi,
        },
      });
      const weatherNormalized =
        normalizeApiWeatherToWeatherEntity(mockWeatherMainApi);

      expect(responseAction.data).toMatchObject(weatherNormalized);
      expect(responseAction.weatherChosedIndex).toEqual(0);
    });
  });

  describe('action set current weather', () => {
    const actionSetCurrentWeather = actions['@weathers/set_current_weather'];

    it('expected correct type state', () => {
      const responseAction = actionSetCurrentWeather({
        state: weatherState,
        action: {
          type: TypeActionsStateProvider.SET_CURRENT_WEATHER,
          payload: 1,
        },
      });

      expect(responseAction.data).toMatchObject(weatherState.data);
      expect(responseAction.weatherChosedIndex).toEqual(1);
    });

    it('should show old value the index if set value outside range the list', () => {
      const responseActionIndexMaxSize = actionSetCurrentWeather({
        state: weatherState,
        action: {
          type: TypeActionsStateProvider.SET_CURRENT_WEATHER,
          payload: 10000,
        },
      });

      const responseActionIndexMinSize = actionSetCurrentWeather({
        state: weatherState,
        action: {
          type: TypeActionsStateProvider.SET_CURRENT_WEATHER,
          payload: -1,
        },
      });

      expect(responseActionIndexMaxSize.weatherChosedIndex).toEqual(0);
      expect(responseActionIndexMinSize.weatherChosedIndex).toEqual(0);
    });
  });
});
