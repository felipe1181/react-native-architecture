import {PropsInstanceCurrentAction} from 'core/utils/functions/buildReducer';

export interface WeatherMainApi {
  list: Array<{
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      },
    ];
    dt_txt: string;
  }>;
  city: {
    id: number;
    name: string;
  };
}

export interface WeatherTime {
  id: string;
  description: string;
  icon: string;
  time: string;
  mainWeather: number;
  minMainWeather: number;
  maxMainWeather: number;
}

export interface WeatherMain extends Pick<WeatherMainApi, 'city'> {
  data: Array<WeatherTime>;
}

export interface StateProvider {
  data: WeatherMain;
  weatherChosedIndex: number;
}

export enum TypeActionsStateProvider {
  SET_WEATHERS = '@weathers/set_weathers',
  SET_CURRENT_WEATHER = '@weathers/set_current_weather',
}

export interface BindActionsProvider {
  setWeathers: (props: WeatherMainApi) => void;
  setCurrentWeather: (props: number) => void;
}

export interface ActionsProvider<STATE> {
  [TypeActionsStateProvider.SET_WEATHERS]: (
    props: PropsInstanceCurrentAction<
      STATE,
      {
        type: TypeActionsStateProvider.SET_WEATHERS;
        payload: WeatherMainApi;
      }
    >,
  ) => StateProvider;
  [TypeActionsStateProvider.SET_CURRENT_WEATHER]: (
    props: PropsInstanceCurrentAction<
      STATE,
      {
        type: TypeActionsStateProvider.SET_CURRENT_WEATHER;
        payload: number;
      }
    >,
  ) => StateProvider;
}

export interface CurrentAction {
  type: keyof ActionsProvider<StateProvider>;
}

export type WeatherContext = StateProvider & BindActionsProvider;
