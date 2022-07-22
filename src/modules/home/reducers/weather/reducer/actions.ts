import {
  StateProvider,
  ActionsProvider,
  TypeActionsStateProvider,
} from './types';
import {normalizeApiWeatherToWeatherEntity} from 'modules/home/utils';

const actions: ActionsProvider<StateProvider> = {
  [TypeActionsStateProvider.SET_WEATHERS]: ({state, action}) => {
    const data = normalizeApiWeatherToWeatherEntity(action?.payload);
    return {
      ...state,
      data,
      weatherChosedIndex: 0,
    };
  },
  [TypeActionsStateProvider.SET_CURRENT_WEATHER]: ({state, action}) => {
    return {
      ...state,
      weatherChosedIndex: Number(action?.payload),
    };
  },
};

export default actions;
